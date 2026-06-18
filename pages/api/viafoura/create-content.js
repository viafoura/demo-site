import { getUserCookies } from "@/lib/viafoura/getUserCookies";
import { handleHTTPResponseError } from "@/utils/handleHTTPResponseError";

import userComments from "./data/userComments.json";

const VF_LIVECOMMENTS_API = `https://livecomments.viafoura.co/v4/livecomments/${process.env.VF_SITE_UUID}`;
const VF_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const DATOCMS_API = "https://site-api.datocms.com";
const DATOCMS_HEADERS = {
  ...VF_HEADERS,
  Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
};

const getPosts = async () => {
  const response = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: DATOCMS_HEADERS,
    body: JSON.stringify({
      query: `{
        allPosts { id vfPostContainerId autoPopulate slug title excerpt coverImage { url alt } }
      }`,
    }),
  });
  const { errors, data } = await response.json();
  if (errors) throw new Error(JSON.stringify(errors));
  return data.allPosts;
};

const updatePostContainerId = async (postId, newVfPostContainerId) => {
  const response = await fetch(`${DATOCMS_API}/items/${postId}`, {
    method: "PUT",
    headers: DATOCMS_HEADERS,
    body: JSON.stringify({
      data: {
        type: "item",
        id: postId,
        attributes: {
          vf_post_container_id: newVfPostContainerId,
          date: new Date().toISOString().split("T")[0],
        },
      },
    }),
  });
  await handleHTTPResponseError(response);
};

const getContainerUUID = async (post) => {
  const newVfPostContainerId = (post.vfPostContainerId ?? 0) + 1;
  const createResponse = await fetch(`${VF_LIVECOMMENTS_API}`, {
    method: "POST",
    headers: VF_HEADERS,
    body: JSON.stringify({ container_id: newVfPostContainerId.toString() }),
  });

  let content_container_uuid;
  if (createResponse.status === 409) {
    // Container already exists from a prior run where DatoCMS failed to update — look it up
    const lookupResponse = await fetch(
      `${VF_LIVECOMMENTS_API}/contentcontainer/id?container_id=${newVfPostContainerId}`,
      { method: "GET", headers: VF_HEADERS },
    );
    await handleHTTPResponseError(lookupResponse);
    ({ content_container_uuid } = await lookupResponse.json());
  } else {
    await handleHTTPResponseError(createResponse);
    ({ content_container_uuid } = await createResponse.json());
  }

  await updatePostContainerId(post.id, newVfPostContainerId);
  return content_container_uuid;
};

const createComment = async (containerUUID, cookies, comment) => {
  const response = await fetch(
    `${VF_LIVECOMMENTS_API}/${containerUUID}/comments`,
    {
      method: "POST",
      headers: { ...VF_HEADERS, Cookie: cookies },
      body: JSON.stringify(comment),
    },
  );
  await handleHTTPResponseError(response);
  return await response.json();
};

const triggerBuildProcess = async () => {
  const response = await fetch(
    `${DATOCMS_API}/build-triggers/${process.env.DATOCMS_BUILD_TRIGGER_ID}/trigger`,
    { method: "POST", headers: DATOCMS_HEADERS },
  );
  await handleHTTPResponseError(response);
};

const createViafouraContent = async (allPosts) => {
  let failures = 0;
  for (const post of allPosts) {
    if (post.autoPopulate && userComments[post.slug]) {
      let containerUUID;
      try {
        containerUUID = await getContainerUUID(post);
      } catch (e) {
        console.error(`Failed to get container for ${post.slug}`, e);
        failures++;
        continue;
      }
      for (const userComment of userComments[post.slug]) {
        try {
          const cookies = await getUserCookies({
            name: userComment.name,
            email: userComment.email,
            password: process.env.VF_USERS_PASSWORD,
            avatar: userComment.avatar,
          });
          await createComment(containerUUID, cookies, {
            content: userComment.comment,
            metadata: {
              author_host_section_uuid: process.env.VF_SITE_UUID,
              origin_summary: post.excerpt,
              origin_title: post.title,
              origin_url: `https://${process.env.VF_DOMAIN}/posts/${post.slug}`,
              origin_image_url: post.coverImage.url,
              origin_image_alt: post.coverImage.alt,
            },
          });
        } catch (e) {
          console.error(`Failed to create comment for ${post.slug}`, e);
          failures++;
        }
      }
    }
  }
  return failures;
};

export default async function handler(_, res) {
  try {
    const allPosts = await getPosts();
    const failures = await createViafouraContent(allPosts);
    await triggerBuildProcess();
    if (failures > 0) {
      res.status(207).json({ message: "Update completed with errors", failures });
    } else {
      res.status(200).json({ message: "Update Successful" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

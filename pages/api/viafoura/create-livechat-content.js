import { getUserCookies } from "@/lib/viafoura/getUserCookies";
import { handleHTTPResponseError } from "@/utils/handleHTTPResponseError";

import livechatComments from "./data/livechatComments.json";
import users from "./data/users.json";

const VF_LIVECHATS_API = `https://chat.viafoura.co/v4/chat/${process.env.VF_SITE_UUID}`;
const VF_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const getPosts = async () => {
  const response = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      ...VF_HEADERS,
      Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
        allTopics { slug vfTopicContainerId }
        allPosts { slug vfPostContainerId }
      }`,
    }),
  });
  const { errors, data } = await response.json();
  if (errors) throw new Error(JSON.stringify(errors));
  return [...data.allTopics, ...data.allPosts];
};

const getContainerUUID = async (vfContainerId) => {
  const response = await fetch(
    `${VF_LIVECHATS_API}?limit=1&container_id=${vfContainerId}`,
    { method: "GET", headers: VF_HEADERS },
  );
  await handleHTTPResponseError(response);
  const { content_container_uuid } = await response.json();
  return content_container_uuid;
};

const createComment = async (containerUUID, cookies, comment) => {
  const response = await fetch(
    `${VF_LIVECHATS_API}/${containerUUID}/messages`,
    {
      method: "POST",
      headers: { ...VF_HEADERS, Cookie: cookies },
      body: JSON.stringify(comment),
    },
  );
  await handleHTTPResponseError(response);
  return await response.json();
};

const getRandomUser = () => {
  const { name, avatar } = users[Math.floor(Math.random() * users.length)];
  return {
    name,
    email: `${name.toLowerCase().replace(" ", ".")}@example.com`,
    password: process.env.VF_USERS_PASSWORD,
    avatar: `https://randomuser.me/api/portraits/${avatar}.jpg`,
  };
};

const createLivechatContent = async (allPosts) => {
  for (const post of allPosts) {
    if (livechatComments[post.slug]) {
      const containerUUID = await getContainerUUID(
        post.vfPostContainerId || post.vfTopicContainerId,
      );
      for (const comment of livechatComments[post.slug]) {
        const randomUser = getRandomUser();
        const cookies = await getUserCookies(randomUser);
        await createComment(containerUUID, cookies, {
          content: comment,
          metadata: {},
        });
      }
    }
  }
};

export default async function handler(_, res) {
  try {
    console.time("TIMER");
    const allPosts = await getPosts();
    await createLivechatContent(allPosts);
    res.status(200).json({ message: "Update Successful" });
    console.timeEnd("TIMER");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

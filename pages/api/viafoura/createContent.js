import userComments from "./data/userComments.json";

const VF_LIVECOMMENTS_API = `https://livecomments.viafoura.co/v4/livecomments/${process.env.VF_SITE_UUID}`;
const VF_AUTH_API = `https://api.viafoura.co/v2/${process.env.VF_DOMAIN}/users`;
const VF_HEADERS = { "Content-Type": "application/json", Accept: "application/json" };
const DATOCMS_API = "https://site-api.datocms.com";
const DATOCMS_HEADERS = { ...VF_HEADERS, Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}` };

const handleHTTPResponseError = async (response) => {
  if (response.status === 400) throw new Error(`{"http_status":400,"error":"Bad Request"}`);
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(JSON.stringify(errorResponse));
  }
};

const getPosts = async () => {
  const response = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: DATOCMS_HEADERS,
    body: JSON.stringify({
      query: `{
        allPosts { id vfPostContainerId slug title excerpt coverImage { url alt } }
      }`,
    }),
  });
  const { errors, data } = await response.json();
  if (errors) throw new Error(JSON.stringify(errors));
  return data.allPosts;
};

const getTrendingArticlesCount = async () => {
  const response = await fetch(
    `${VF_LIVECOMMENTS_API}/trending?limit=1&content_window_hours=48&sorted_by=total_visible_contents`,
    { method: "GET", headers: VF_HEADERS }
  );
  await handleHTTPResponseError(response);
  const { trending } = await response.json();
  return trending.length;
};

const getNewVfPostContainerId = async (postId, vfPostContainerId) => {
  const newVfPostContainerId = vfPostContainerId + 1;
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
  return newVfPostContainerId;
};

const loginUser = async ({ email, password }) => {
  const response = await fetch(`${VF_AUTH_API}/login`, {
    method: "POST",
    headers: VF_HEADERS,
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
  const session = await response.json();
  if (session.error === "Unregistered email address.") {
    return session;
  }
  const cookieString = response.headers.getSetCookie();
  const cookies = cookieString.map((item) => item.split(";")[0]).join(";");
  return cookies;
};

const signupUser = async (user) => {
  const response = await fetch(`${VF_AUTH_API}`, {
    method: "POST",
    headers: VF_HEADERS,
    body: JSON.stringify(user),
  });
  await handleHTTPResponseError(response);
  const { result } = await response.json();
  return result.id;
};

const updateAvatar = async ({ avatar }, userId, cookies) => {
  const response = await fetch(`${VF_AUTH_API}/${userId}`, {
    method: "PATCH",
    headers: { ...VF_HEADERS, Cookie: cookies },
    body: JSON.stringify({ avatar }),
  });
  await handleHTTPResponseError(response);
};

const getCookies = async (user) => {
  let cookies = await loginUser(user);
  if (cookies.error === "Unregistered email address.") {
    const userId = await signupUser(user);
    cookies = await loginUser(user);
    await updateAvatar(user, userId, cookies);
  }
  return cookies;
};

const getContainerUUID = async (post, trendingArticlesCount) => {
  if (trendingArticlesCount === 0) {
    const newVfPostContainerId = await getNewVfPostContainerId(post.id, post.vfPostContainerId);
    const response = await fetch(`${VF_LIVECOMMENTS_API}`, {
      method: "POST",
      headers: VF_HEADERS,
      body: JSON.stringify({ container_id: newVfPostContainerId }),
    });
    await handleHTTPResponseError(response);
    const { content_container_uuid } = await response.json();
    return content_container_uuid;
  } else {
    const response = await fetch(
      `${VF_LIVECOMMENTS_API}/contentcontainer/id?container_id=${post.vfPostContainerId}`
    );
    await handleHTTPResponseError(response);
    const { content_container_uuid } = await response.json();
    return content_container_uuid;
  }
};

const createComment = async (containerUUID, cookies, comment) => {
  const response = await fetch(`${VF_LIVECOMMENTS_API}/${containerUUID}/comments`, {
    method: "POST",
    headers: { ...VF_HEADERS, Cookie: cookies },
    body: JSON.stringify(comment),
  });
  await handleHTTPResponseError(response);
  return await response.json();
};

const triggerBuildProcess = async () => {
  const response = await fetch(
    `${DATOCMS_API}/build-triggers/${process.env.DATOCMS_BUILD_TRIGGER_ID}/trigger`,
    { method: "POST", headers: DATOCMS_HEADERS }
  );
  await handleHTTPResponseError(response);
};

const createViafouraContent = async (allPosts, trendingArticlesCount) => {
  for (const post of allPosts) {
    if (userComments[post.slug]) {
      const containerUUID = await getContainerUUID(post, trendingArticlesCount);
      for (const userComment of userComments[post.slug]) {
        const cookies = await getCookies({
          name: userComment.name,
          email: userComment.email,
          password: process.env.VF_USERS_PASSWORD,
          avatar: userComment.avatar,
        });
        const comment = {
          content: userComment.comment,
          metadata: {
            author_host_section_uuid: process.env.VF_SITE_UUID,
            origin_summary: post.excerpt,
            origin_title: post.title,
            origin_url: `https://${process.env.VF_DOMAIN}/posts/${post.slug}`,
            origin_image_url: post.coverImage.url,
            origin_image_alt: post.coverImage.alt,
          },
        };
        await createComment(containerUUID, cookies, comment);
      }
    }
  }
};

export default async function handler(_, res) {
  try {
    console.time("TIMER");
    const allPosts = await getPosts();
    const trendingArticlesCount = await getTrendingArticlesCount();
    await createViafouraContent(allPosts, trendingArticlesCount);
    if (trendingArticlesCount === 0) await triggerBuildProcess();
    res.status(200).json({ message: "Update Successful" });
    console.timeEnd("TIMER");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

import { gqlBroadcastPosts } from "@/graphql/gqlBroadcastPosts";
import { handleHTTPResponseError } from "@/utils/handleHTTPResponseError";

const BROADCAST_NOTIFICATIONS_API = `https://notifications.viafoura.co/v5/notifications/${process.env.VF_SITE_UUID}`;

const getSlugsFromNotificationsInTray = async () => {
  const response = await fetch(`${BROADCAST_NOTIFICATIONS_API}/all`, {
    headers: { Accept: "application/json" },
  });
  await handleHTTPResponseError(response);
  const { broadcasts } = await response.json();
  return broadcasts.map(({ target_url }) =>
    target_url.substring(target_url.lastIndexOf("/") + 1),
  );
};

const getAllPosts = async () => {
  const response = await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GRAPHQL_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: gqlBroadcastPosts }),
  });
  const { errors, data } = await response.json();
  if (errors) throw new Error(JSON.stringify(errors));
  return data.allPosts;
};

const getRandomPost = (targetSlugs, allPosts) => {
  const filteredPosts = allPosts.filter(
    (post) => !targetSlugs.includes(post.slug),
  );
  return filteredPosts[Math.floor(Math.random() * filteredPosts.length)];
};

const getAccessToken = async () => {
  const response = await fetch("https://auth.viafoura.co/authorize_client", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${process.env.VF_AUTH_CREDENTIAL}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      scope: process.env.VF_SITE_UUID,
    }),
  });
  await handleHTTPResponseError(response);
  return await response.json();
};

const sendSiteBroadcastNotification = async (accessToken, randomPost) => {
  const response = await fetch(`${BROADCAST_NOTIFICATIONS_API}/broadcast`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      title: randomPost.title,
      description: `${randomPost.excerpt.substring(0, 110)}...`,
      url: `https://${process.env.VF_DOMAIN}/posts/${randomPost.slug}`,
      image_url: randomPost.coverImage.url,
      push_time_to_live: 3600,
      broadcast_type: "site",
    }),
  });
  await handleHTTPResponseError(response);
};

export default async function handler(_, res) {
  try {
    const targetSlugs = await getSlugsFromNotificationsInTray();
    const allPosts = await getAllPosts();
    const randomPost = getRandomPost(targetSlugs, allPosts);
    if (randomPost) {
      const { access_token } = await getAccessToken();
      await sendSiteBroadcastNotification(access_token, randomPost);
    }
    res.status(200).json({ message: "Site Broadcast Notifications Created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}

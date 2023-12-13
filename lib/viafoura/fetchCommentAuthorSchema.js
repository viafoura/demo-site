import { toVfId } from "@/lib/viafoura/toVfId";

export async function fetchCommentAuthorSchema(userUuid) {
  try {
    const response = await fetch(
      `https://api.viafoura.co/v2/${process.env.VF_DOMAIN}/users/${toVfId(
        userUuid,
      )}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function fetchCommentsSchema(containerId) {
  try {
    const response = await fetch(
      `https://livecomments.viafoura.co/v4/livecomments/${process.env.VF_SITE_UUID}?limit=10&container_id=${containerId}&reply_limit=2&sorted_by=newest`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Credentials: "include",
        },
      },
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

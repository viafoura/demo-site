export const handleHTTPResponseError = async (response) => {
  if (response.status === 400) {
    const errorResponse = await response.text();
    throw new Error(
      `{"http_status":400, "error":"Bad Request", "message":"${errorResponse}"}`,
    );
  }
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(JSON.stringify(errorResponse));
  }
};

import { handleHTTPResponseError } from "@/utils/handleHTTPResponseError";

const VF_AUTH_API = `https://api.viafoura.co/v2/${process.env.VF_DOMAIN}/users`;
const VF_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
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

export const getUserCookies = async (user) => {
  let cookies = await loginUser(user);
  if (cookies.error === "Unregistered email address.") {
    const userId = await signupUser(user);
    cookies = await loginUser(user);
    await updateAvatar(user, userId, cookies);
  }
  return cookies;
};

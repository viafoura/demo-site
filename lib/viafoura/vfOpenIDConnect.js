const handleLogin = (path) => {
  window.vf.$prepublish((channel, event, ...args) => {
    if (channel === "authentication" && event === "required") {
      window.vf.$publish("tray", "close");
      window.open(`/api/auth/login?returnTo=${path}`, "_self");
      return false;
    } else {
      return { channel, event, args };
    }
  });
};

const handleOIDCSession = async () => {
  const response = await fetch("/api/auth/getAuth0IdToken");
  const idToken = await response.json();
  if (typeof idToken == "string") {
    window.vf.session.login.openIdConnect(idToken);
  }
};

const handleLogout = (path) => {
  window.vf.$subscribe("authentication", "logout", () => {
    window.open(`/api/auth/logout?returnTo=${path}`, "_self");
  });
};

export const vfOpenIDConnect = (path) => {
  window.vfQ = window.vfQ || [];
  window.vfQ.push(() => {
    handleLogin(path);
    handleOIDCSession();
    handleLogout(path);
  });
};

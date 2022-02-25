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

const handleLogout = (path) => {
  window.vf.$subscribe("authentication", "logout", () => {
    window.open(`/api/auth/logout?returnTo=${path}`, "_self");
  });
};

export default function vfCustomCookieLogin(path) {
  const params = new URLSearchParams(window.location.search);
  window.vfQ = window.vfQ || [];
  window.vfQ.push(() => {
    if (params.has("ccl")) {
      handleLogin(path);
      handleLogout(path);
    }
  });
}

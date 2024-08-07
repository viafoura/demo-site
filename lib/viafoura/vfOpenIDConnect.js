const handleLogin = () => {
  window.vf.$prepublish((channel, event, ...args) => {
    if (channel === "authentication" && event === "required") {
      window.vf.$publish("tray", "close");
      window.open("/api/auth/login", "_self");
      return false;
    } else {
      return { channel, event, args };
    }
  });
};

const handleLogout = () => {
  window.vf.$subscribe("authentication", "logout", () => {
    window.open("/api/auth/logout", "_self");
  });
};

const handleOIDCSession = async () => {
  const { user_privilege } = await window.vf.context.get("user");
  if (user_privilege === "guest") {
    const response = await fetch("/api/auth/getAuth0IdToken");
    if (response.status === 200) {
      const idToken = await response.json();
      window.vf.session.login.openIdConnect(idToken);
    }
  }
};

export const vfOpenIDConnect = () => {
  window.vfQ = window.vfQ || [];
  window.vfQ.push(async () => {
    handleLogin();
    handleLogout();
    await handleOIDCSession();
  });
};

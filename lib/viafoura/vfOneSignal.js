import OneSignal from "react-onesignal";

export const vfOneSignal = async () => {
  await OneSignal.init({ appId: "8add46ba-1535-4c77-8c97-4faccd2cd7e5" });

  window.vfQ = window.vfQ || [];
  window.vfQ.push(async () => {
    const { user_privilege, id } = await window.vf.context.get("user");
    if (user_privilege !== "guest") {
      await OneSignal.login(id.toString());
    } else {
      await OneSignal.logout();
    }
  });
};

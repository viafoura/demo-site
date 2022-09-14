const Zephr = require("@zephr/sdk").build("viafoura-viafoura-demo.cdn.zephr.com");

const zephrRule = async (context) => {
  const { _vfa } = Object.fromEntries(
    document.cookie.split("; ").map((v) => v.split(/=(.*)/s).map(decodeURIComponent))
  );
  const inputs = {
    sdkFeatureSlug: "sdk2",
    session: _vfa.split("-").pop(),
    path: window.location.pathname,
    contentId: document.querySelector('meta[name="vf:container_id"]').content,
  };
  const { outputValue } = await Zephr.decision(inputs);
  switch (outputValue) {
    case "allow":
      context.continue();
      break;
    case "deny":
      context.intercept();
      window.vf.$publish("tray", "open", "_", "vf-profile");
      break;
    default:
      context.intercept();
      console.log("something happened");
  }
};

export const vfZephr = () => {
  window.vfQ = window.vfQ || [];
  window.vfQ.push(() => {
    window.vf.actions.addInterceptor("live_comments.load_more", async (context) => {
      const { user_privilege } = await window.vf.context.get("user");
      if (user_privilege !== "guest") {
        context.continue();
        return;
      }
      zephrRule(context);
    });
  });
};

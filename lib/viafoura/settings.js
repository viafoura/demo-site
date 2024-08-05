export const settings = async () => {
  const searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("oidc")) {
    const { vfOpenIDConnect } = await import("@/lib/viafoura/vfOpenIDConnect");
    vfOpenIDConnect();
  }
  if (searchParams.has("onesignal")) {
    const { vfOneSignal } = await import("@/lib/viafoura/vfOneSignal");
    vfOneSignal();
  }
};

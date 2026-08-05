import Script from "next/script";

export const TICKAROO_EMBED_SRC =
  "https://cdn.tickaroo.com/webng/embedjs/tik4.js";

export default function TickarooScript() {
  return (
    <Script
      id="tickaroo-tik4"
      src={TICKAROO_EMBED_SRC}
      strategy="afterInteractive"
    />
  );
}

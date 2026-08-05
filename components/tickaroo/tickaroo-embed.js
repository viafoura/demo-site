import TickarooScript from "@/components/tickaroo/tickaroo-script";

export function hasTickarooEmbed(html) {
  return typeof html === "string" && /<tickaroo-/i.test(html);
}

function stripScriptTags(html) {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
}

export default function TickarooEmbed({ html }) {
  if (!hasTickarooEmbed(html)) {
    return null;
  }

  return (
    <div className="not-prose">
      <TickarooScript />
      <div dangerouslySetInnerHTML={{ __html: stripScriptTags(html) }} />
    </div>
  );
}

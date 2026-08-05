import TickarooScript from "@/components/tickaroo/tickaroo-script";

export default function TickarooLiveblog({ liveblogId, themeId, clientId }) {
  if (!liveblogId) {
    return null;
  }

  return (
    <div className="not-prose">
      <TickarooScript />
      <tickaroo-liveblog
        liveblogid={liveblogId}
        themeid={themeId}
        clientid={clientId}
      />
    </div>
  );
}

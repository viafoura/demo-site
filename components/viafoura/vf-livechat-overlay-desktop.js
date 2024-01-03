export default function VfLivechatOverlayDesktop() {
  return (
    <div className="hidden xl:block xl:w-2/6">
      <div
        id="livechat-wrapper"
        style={{ height: "470px" }}
        className="viafoura"
      >
        <vf-livechat vf-container-id="livechat-nba" />
      </div>
    </div>
  );
}

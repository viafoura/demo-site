export default function VfLivechatOverlayMobile() {
  return (
    <div className="absolute bottom-0 left-0 right-0 sm:hidden">
      <div
        id="livechat-wrapper"
        style={{ height: "175px" }}
        className="viafoura"
      >
        <vf-livechat vf-container-id="livechat-nba" />
      </div>
    </div>
  );
}

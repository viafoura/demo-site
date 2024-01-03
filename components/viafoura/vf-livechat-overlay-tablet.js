export default function VfLivechatOverlayTablet() {
  return (
    <div className="absolute right-0 top-0 hidden h-[470px] sm:block sm:w-3/6 md:w-2/6 xl:hidden">
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

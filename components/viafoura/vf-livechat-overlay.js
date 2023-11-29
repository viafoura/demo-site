export default function VfLivechatOverlay({ height }) {
  return (
    <div id="livechat-wrapper" style={{ height }} className="viafoura">
      <vf-livechat vf-container-id="livechat-nba" />
    </div>
  );
}

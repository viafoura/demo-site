export default function VfLivechat({ topicId }) {
  return (
    <div id="livechat-wrapper" style={{ height: "550px" }} className="viafoura">
      <vf-livechat vf-container-id={topicId}></vf-livechat>
    </div>
  );
}

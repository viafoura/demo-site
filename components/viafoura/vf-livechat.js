export default function VfLivechat({ vfTopicContainerId }) {
  return (
    <div id="livechat-wrapper" className="viafoura h-[550px]">
      <vf-livechat vf-container-id={vfTopicContainerId} />
    </div>
  );
}

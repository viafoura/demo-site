import useHasMounted from "@/hooks/useHasMounted";

export default function VfLivechat({ vfTopicContainerId }) {
  const hasMounted = useHasMounted();

  return (
    hasMounted && (
      <div id="livechat-wrapper" className="viafoura h-[550px]">
        <vf-livechat vf-container-id={vfTopicContainerId}></vf-livechat>
      </div>
    )
  );
}

import useHasMounted from "@/hooks/useHasMounted";

export default function VfLivechat({ topicId }) {
  const hasMounted = useHasMounted();

  return (
    hasMounted && (
      <div id="livechat-wrapper" className="viafoura h-[550px]">
        <vf-livechat vf-container-id={topicId}></vf-livechat>
      </div>
    )
  );
}

import useHasMounted from "@/hooks/useHasMounted";

export default function VfConversationsCount({ postId }) {
  const hasMounted = useHasMounted();

  return (
    hasMounted && (
      <div className="viafoura">
        <vf-conversations-count vf-container-id={postId} />
      </div>
    )
  );
}

import useHasMounted from "@/hooks/useHasMounted";

export default function VfConversationsCount({ vfPostContainerId }) {
  const hasMounted = useHasMounted();

  return (
    hasMounted && (
      <div className="viafoura">
        <vf-conversations-count vf-container-id={vfPostContainerId} />
      </div>
    )
  );
}

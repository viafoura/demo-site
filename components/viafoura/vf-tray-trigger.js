import useHasMounted from "@/hooks/useHasMounted";

export default function VfTrayTrigger() {
  const hasMounted = useHasMounted();

  return (
    hasMounted && (
      <div className="viafoura">
        <vf-tray-trigger />
      </div>
    )
  );
}

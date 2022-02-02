import useHasMounted from "@/hooks/useHasMounted";

export default function VfStandaloneAd() {
  const hasMounted = useHasMounted();

  return (
    hasMounted && (
      <div className="viafoura">
        <vf-standalone-ad></vf-standalone-ad>
      </div>
    )
  );
}

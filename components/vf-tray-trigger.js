import { useEffect, useState } from "react";

export default function VfTrayTrigger() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className="viafoura">
        <vf-tray-trigger />
      </div>
    )
  );
}

import React, { useEffect, useState } from "react";

export default function ShareBar({ showTotal }) {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1450) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1450) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);
  
  return (
    <div className="viafoura">
      {isDesktop ? (
        <div
          className="vf-widget vf-share-bar-circle vf-share-bar-vertical"
          data-widget="sharebar"
          data-button-view="false"
          data-show-labels="false"
          data-show-counters="false"
          data-show-total={ showTotal }
          data-path="/"
        ></div>
      ) : (
        <div
          className="vf-widget vf-share-bar-circle vf-share-bar-horizontal"
          data-widget="sharebar"
          data-button-view="false"
          data-show-labels="false"
          data-show-counters="false"
          data-show-total={ showTotal }
          data-path="/"
        ></div>
      )}
    </div>
  );
}

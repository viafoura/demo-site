export default function ShareBar({ showTotal }) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1100);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  
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

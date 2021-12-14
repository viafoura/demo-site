export default function ShareBar({ showTotal, className }) {
  return (
    <div className="viafoura">
      <div
        className={`vf-widget vf-share-bar-circle ${className}`}
        data-widget="sharebar"
        data-button-view="false"
        data-show-labels="false"
        data-show-counters="false"
        data-show-total={showTotal}
        data-path="/"
      ></div>
    </div>
  );
}

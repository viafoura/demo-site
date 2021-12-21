export default function ShareBar({ showTotal, orientation }) {
  return (
    <div className="viafoura">
      <div
        className={`vf-widget vf-share-bar-circle ${orientation}`}
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

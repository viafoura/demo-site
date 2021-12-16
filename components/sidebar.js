export default function Sidebar() {
  return (
    <div className="w-[310px] ml-8 hidden lg:block">
      <div className="viafoura">
        <vf-standalone-ad></vf-standalone-ad>
      </div>
      <div>
        <div className="border-b-[1px] border-b-neutral-300 mt-6 mb-4 pb-1 text-lg font-bold">
          Talk Politics
        </div>
        <div
          id="livechat-wrapper"
          style={{ height: "550px" }}
          className="viafoura"
        >
          <vf-livechat></vf-livechat>
        </div>
      </div>
      <div className="mt-7">
        <div className="viafoura">
          <vf-trending-articles
            title="Trending Articles"
            limit="5"
            days-published="7"
            trend-window="1"
            sort="comments"
            view="full"
            vf-container-id="currentPageContainer"
          ></vf-trending-articles>
        </div>
      </div>
    </div>
  );
}

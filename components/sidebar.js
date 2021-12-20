export default function Sidebar({ showLiveChat, topicId, topicName }) {
  return (
    <div className="w-[310px] ml-8 hidden lg:block">
      <div className="min-w-[300px] min-h-[275px]">
        <div className="viafoura">
          <vf-standalone-ad></vf-standalone-ad>
        </div>
      </div>
      {showLiveChat && (
        <>
          <div className="border-b-[1px] border-b-neutral-300 mt-6 mb-4 pb-1 text-lg font-bold">
            Talk {topicName}
          </div>
          <div className="min-w-[300px] min-h-[550px]">
            <div
              id="livechat-wrapper"
              style={{ height: "550px" }}
              className="viafoura"
            >
              <vf-livechat vf-container-id={topicId}></vf-livechat>
            </div>
          </div>
        </>
      )}
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

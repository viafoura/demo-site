import VfLivechat from "@/components/vf-livechat";
import VfStandaloneAd from "@/components/vf-standalone-ad";
import VfTrendingArticlesVertical from "@/components/vf-trending-articles-vertical";

export default function Sidebar({ showLiveChat, topicId, topicName }) {
  return (
    <div className="w-[310px] ml-8 hidden lg:block">
      <div className="min-w-[300px] min-h-[275px]">
        <VfStandaloneAd />
      </div>
      {showLiveChat && (
        <>
          <div className="border-b-[1px] border-b-neutral-300 mt-6 mb-4 pb-1 text-lg font-bold">
            Talk {topicName}
          </div>
          <div className="min-w-[300px] min-h-[550px]">
            <VfLivechat topicId={topicId} />
          </div>
        </>
      )}
      <div className="mt-7">
        <VfTrendingArticlesVertical />
      </div>
    </div>
  );
}

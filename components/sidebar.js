import VfLivechat from "@/components/viafoura/vf-livechat";
import VfStandaloneAd from "@/components/viafoura/vf-standalone-ad";
import VfTrendingArticlesVertical from "@/components/viafoura/vf-trending-articles-vertical";

export default function Sidebar({ showLiveChat, vfTopicContainerId, topicName }) {
  return (
    <div className="ml-8 hidden w-[310px] lg:block">
      <div className="min-h-[275px] min-w-[300px]">
        <VfStandaloneAd />
      </div>
      {showLiveChat && (
        <>
          <div className="mt-6 mb-4 border-b-[1px] border-b-neutral-300 pb-1 text-lg font-bold dark:border-neutral-600">
            Talk {topicName}
          </div>
          <div className="min-h-[550px] min-w-[300px]">
            <VfLivechat vfTopicContainerId={vfTopicContainerId} />
          </div>
        </>
      )}
      <div className="mt-7">
        <VfTrendingArticlesVertical />
      </div>
    </div>
  );
}

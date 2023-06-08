import VfTopicFollow from "@/components/viafoura/vf-topic-follow";

export default function PostTopicsFollow({ topics }) {
  return (
    <div className="mb-8 mt-3 border-b border-t border-gray-300 pb-5 pt-4 dark:border-neutral-600">
      <div className="mb-3 text-xs font-semibold">Follow Article Topics</div>
      <div className="flex">
        {topics.map((topic) => (
          <div key={topic.id} className="mr-3 flex items-center">
            <div className="mr-2 font-semibold text-neutral-600">
              {topic.name}
            </div>
            <div className="not-prose pr-1">
              <VfTopicFollow
                vfTopicContainerId={topic.vfTopicContainerId}
                topicName={topic.name}
                topicType="topic"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

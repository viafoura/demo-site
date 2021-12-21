import VfTopicFollow from "@/components/vf-topic-follow";

export default function PostTopicsFollow({ topics }) {
  return (
    <div className="pt-4 pb-5 mt-3 mb-8 border-t border-b border-gray-300">
      <div className="mb-3 text-xs font-semibold">Follow Article Topics</div>
      <div className="flex">
        {topics.map((topic) => (
          <div key={topic.id} className="flex items-center mr-3">
            <div className="mr-2 font-semibold text-neutral-600">
              {topic.name}
            </div>
            <div className="pr-1 not-prose">
              <VfTopicFollow
                topicId={topic.id}
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

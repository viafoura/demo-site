import PostPreview from "@/components/post-preview";
import VfStandalonePoll from "@/components/viafoura/vf-standalone-poll";
import VfTopicFollow from "@/components/viafoura/vf-topic-follow";

const POLL_INSERT_INDEX = 7;

export default function MoreStories({
  title,
  posts,
  topicName,
  vfTopicContainerId,
  pollContainerId,
}) {
  const items = [];
  posts.forEach((post, i) => {
    if (pollContainerId && i === POLL_INSERT_INDEX) {
      items.push({ type: "poll" });
    }
    items.push({ type: "post", post });
  });

  return (
    <section className="pb-6">
      <div className="mb-6 flex items-center">
        <h2>{title}</h2>
        {vfTopicContainerId && (
          <div className="ml-4">
            <VfTopicFollow
              vfTopicContainerId={vfTopicContainerId}
              topicName={topicName}
              topicType="topic"
            />
          </div>
        )}
      </div>
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) =>
          item.type === "poll" ? (
            <div key="poll">
              <VfStandalonePoll vfContainerId={pollContainerId} />
            </div>
          ) : (
            <PostPreview
              key={item.post.slug}
              vfPostContainerId={item.post.vfPostContainerId}
              title={item.post.title}
              coverImage={item.post.coverImage}
              author={item.post.author}
              slug={item.post.slug}
              excerpt={item.post.excerpt}
              blocks={item.post.content.blocks}
            />
          )
        )}
      </div>
    </section>
  );
}

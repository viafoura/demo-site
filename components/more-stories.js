import PostPreview from "@/components/post-preview";
import VfStandalonePoll from "@/components/viafoura/vf-standalone-poll";
import VfTopicFollow from "@/components/viafoura/vf-topic-follow";

const POLL_INSERT_INDEX = 4;

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
            <div
              key="poll"
              className="rounded-lg border border-gray-200 p-5 shadow-sm dark:border-neutral-700"
            >
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0"
                >
                  <path d="M3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h9a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1Z" />
                </svg>
                Poll Question
              </div>
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

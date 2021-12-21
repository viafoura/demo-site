import PostPreview from "@/components/post-preview";
import TopicFollow from "@/components/topic-follow";

export default function MoreStories({
  title,
  posts,
  topicId = null,
  topicName = null,
}) {
  return (
    <section className="pb-6">
      <div className="flex items-center mb-6">
        <h2>{title}</h2>
        {topicId && (
          <div className="ml-4">
            <TopicFollow
              topicId={topicId}
              topicName={topicName}
              topicType="topic"
            />
          </div>
        )}
      </div>
      <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            id={post.id}
            title={post.title}
            coverImage={post.coverImage}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            blocks={post.content.blocks}
          />
        ))}
      </div>
    </section>
  );
}

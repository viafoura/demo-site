import PostPreview from "@/components/post-preview";
import VfTopicFollow from "@/components/vf-topic-follow";

export default function MoreStories({ title, posts, topicId, topicName }) {
  return (
    <section className="pb-6">
      <div className="mb-6 flex items-center">
        <h2>{title}</h2>
        {topicId && (
          <div className="ml-4">
            <VfTopicFollow
              topicId={topicId}
              topicName={topicName}
              topicType="topic"
            />
          </div>
        )}
      </div>
      <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2">
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

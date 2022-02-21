import PostPreview from "@/components/post-preview";
import VfTopicFollow from "@/components/viafoura/vf-topic-follow";

export default function MoreStories({ title, posts, topicName, vfTopicContainerId }) {
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
      <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            vfPostContainerId={post.vfPostContainerId}
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

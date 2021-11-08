import PostPreview from "@/components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8">More Stories</h2>
      <div className="grid sm:grid-cols-2 gap-x-16 gap-y-8 mb-14">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            id={post.id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}

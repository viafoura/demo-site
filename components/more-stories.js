import PostPreview from "@/components/post-preview";

export default function MoreStories({ title, posts }) {
  return (
    <section className="pb-6">
      <h2 className="mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10">
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

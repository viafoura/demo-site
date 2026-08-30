import AuthorHome from "@/components/author-home";
import CoverImage from "@/components/cover-image";
import VfStandalonePoll from "@/components/viafoura/vf-standalone-poll";

function SmallArticle({ post }) {
  return (
    <a href={`/posts/${post.slug}`} className="group block">
      <CoverImage responsiveImage={post.coverImage.responsiveImage} slug={post.slug} />
      <h3 className="mt-1 text-sm font-semibold leading-snug group-hover:underline">
        {post.title}
      </h3>
    </a>
  );
}

export default function HomeHeroSplit({ featuredPost, sidePosts }) {
  return (
    <section className="my-8 pb-11">
      <div className="grid gap-x-8 sm:grid-cols-2">
        <div>
          <CoverImage
            responsiveImage={featuredPost.coverImage.responsiveImage}
            slug={featuredPost.slug}
          />
          <h1 className="mb-2 mt-4">
            <a href={`/posts/${featuredPost.slug}`} className="hover:underline">
              {featuredPost.title}
            </a>
          </h1>
          <p className="mb-4 text-base text-gray-700 antialiased">
            {featuredPost.excerpt}
          </p>
          <AuthorHome
            authorName={featuredPost.author.name}
            postSlug={featuredPost.slug}
            vfPostContainerId={featuredPost.vfPostContainerId}
            vfConversationId={featuredPost.content.blocks.find((b) => b.id)}
          />
        </div>

        <div className="flex flex-col gap-6">
          <VfStandalonePoll vfContainerId={featuredPost.vfPostContainerId} />
          {sidePosts.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {sidePosts.map((post) => (
                <SmallArticle key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

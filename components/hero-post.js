import AuthorHome from "@/components/author-home";
import CoverImage from "@/components/cover-image";

export default function HeroPost({
  vfPostContainerId,
  title,
  coverImage,
  excerpt,
  author,
  slug,
  blocks,
}) {
  return (
    <section className="pb-11">
      <div className="my-8">
        <CoverImage responsiveImage={coverImage.responsiveImage} slug={slug} />
      </div>
      <div className="grid gap-x-6 sm:grid-cols-2">
        <h1>
          <a href={`/posts/${slug}`} className="hover:underline">
            {title}
          </a>
        </h1>
        <div>
          <p className="mt-4 mb-4 text-base text-gray-700 antialiased sm:mt-0">{excerpt}</p>
          <AuthorHome
            authorName={author.name}
            postSlug={slug}
            vfPostContainerId={vfPostContainerId}
            vfConversationId={blocks.find((block) => block.id)}
          />
        </div>
      </div>
    </section>
  );
}

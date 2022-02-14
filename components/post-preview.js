import AuthorHome from "@/components/author-home";
import CoverImage from "@/components/cover-image";

export default function PostPreview({
  vfPostContainerId,
  title,
  coverImage,
  excerpt,
  author,
  slug,
  blocks,
}) {
  return (
    <div>
      <CoverImage responsiveImage={coverImage.responsiveImage} slug={slug} />
      <h3 className="mb-3">
        <a href={`/posts/${slug}`} className="hover:underline">
          {title}
        </a>
      </h3>
      <p className="mb-4 text-base text-gray-700 antialiased">{excerpt}</p>
      <AuthorHome
        authorName={author.name}
        vfPostContainerId={vfPostContainerId}
        postSlug={slug}
        vfConversationId={blocks.find((block) => block.id)}
      />
    </div>
  );
}

import AvatarHome from "@/components/avatar-home";
import CoverImage from "@/components/cover-image";

export default function PostPreview({
  id,
  title,
  coverImage,
  excerpt,
  author,
  slug,
  blocks,
}) {
  return (
    <div>
      <CoverImage
        slug={slug}
        title={title}
        responsiveImage={coverImage.responsiveImage}
      />
      <h3 className="mb-3">
        <a href={`/posts/${slug}`} className="hover:underline">
          {title}
        </a>
      </h3>
      <p className="mb-4 text-base antialiased text-gray-700">{excerpt}</p>
      <AvatarHome
        authorName={author.name}
        postId={id}
        postSlug={slug}
        vfConversationId={blocks.find((block) => block.id)}
      />
    </div>
  );
}

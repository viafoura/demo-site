import AvatarHome from "@/components/avatar-home";
import CoverImage from "@/components/cover-image";

export default function HeroPost({
  id,
  title,
  coverImage,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="pb-11">
      <div className="my-8">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
          slug={slug}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-x-6">
        <h1>
          <a href={`/posts/${slug}`} className="hover:underline">
            {title}
          </a>
        </h1>
        <div>
          <p className="mt-4 mb-4 text-base antialiased text-gray-700 sm:mt-0">
            {excerpt}
          </p>
          <AvatarHome name={author.name} postId={id} slug={slug} />
        </div>
      </div>
    </section>
  );
}

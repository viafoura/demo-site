import AvatarHome from "@/components/avatar-home";
import CoverImage from "@/components/cover-image";

export default function HeroPost({
  id,
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="my-8">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
          slug={slug}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-x-10 mb-8">
        <h1>
          <a href={`/posts/${slug}`} className="hover:underline">
            {title}
          </a>
        </h1>
        <div>
          <p className="text-gray-700 antialiased text-base mt-4 sm:mt-0 mb-4">
            {excerpt}
          </p>
          <AvatarHome name={author.name} postId={id} />
        </div>
      </div>
    </section>
  );
}

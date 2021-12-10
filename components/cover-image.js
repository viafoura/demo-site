import { Image } from "react-datocms";

export default function CoverImage({ title, responsiveImage, slug }) {
  const image = (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className="mb-5 shadow-lg"
    />
  );
  return (
    <div>
      {slug ? (
        <a href={`/posts/${slug}`} aria-label={title}>
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  );
}

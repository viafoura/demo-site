/* eslint-disable jsx-a11y/alt-text */
import { Image } from "react-datocms";

export default function CoverImage({ responsiveImage, slug }) {
  return (
    <div>
      {slug ? (
        <a href={`/posts/${slug}`}>
          <Image data={responsiveImage} className="mb-5 shadow-lg" />
        </a>
      ) : (
        <Image data={responsiveImage} className="mb-5 shadow-lg" />
      )}
    </div>
  );
}

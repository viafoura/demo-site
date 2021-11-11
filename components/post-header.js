import AvatarPost from "@/components/avatar-post";
import CoverImage from "@/components/cover-image";
import PostTitle from "@/components/post-title";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  postId,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <CoverImage title={title} responsiveImage={coverImage.responsiveImage} />
      <AvatarPost
        name={author.name}
        picture={author.picture}
        date={date}
        postId={postId}
      />
    </>
  );
}

import AvatarPost from "@/components/avatar-post";
import CoverImage from "@/components/cover-image";
import PostTitle from "@/components/post-title";
import ShareBar from "@/components/sharebar";

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
      <AvatarPost
        name={author.name}
        picture={author.picture}
        date={date}
        postId={postId}
      />
      <ShareBar showTotal={true} />
      <CoverImage title={title} responsiveImage={coverImage.responsiveImage} />
    </>
  );
}

import AvatarPost from "@/components/avatar-post";
import CoverImage from "@/components/cover-image";
import PostTitle from "@/components/post-title";
import PostTopics from "@/components/post-topics";
import ShareBar from "@/components/sharebar";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  postId,
  topics,
  vfConversation,
}) {
  return (
    <>
      <PostTopics topics={topics} />
      <PostTitle>{title}</PostTitle>
      <AvatarPost
        authorId={author.id}
        authorName={author.name}
        authorPicture={author.picture}
        postDate={date}
        postId={postId}
        vfConversation={vfConversation}
      />
      <ShareBar
        showTotal={true}
        className="hidden lg:block vf-share-bar-vertical"
      />

      <CoverImage title={title} responsiveImage={coverImage.responsiveImage} />

      <ShareBar
        showTotal={true}
        className="block lg:hidden vf-share-bar-horizontal"
      />
    </>
  );
}

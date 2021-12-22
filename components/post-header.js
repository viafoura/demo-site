import AuthorPost from "@/components/author-post";
import CoverImage from "@/components/cover-image";
import PostTitle from "@/components/post-title";
import PostTopics from "@/components/post-topics";
import VfShareBar from "@/components/vf-sharebar";

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
      <AuthorPost
        authorId={author.id}
        authorName={author.name}
        authorPicture={author.picture}
        postDate={date}
        postId={postId}
        vfConversation={vfConversation}
      />
      <div className="hidden xl:block">
        <VfShareBar showTotal={true} orientation="vertical" />
      </div>
      <CoverImage title={title} responsiveImage={coverImage.responsiveImage} />
      <div className="block xl:hidden">
        <VfShareBar showTotal={true} orientation="horizontal" />
      </div>
    </>
  );
}

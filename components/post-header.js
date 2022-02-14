import AuthorPost from "@/components/author-post";
import CoverImage from "@/components/cover-image";
import PostTitle from "@/components/post-title";
import PostTopics from "@/components/post-topics";
import VfShareBar from "@/components/viafoura/vf-sharebar";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  topics,
  vfPostContainerId,
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
        vfPostContainerId={vfPostContainerId}
        vfConversation={vfConversation}
      />
      <div className="hidden xl:block">
        <VfShareBar showTotal={true} orientation="vertical" />
      </div>
      <CoverImage responsiveImage={coverImage.responsiveImage} />
      <div className="block xl:hidden">
        <VfShareBar showTotal={true} orientation="horizontal" />
      </div>
    </>
  );
}

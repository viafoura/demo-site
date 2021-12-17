import React, { useEffect, useState } from "react";

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
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1100) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const resetVf = (() => {
      let executed = false;
      return function () {
        if (!executed) {
          executed = true;
          vf.context.reset();
        }
      };
    })();

    const updateMedia = () => {
      if (window.innerWidth > 1100) {
        setDesktop(true);
        resetVf();
      } else {
        setDesktop(false);
        resetVf();
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

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
      {isDesktop && (
        <ShareBar showTotal={true} className="vf-share-bar-vertical" />
      )}

      <CoverImage title={title} responsiveImage={coverImage.responsiveImage} />

      {!isDesktop && (
        <ShareBar showTotal={true} className="vf-share-bar-horizontal" />
      )}
    </>
  );
}

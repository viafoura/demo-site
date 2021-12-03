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
}) {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1100) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1100) {
        setDesktop(true);
        vf.context.reset();
      } else {
        setDesktop(false);
        vf.context.reset();
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
        name={author.name}
        picture={author.picture}
        date={date}
        postId={postId}
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

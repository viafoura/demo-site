import { BiCommentDetail } from "react-icons/bi";

import AuthorFollow from "@/components/author-follow";
import Date from "@/components/date";

export default function AvatarPost({
  authorId,
  authorName,
  authorPicture,
  postDate,
  postId,
  vfConversation,
}) {
  return (
    <div className="mb-5 sm:flex">
      <AuthorFollow
        authorId={authorId}
        authorName={authorName}
        authorPicture={authorPicture}
      />
      <div className="flex items-center sm:pl-4">
        <div className="mr-3 border-gray-300 sm:border-l sm:pl-3">
          <Date dateString={postDate} />
        </div>
        {vfConversation && (
          <div className="flex pl-3 font-semibold text-gray-800 border-l border-gray-300">
            <a
              className="flex mr-3 hover:underline"
              href="#vf-conversations-container"
              alt="Join the Conversation"
              title="Join the Conversation"
            >
              <BiCommentDetail className="w-5 h-5 mt-[3px] mr-1" />{" "}
              <vf-conversations-count vf-container-id={postId} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

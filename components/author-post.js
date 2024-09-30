import { BiCommentDetail } from "react-icons/bi";

import AuthorFollow from "@/components/author-follow";
import Date from "@/components/date";
import VfConversationsCount from "@/components/viafoura/vf-conversations-count";

export default function AuthorPost({
  authorId,
  authorName,
  authorPicture,
  postDate,
  vfPostContainerId,
  vfConversation,
  vfReview,
}) {
  return (
    <div className="my-5 sm:flex">
      <AuthorFollow
        authorId={authorId}
        authorName={authorName}
        authorPicture={authorPicture}
      />
      <div className="flex items-center sm:pl-4">
        <div className="mr-3 border-b-neutral-300 dark:border-neutral-600 sm:border-l sm:pl-3">
          <Date dateString={postDate} />
        </div>
        {vfConversation && (
          <div className="flex border-l border-b-neutral-300 pl-3 font-semibold text-gray-800 dark:border-neutral-600">
            <a
              className="mr-3 flex hover:underline"
              href="#vf-conversations-container"
              title="Join the Conversation"
            >
              <BiCommentDetail className="mr-1 mt-[3px] h-5 w-5" />{" "}
              <VfConversationsCount vfPostContainerId={vfPostContainerId} />
            </a>
          </div>
        )}
        {vfReview && (
          <div className="flex border-l border-b-neutral-300 pl-3 font-semibold text-gray-800 dark:border-neutral-600">
            <a
              className="mr-3 flex h-6 hover:underline"
              href="#vf-reviews-container"
              title="Leave your Review"
            >
              <div className="viafoura">
                <vf-rating vf-container-id={vfPostContainerId}></vf-rating>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

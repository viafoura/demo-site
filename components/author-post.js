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
}) {
  return (
    <div className="my-5 sm:flex">
      <AuthorFollow authorId={authorId} authorName={authorName} authorPicture={authorPicture} />
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
              <BiCommentDetail className="mt-[3px] mr-1 h-5 w-5" />{" "}
              <VfConversationsCount vfPostContainerId={vfPostContainerId} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

import { BiCommentDetail } from "react-icons/bi";

import VfConversationsCount from "@/components/vf-conversations-count";

export default function AvatarHome({
  authorName,
  postId,
  postSlug,
  vfConversationId,
}) {
  return (
    <div className="w-50">
      <div className="flex text-base font-semibold text-gray-800">
        {authorName}
        {vfConversationId && (
          <a
            className="flex mr-3 hover:underline"
            href={`/posts/${postSlug}#vf-conversations-container`}
            alt="Join the Conversation"
            title="Join the Conversation"
          >
            <BiCommentDetail className="w-5 h-5 mx-1 mt-[3px]" />{" "}
            <VfConversationsCount postId={postId} />
          </a>
        )}
      </div>
    </div>
  );
}

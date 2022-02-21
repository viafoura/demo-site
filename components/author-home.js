import { BiCommentDetail } from "react-icons/bi";

import VfConversationsCount from "@/components/viafoura/vf-conversations-count";

export default function AuthorHome({ authorName, postSlug, vfPostContainerId, vfConversationId }) {
  return (
    <div className="w-50">
      <div className="flex text-base font-semibold text-gray-800">
        {authorName}
        {vfConversationId && (
          <a
            className="mr-3 flex hover:underline"
            href={`/posts/${postSlug}#vf-conversations-container`}
            title="Join the Conversation"
          >
            <BiCommentDetail className="mx-1 mt-[3px] h-5 w-5" />{" "}
            <VfConversationsCount vfPostContainerId={vfPostContainerId} />
          </a>
        )}
      </div>
    </div>
  );
}

import { BiCommentDetail } from "react-icons/bi";

import AuthorFollow from "@/components/author-follow";
import Date from "@/components/date";

export default function AvatarPost({ name, picture, date, postId }) {
  return (
    <div className="mb-5 sm:flex">
      <AuthorFollow name={name} picture={picture} />
      <div className="flex items-center sm:pl-4">
        <div className="pr-3 mr-3 border-r border-gray-300 sm:border-l sm:pl-3">
          <Date dateString={date} />
        </div>
        <div className="flex font-semibold text-gray-800">
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
      </div>
    </div>
  );
}

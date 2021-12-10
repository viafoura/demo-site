import { BiCommentDetail } from "react-icons/bi";

export default function AvatarHome({ name, postId, slug }) {
  return (
    <div className="w-50">
      <div className="flex text-gray-800 text-base font-semibold">
        {name}
        <a
          className="flex mr-3 hover:underline"
          href={`/posts/${slug}#vf-conversations`}
          alt="Join the Conversation"
          title="Join the Conversation"
        >
          <BiCommentDetail className="w-5 h-5 mx-1 mt-[3px]" />{" "}
          <vf-conversations-count vf-container-id={postId} />
        </a>
      </div>
    </div>
  );
}

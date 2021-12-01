import { BiCommentDetail } from "react-icons/bi";

export default function AvatarHome({ name, postId }) {
  return (
    <div className="w-50 mb-11">
      <div className="flex text-gray-800 text-base font-semibold">
        {name} <BiCommentDetail className="w-5 h-5 mx-1 mt-[3px]" />{" "}
        <vf-conversations-count vf-container-id={postId} />
      </div>
    </div>
  );
}

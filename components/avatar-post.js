import Image from "next/image";
import { BiCommentDetail } from "react-icons/bi";

import Date from "@/components/date";

export default function AvatarPost({ name, picture, date, postId }) {
  return (
    <>
      <div className="sm:flex mb-5">
        <div className="flex items-center space-x-3">
          <div>
            <Image
              className="rounded-full"
              src={picture.url}
              alt={name}
              width={48}
              height={48}
              layout="fixed"
            />
          </div>
          <div className="font-semibold ml-[1px]">{name}</div>
          <div className="sm:pr-3 sm:border-r border-gray-300">
            <div className="viafoura">
              <vf-topic-follow
                topic-id={name}
                topic-name={name}
                topic-type="author"
                show-count="false"
                minimum-count="5"
              ></vf-topic-follow>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="border-r border-gray-300 sm:pl-3 pr-3 mr-3">
            <Date dateString={date} />
          </div>

          <div className="flex text-gray-800 font-semibold">
            <a
              className="flex mr-3 hover:underline"
              href="#vf-conversations"
              alt="Join the Conversation"
              title="Join the Conversation"
            >
              <BiCommentDetail className="w-5 h-5 mt-[3px] mr-1" />{" "}
              <vf-conversations-count vf-container-id={postId} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

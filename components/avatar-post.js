import Image from "next/image";
import { BiCommentDetail } from "react-icons/bi";

import Date from "@/components/date";

export default function AvatarPost({ name, picture, date, postId }) {
  return (
    <>
      <div className="grid grid-cols-7 w-96">
        <div className="col-span-1">
          <Image
            className="rounded-full"
            src={picture.url}
            alt={name}
            width={48}
            height={48}
            layout="fixed"
          />
        </div>
        <div className="col-span-6">
          <div className="flex text-gray-800">
            <div className="font-semibold">{name} |</div>
            <div className="text-base ml-1">
              <Date dateString={date} />
            </div>
          </div>
          <div className="flex text-gray-800">
            <a
              className="flex mr-3 hover:underline"
              href="#vf-conversations"
              alt="Join the Conversation"
              title="Join the Conversation"
            >
              <BiCommentDetail className="w-5 h-5 mt-[3px] mr-[3px]" />{" "}
              <vf-conversations-count vf-container-id={postId} />
            </a>
            <div className="mt-[3px] ml-1">
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
        </div>
      </div>

      <div className="mb-10">
        <div className="viafoura">
          <div
            className="vf-widget vf-share-bar-default"
            data-widget="sharebar"
            data-button-view="false"
            data-show-labels="false"
            data-show-counters="false"
            data-show-total="true"
            data-path="/"
          ></div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";

import Date from "@/components/date";

export default function AvatarPost({ name, picture, date, postId }) {
  return (
    <>
      <div className="grid grid-flow-col grid-rows-2 h-12 w-[480px] mb-2">
        <div className="row-span-2 col-span-1">
          <Image
            className="rounded-full"
            src={picture.url}
            alt={name}
            width={48}
            height={48}
            layout="fixed"
          />
        </div>
        <div className="col-span-3 text-gray-800 text-base font-semibold">
          {name} |{" "}
          <a href="#vf-conversations" className="hover:underline">
            <vf-conversations-count vf-container-id={postId} /> comments
          </a>
        </div>
        <div className="col-span-3 text-gray-800 text-base">
          <Date dateString={date} />
        </div>
        <div className="viafoura">
          <vf-topic-follow
            topic-id={name}
            topic-name={name}
            topic-type="author"
            show-count="true"
            minimum-count="0"
          ></vf-topic-follow>
        </div>
      </div>
      <div className="viafoura mb-11">
        <div
          className="vf-widget vf-share-bar-default"
          data-widget="sharebar"
          data-button-view="false"
          data-show-labels="false"
          data-show-counters="true"
          data-show-total="true"
          data-path="/"
        ></div>
      </div>
    </>
  );
}

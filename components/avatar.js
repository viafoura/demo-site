import Image from "next/image";

import Date from "@/components/date";

export default function Avatar({ name, picture, date, postId }) {
  return (
    <div className="grid grid-flow-col grid-rows-2 h-12 w-72 mb-11">
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
        {name} | <vf-conversations-count vf-container-id={postId} /> comments
      </div>
      <div className="col-span-3 text-gray-800 text-base">
        <Date dateString={date} />
      </div>
    </div>
  );
}

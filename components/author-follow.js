import Image from "next/image";

import VfTopicFollow from "@/components/viafoura/vf-topic-follow";

export default function AuthorFollow({ authorId, authorName, authorPicture }) {
  return (
    <div className="flex items-center space-x-3">
      <div>
        <Image
          className="rounded-full"
          src={authorPicture.url}
          alt={authorName}
          width={48}
          height={48}
        />
      </div>
      <div className="ml-[1px] font-semibold">{authorName}</div>
      <VfTopicFollow vfTopicContainerId={authorId} topicName={authorName} topicType="author" />
    </div>
  );
}

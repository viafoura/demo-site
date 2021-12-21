import Image from "next/image";

import TopicFollow from "@/components/topic-follow";

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
          layout="fixed"
        />
      </div>
      <div className="font-semibold ml-[1px]">{authorName}</div>
      <TopicFollow
        topicId={authorId}
        topicName={authorName}
        topicType="author"
      />
    </div>
  );
}

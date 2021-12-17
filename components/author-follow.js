import Image from "next/image";

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
      <div className="viafoura">
        <vf-topic-follow
          topic-id={authorId}
          topic-name={authorName}
          topic-type="author"
          show-count="false"
          minimum-count="5"
        ></vf-topic-follow>
      </div>
    </div>
  );
}

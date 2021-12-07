import Image from "next/image";

export default function AuthorFollow({ picture, name }) {
  return (
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
  );
}

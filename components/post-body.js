import { Image, StructuredText } from "react-datocms";

export default function PostBody({ content }) {
  return (
    <div className="prose prose-md prose-sky max-w-4xl">
      <StructuredText
        data={content}
        renderBlock={({ record }) => {
          if (record.__typename === "ImageBlockRecord") {
            return (
              // eslint-disable-next-line jsx-a11y/alt-text
              <Image
                data={{ ...record.image.responsiveImage, alt: "Content Image" }}
              />
            );
          }
          if (record.__typename === "ContentRecirculationRecord") {
            return (
              <div
                dangerouslySetInnerHTML={{
                  __html: record.contentRecirculation,
                }}
              />
            );
          }
          if (record.__typename === "LiveCommentRecord") {
            return (
              <div
                dangerouslySetInnerHTML={{
                  __html: record.liveComment,
                }}
              />
            );
          }
          if (record.__typename === "LiveChatRecord") {
            return (
              <div
                dangerouslySetInnerHTML={{
                  __html: record.liveChat,
                }}
              />
            );
          }
          if (record.__typename === "LiveStoryRecord") {
            return (
              <div
                dangerouslySetInnerHTML={{
                  __html: record.liveStory,
                }}
              />
            );
          }

          return (
            <>
              <p>Don&apos;t know how to render a block!</p>
              <pre>{JSON.stringify(record, null, 2)}</pre>
            </>
          );
        }}
      />
    </div>
  );
}

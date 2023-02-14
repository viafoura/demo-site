import { Image, StructuredText } from "react-datocms";

import AuthorFollow from "@/components/author-follow";
import PostTopicsFollow from "@/components/post-topics-follow";

export default function PostBody({ content, author, topics }) {
  return (
    <div className="prose prose-sky max-w-4xl">
      <StructuredText
        data={content}
        renderBlock={({ record }) => {
          if (record.__typename === "ImageBlockRecord") {
            return (
              // eslint-disable-next-line jsx-a11y/alt-text
              <Image data={record.image.responsiveImage} />
            );
          }
          if (record.__typename === "ContentRecirculationRecord") {
            return (
              <div
                id="vf-content-recirculation-container"
                className="not-prose"
                dangerouslySetInnerHTML={{
                  __html: record.contentRecirculation,
                }}
              />
            );
          }
          if (record.__typename === "ConversationRecord") {
            return (
              <>
                <div className="not-prose scroll-mt-20">
                  <AuthorFollow
                    authorId={author.id}
                    authorName={author.name}
                    authorPicture={author.picture}
                  />
                  <PostTopicsFollow topics={topics} />
                  <div
                    id="vf-conversations-container"
                    dangerouslySetInnerHTML={{
                      __html: record.conversation,
                    }}
                  />
                </div>
              </>
            );
          }
          if (record.__typename === "LiveChatRecord") {
            return (
              <div
                className="not-prose"
                dangerouslySetInnerHTML={{
                  __html: record.liveChat,
                }}
              />
            );
          }
          if (record.__typename === "LiveStoryRecord") {
            return (
              <div
                className="not-prose"
                dangerouslySetInnerHTML={{
                  __html: record.liveStory,
                }}
              />
            );
          }
          if (record.__typename === "ConversationStarterRecord") {
            return (
              <div
                id="vf-conversation-starter-container"
                className="not-prose"
                dangerouslySetInnerHTML={{
                  __html: record.conversationStarter,
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

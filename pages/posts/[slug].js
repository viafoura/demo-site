import Head from "next/head";
import { useRouter } from "next/router";
import { renderMetaTags } from "react-datocms";

import Container from "@/components/container";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import Sidebar from "@/components/sidebar";
import { fetchGraphQL } from "@/graphql/fetchGraphQL";
import { gqlPostBySlug } from "@/graphql/gqlPostBySlug";
import { addPostJsonLd } from "@/lib/viafoura/addPostJsonLd";
import { fetchCommentAuthorSchema } from "@/lib/viafoura/fetchCommentAuthorSchema";
import { fetchCommentsSchema } from "@/lib/viafoura/fetchCommentsSchema";

export async function getStaticPaths() {
  const data = await fetchGraphQL({ query: `{ allPosts { slug } }` });
  return {
    paths: data.allPosts.map((post) => `/posts/${post.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetchGraphQL({
    query: gqlPostBySlug,
    variables: { slug: params.slug },
  });
  const { contents } = await fetchCommentsSchema(data.post.vfPostContainerId);
  if (!contents)
    return {
      props: {
        data,
      },
    };
  const commentPromises = contents.map(async (comment) => {
    const actorId = await fetchCommentAuthorSchema(comment.actor_uuid);
    return {
      "@context": "http://schema.org/",
      "@type": "Comment",
      datePublished: new Date(comment.date_created).toISOString().split("T")[0],
      author: {
        "@context": "http://schema.org/",
        "@type": "Person",
        name: actorId.result.name,
      },
      text: comment.content,
      upvoteCount: comment.total_likes,
      downvoteCount: comment.total_dislikes,
    };
  });
  const comments = await Promise.all(commentPromises);
  return {
    props: {
      data,
      schemaCommentsCount: comments.length,
      schemaComments: JSON.stringify(comments),
    },
  };
}

export default function Post({ data, schemaCommentsCount, schemaComments }) {
  const { site, post } = data;
  const router = useRouter();
  const { adfree } = router.query;
  const vfConversation = post.content.blocks.find(
    (block) => block.__typename === "ConversationRecord",
  );

  return (
    <>
      <Head>
        {renderMetaTags([...post.seo, ...site.favicon])}
        {schemaCommentsCount && schemaComments ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={addPostJsonLd(
              post,
              schemaCommentsCount,
              schemaComments,
            )}
            key="post-jsonld"
          />
        ) : null}
        <meta name="vf:container_id" content={post.vfPostContainerId} />
        <meta property="vf:author" content="viafoura-id:6157500021214" />
        <meta property="vf:author" content="viafoura-id:8892700021086" />
        <meta property="vf:author" content="viafoura-id:1472900021555" />
        <meta property="vf:author" content="viafoura-id:9063500021199" />
        {adfree && <meta property="vf:ads-disabled" />}
      </Head>
      <Container>
        <div className="flex">
          <article className="relative min-w-0">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              topics={post.topic}
              vfPostContainerId={post.vfPostContainerId}
              vfConversation={vfConversation}
            />
            <PostBody
              content={post.content}
              author={post.author}
              topics={post.topic}
            />
          </article>
          <Sidebar
            showLiveChat={post.showLivechat}
            vfTopicContainerId={post.topic[0].vfTopicContainerId}
            topicName={post.topic[0].name}
          />
        </div>
      </Container>
    </>
  );
}

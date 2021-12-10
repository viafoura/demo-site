import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";

import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import { fetchGraphQL } from "@/graphql/fetchGraphQL";
import { postsByTopic } from "@/graphql/postsByTopic";

export async function getStaticPaths() {
  const { allTopics } = await fetchGraphQL({
    query: `{ allTopics { id slug } }`,
  });

  return {
    paths: allTopics.map((topic) => `/topics/${topic.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { topic } = await fetchGraphQL({
    query: `{ topic(filter: {slug: {eq: ${params.slug}}}) { id name } }`,
  });

  const graphqlRequest = {
    query: postsByTopic,
    preview,
    variables: {
      topicId: topic.id,
    },
  };

  return {
    props: {
      topic: topic.name,
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await fetchGraphQL(graphqlRequest),
            token: process.env.GRAPHQL_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await fetchGraphQL(graphqlRequest),
          },
    },
  };
}

export default function Topic({ subscription, topic }) {
  const {
    data: { allPosts, site, blog },
  } = useQuerySubscription(subscription);

  const metaTags = blog.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Container>
        {allPosts.length > 0 && (
          <MoreStories title={`Topic: ${topic}`} posts={allPosts} />
        )}
      </Container>
    </>
  );
}

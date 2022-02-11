import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";

import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import Sidebar from "@/components/sidebar";
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
    query: `{ topic(filter: {slug: {eq: ${params.slug}}}) {
        id
        name
        vfTopicContainerId
      }
    }`,
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
      vfTopicContainerId: topic.vfTopicContainerId,
      topicName: topic.name,
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

export default function Topic({ subscription, vfTopicContainerId, topicName }) {
  const {
    data: { allPosts, site, blog },
  } = useQuerySubscription(subscription);

  const metaTags = blog.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Container>
        <div className="flex">
          {allPosts.length > 0 && (
            <MoreStories
              title={`Topic: ${topicName}`}
              posts={allPosts}
              vfTopicContainerId={vfTopicContainerId}
              topicName={topicName}
            />
          )}
          <Sidebar
            showLiveChat={true}
            vfTopicContainerId={vfTopicContainerId}
            topicName={topicName}
          />
        </div>
      </Container>
    </>
  );
}

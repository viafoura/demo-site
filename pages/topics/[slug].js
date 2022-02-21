import Head from "next/head";
import { renderMetaTags } from "react-datocms";

import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import Sidebar from "@/components/sidebar";
import { fetchGraphQL } from "@/graphql/fetchGraphQL";
import { gqlPostsByTopic } from "@/graphql/gqlPostsByTopic";

export async function getStaticPaths() {
  const { allTopics } = await fetchGraphQL({ query: `{ allTopics { id slug } }` });
  return {
    paths: allTopics.map((topic) => `/topics/${topic.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { topic } = await fetchGraphQL({
    query: `{ topic(filter: {slug: {eq: ${params.slug}}}) { id name vfTopicContainerId }}`,
  });
  return {
    props: {
      vfTopicContainerId: topic.vfTopicContainerId,
      topicName: topic.name,
      data: await fetchGraphQL({ query: gqlPostsByTopic, variables: { topicId: topic.id } }),
    },
  };
}

export default function Topic({ vfTopicContainerId, topicName, data }) {
  const { allPosts, site, blog } = data;

  return (
    <>
      <Head>{renderMetaTags([...blog.seo, ...site.favicon])}</Head>
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

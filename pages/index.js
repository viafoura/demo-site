import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";

import Container from "@/components/container";
import HeroPost from "@/components/hero-post";
import MoreStories from "@/components/more-stories";
import { fetchGraphQL } from "@/graphql/fetchGraphQL";
import { homePosts } from "@/graphql/homePosts";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: homePosts,
    preview,
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await fetchGraphQL(graphqlRequest),
            token: process.env.GRAPHQL_API_TOKEN,
            environment: process.env.DATOCMS_ENVIRONMENT || null,
          }
        : {
            enabled: false,
            initialData: await fetchGraphQL(graphqlRequest),
          },
    },
  };
}

export default function Index({ subscription }) {
  const {
    data: { allPosts, site, blog },
  } = useQuerySubscription(subscription);

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const metaTags = blog.seo.concat(site.favicon);

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Container>
        {heroPost && (
          <HeroPost
            id={heroPost.id}
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            blocks={heroPost.content.blocks}
          />
        )}
        {morePosts.length > 0 && (
          <MoreStories title="More Stories" posts={morePosts} />
        )}
      </Container>
    </>
  );
}

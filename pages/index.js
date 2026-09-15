import Head from "next/head";
import { renderMetaTags } from "react-datocms";

import Container from "@/components/container";
import HomeHeroSplit from "@/components/home-hero-split";
import MoreStories from "@/components/more-stories";
import { fetchGraphQL } from "@/graphql/fetchGraphQL";
import { gqlHomePosts } from "@/graphql/gqlHomePosts";

export async function getStaticProps() {
  return {
    props: {
      data: await fetchGraphQL({ query: gqlHomePosts }),
    },
  };
}

export default function Index({ data }) {
  const { allPosts, site, blog } = data;
  const heroPost = allPosts[0];
  const sidePosts = allPosts.slice(1, 3);
  const morePosts = allPosts.slice(3);

  return (
    <>
      <Head>{renderMetaTags([...blog.seo, ...site.favicon])}</Head>
      <Container>
        {heroPost && (
          <HomeHeroSplit featuredPost={heroPost} sidePosts={sidePosts} />
        )}
        {morePosts.length > 0 && (
          <MoreStories
            title="More Stories"
            posts={morePosts}
            pollContainerId="homepage-poll"
          />
        )}
      </Container>
    </>
  );
}

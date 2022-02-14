import Head from "next/head";
import { renderMetaTags } from "react-datocms";

import Container from "@/components/container";
import HeroPost from "@/components/hero-post";
import MoreStories from "@/components/more-stories";
import { fetchGraphQL } from "@/graphql/fetchGraphQL";
import { homePosts } from "@/graphql/homePosts";

export async function getStaticProps() {
  return {
    props: {
      data: await fetchGraphQL({
        query: homePosts,
      }),
    },
  };
}

export default function Index({ data }) {
  const { allPosts, site, blog } = data;
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Head>{renderMetaTags([...blog.seo, ...site.favicon])}</Head>
      <Container>
        {heroPost && (
          <HeroPost
            vfPostContainerId={heroPost.vfPostContainerId}
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

import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";

import Container from "@/components/container";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import { fetchGraphQL } from "@/graphql/fetchGraphQL";
import { postBySlug } from "@/graphql/postBySlug";

export async function getStaticPaths() {
  const data = await fetchGraphQL({ query: `{ allPosts { slug } }` });

  return {
    paths: data.allPosts.map((post) => `/posts/${post.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: postBySlug,
    preview,
    variables: {
      slug: params.slug,
    },
  };

  return {
    props: {
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

export default function Post({ subscription }) {
  const {
    data: { site, post },
  } = useQuerySubscription(subscription);

  const metaTags = post.seo.concat(site.favicon);

  return (
    <>
      <Head>
        {renderMetaTags(metaTags)}
        <meta name="vf:container_id" content={post.id} />
      </Head>
      <Container>
        <article className="relative">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            postId={post.id}
            topics={post.topic}
          />
          <PostBody content={post.content} />
        </article>
      </Container>
    </>
  );
}

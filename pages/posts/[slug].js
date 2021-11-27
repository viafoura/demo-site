import Head from "next/head";
const Zephr = require('@zephr/sdk').build('viafoura-viafoura.cdn.zephr.com');
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

  // let input = {
  //   "anything": "...",
  //   "sdkFeatureSlug": "sdk-rule",
  //   "session": "9ba3a157-11111-4cc1-a624-bf37c493725d",
  //   "ip": "192.56.134.20",
  //   "path": "/article/123",
  //   "contentId": "cc06be74-88de-460f-9b46-535165c7d526"
  // };

  // Zephr.decision(input).then(zephr => {
  //   switch(zephr.outputValue) {
  //     case "allow":
  //       console.log('Allowed');
  //       break;
  //     case "deny":
  //       console.log('Deny');
  //       break;
  //     case "test-a":
  //       console.log('Test Case');
  //       break;
  //     default:
  //       //handle the unexpected
  //   }
  // });

  return (
    <>
      <Head>
        {renderMetaTags(metaTags)}
        <meta name="vf:container_id" content={post.id} />
      </Head>
      <Container>
        <article>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            postId={post.id}
          />
          <PostBody content={post.content} />
        </article>
      </Container>
    </>
  );
}

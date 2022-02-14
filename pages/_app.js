import "@/styles/globals.css";

import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

import Layout from "@/components/layout";
import { fetchGraphQL } from "@/graphql/fetchGraphQL";
import { menuAndTopics } from "@/graphql/menuAndTopics";

MyApp.getInitialProps = async () => {
  return {
    initialProps: await fetchGraphQL({
      query: menuAndTopics,
    }),
  };
};

function MyApp({ Component, pageProps, initialProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta
          property="og:url"
          content={`https://${process.env.vfDomain}${router.asPath}`}
        />
      </Head>
      <Script src="/scripts/darkMode.js" strategy="beforeInteractive" />
      <Layout initialProps={initialProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

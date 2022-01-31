import "@/styles/globals.css";

import Script from "next/script";

import Layout from "@/components/layout";
import { fetchGraphQL } from "@/graphql/fetchGraphQL";
import { menuAndTopics } from "@/graphql/menuAndTopics";

MyApp.getInitialProps = async () => {
  const initialProps = await fetchGraphQL({
    query: menuAndTopics,
  });
  return { initialProps };
};

function MyApp({ Component, pageProps, initialProps }) {
  return (
    <>
      <Script src="/scripts/darkMode.js" strategy="beforeInteractive" />
      <Layout initialProps={initialProps} preview={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

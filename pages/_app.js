import "@/styles/globals.css";

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
    <Layout initialProps={initialProps} preview={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

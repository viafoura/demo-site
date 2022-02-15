import "@/styles/globals.css";

import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

import Layout from "@/components/layout";

function MyApp({ Component, pageProps }) {
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

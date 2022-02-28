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
        <meta property="og:url" content={`https://${process.env.vfDomain}${router.asPath}`} />
        <meta name="vf:domain" content={process.env.vfDomain} />
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Script src="/scripts/darkMode.js" strategy="beforeInteractive" />
      <Script src="https://cdn.viafoura.net/vf-v2.js" strategy="lazyOnload" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

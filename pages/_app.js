import "@/styles/globals.css";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

import Layout from "@/components/layout";
import { settings } from "@/lib/viafoura/settings";

function MyApp({ Component, pageProps }) {
  const { asPath, query } = useRouter();
  return (
    <>
      <Head>
        <meta property="og:url" content={`https://${process.env.vfDomain}${asPath}`} />
        <meta name="vf:domain" content={process.env.vfDomain} />
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Script src="//cdn.viafoura.net/entry/index.js" onReady={settings} />
      <Layout>
        {query.oidc ? (
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </>
  );
}

export default MyApp;

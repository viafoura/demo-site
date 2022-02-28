import "@/styles/globals.css";

import { UserProvider } from "@auth0/nextjs-auth0";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

import Layout from "@/components/layout";
import vfCustomCookieLogin from "@/lib/viafoura/vfCustomCookieLogin";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <Head>
        <meta property="og:url" content={`https://${process.env.vfDomain}${path}`} />
        <meta name="vf:domain" content={process.env.vfDomain} />
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Script src="/scripts/darkMode.js" strategy="beforeInteractive" />
      <Script
        src="https://cdn.viafoura.net/vf-v2.js"
        strategy="lazyOnload"
        onLoad={() => {
          vfCustomCookieLogin(path);
        }}
      />
      <Layout>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </Layout>
    </>
  );
}

export default MyApp;

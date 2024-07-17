import "@/styles/globals.css";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

import Layout from "@/components/layout";
import { settings } from "@/lib/viafoura/settings";

export default function MyApp({ Component, pageProps }) {
  const { asPath, query } = useRouter();
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content={`https://${process.env.vfDomain}${asPath}`}
        />
        <meta name="vf:domain" content={process.env.vfDomain} />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <Script src="//cdn.viafoura.net/entry/index.js" onReady={settings} />
      <Script
        src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
        strategy="afterInteractive"
        onReady={() => {
          window.OneSignalDeferred = window.OneSignalDeferred || [];
          OneSignalDeferred.push(async function (OneSignal) {
            await OneSignal.init({
              appId: "8add46ba-1535-4c77-8c97-4faccd2cd7e5",
            });
          });
          window.vfQ = window.vfQ || [];
          window.vfQ.push(async () => {
            const { user_privilege } = await window.vf.context.get("user");
            if (user_privilege !== "guest") {
              await OneSignal.login(toString(user.id));
            } else {
              await OneSignal.logout();
            }
          });
        }}
      />
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

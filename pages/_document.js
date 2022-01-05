import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <meta name="vf:domain" content="demo.viafoura.com" />
          <link
            rel="shortcut icon"
            href="/images/favicon.ico"
            type="image/x-icon"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            async
            src="//cdn.viafoura.net/vf-v2.js"
          ></script>
        </body>
      </Html>
    );
  }
}

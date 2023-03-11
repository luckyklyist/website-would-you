import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Would you is a fun little bot for every server! Provide your server with fun little would you questions!"
        />
        <meta property="og:title" content="Would You | Discord Bot" />
        <meta
          property="og:description"
          content="Would you is a fun little bot for every server! Provide your server with fun little would you questions!"
        />
        <meta property="og:image" content="/Logo.png" />
        <meta name="theme-color" content="#0598F6" />
        <meta name="msapplication-TileColor" content="#0598F6" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

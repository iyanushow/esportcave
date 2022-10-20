import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />

          <link rel="manifest" href="/site.webmanifest" />

          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#5bbad5"
          />

          <meta name="theme-color" content="#ffffff"></meta>
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="description" content="Esportcave Gaming App" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Esportcave Gaming" />
          <meta property="og:url" content="https://esportcave.com/" />
          <meta property="og:description" content="Esportcave Gaming App" />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:title" content="Esportcave Gaming" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="https://esportcave.com/" />
          <meta property="twitter:url" content="https://esportcave.com/" />
          <meta name="twitter:description" content="Esportcave Gaming App" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

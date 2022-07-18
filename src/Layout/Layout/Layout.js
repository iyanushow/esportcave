import React, { useEffect, useState } from "react";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import styles from "./layout.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

const Layout = ({ children }) => {
  const router = useRouter();

  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const path = router.asPath;

    const [first, ...title] = path.split("/");

    setPageTitle(title.join("-"));
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>Esportcave {pageTitle ? `| ${pageTitle}` : undefined}</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />

        <link rel="manifest" href="/site.webmanifest" />

        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />

        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="description" content="Esportcave Gaming App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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

      <Navbar />
      <main className={styles.layout}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

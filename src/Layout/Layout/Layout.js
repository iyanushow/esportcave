import React, { useEffect, useState } from "react";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import styles from "./layout.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

const Layout = ({ children, header, footer }) => {
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
        <title>eSportcave - Play, Earn, Socialize</title>
      </Head>

      {header && <Navbar />}
      <main className={styles.layout}>{children}</main>
      {footer && <Footer />}
    </>
  );
};

export default Layout;

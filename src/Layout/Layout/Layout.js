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
  console.log(pageTitle);
  return (
    <>
      <Head>
        <title>eSportcave {pageTitle ? `| ${pageTitle}` : ""}</title>
      </Head>

      <Navbar />
      <main className={styles.layout}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

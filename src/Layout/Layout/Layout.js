import React from "react";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import styles from "./layout.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

const Layout = ({ children }) => {
  const router = useRouter();

  router.asPath;

  return (
    <>
      <Head>
        <title>EsportsCave | </title>
        <meta name="description" content="Esportscave Gaming App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.layout}>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

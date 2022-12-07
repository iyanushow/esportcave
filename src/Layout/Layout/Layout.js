import React from "react";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import styles from "./layout.module.css";
import Head from "next/head";

const Layout = ({ children, header, footer }) => {
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

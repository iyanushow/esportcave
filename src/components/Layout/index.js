import React from "react";

//components
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

//styles
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.layout}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

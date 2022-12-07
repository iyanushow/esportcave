import React from "react";
import styles from "./contact.module.css";
import MobileContact from "./components/MobileContact";

const Contact = () => {
  return (
    <section className={styles.section} id="get-app">
      <div className={styles.container}>
        <MobileContact />
      </div>
    </section>
  );
};

export default Contact;

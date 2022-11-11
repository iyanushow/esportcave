import dynamic from "next/dynamic";
import React from "react";
import styles from "./contact.module.css";

const MobileContact = dynamic(() => import("./components/MobileContact"));

const Contact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <MobileContact />
      </div>
    </section>
  );
};

export default Contact;

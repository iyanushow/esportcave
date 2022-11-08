import dynamic from "next/dynamic";
import React from "react";
import useResize from "../../utils/useResize";
import styles from "./contact.module.css";

// const DesktopContact = dynamic(() => import("./components/DesktopContact"));
const MobileContact = dynamic(() => import("./components/MobileContact"));

const Contact = () => {
  const size = useResize();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <MobileContact />
      </div>
    </section>
  );
};

export default Contact;

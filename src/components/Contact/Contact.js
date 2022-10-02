import dynamic from "next/dynamic";
import React from "react";
import useResize from "../../utils/useResize";
import styles from "./contact.module.css";

const DesktopContact = dynamic(() => import("./components/DesktopContact"));
const MobileContact = dynamic(() => import("./components/MobileContact"));

const Contact = () => {
  const size = useResize();

  const isMobile = size < 450;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {isMobile && <MobileContact />}
        {!isMobile && <DesktopContact />}
      </div>
    </section>
  );
};

export default Contact;

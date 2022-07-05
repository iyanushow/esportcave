import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <figure className={styles.image}>
          <img src="phones.png" alt="phones" />
        </figure>

        <div className={styles.content}>
          <h3>Get App Link Through SMS.</h3>

          <form className={styles.form}>
            <label>Enter Your Mobile Number</label>
            <input />
            <button className={styles.playBtn}>Send App Link</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

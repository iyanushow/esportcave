import React from "react";
import { useState } from "react";
import styles from "./contact.module.css";

const Contact = () => {
  const [number, setNumber] = useState("+234");

  const submitForm = e => {
    e.stopPropagation();
    console.log(number);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>Get App Link Through SMS.</h3>

          <form className={styles.form} onSubmit={submitForm}>
            <label>Enter Your Mobile Number</label>
            <div className={styles.inputBox}>
              <input placeholder="+234" value={number} onChange={e => setNumber(e.target.value)} />
              <button type="submit" className={styles.playBtn}>
                Send App Link
              </button>
            </div>
          </form>
        </div>

        <div className={styles.imageBox}>
          <div className={styles.imgContainer}>
            <figure className={styles.image}>
              <img src="qr-code.png" alt="phones" />
            </figure>
          </div>
          <p>OR Scan QR Code</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

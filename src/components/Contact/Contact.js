import Image from "next/image";
import React from "react";
import { useState } from "react";
import styles from "./contact.module.css";

const Contact = () => {
  const [number, setNumber] = useState("");

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
            <div className={styles.inputBox}>
              <input
                placeholder="Enter Your Mobile Number"
                value={number}
                onChange={e => setNumber(e.target.value)}
              />
              <button type="submit" className={styles.playBtn}>
                Send App Link
              </button>
            </div>
          </form>
        </div>

        <div className={styles.imageBox}>
          <div className={styles.imgContainer}>
            <figure className={styles.image}>
              <Image src="/images/qr-code.png" alt="phones" width={133} height={126} />
            </figure>
          </div>
          <p>OR Scan QR Code</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

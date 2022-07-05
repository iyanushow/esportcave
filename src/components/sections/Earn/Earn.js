import React from "react";
import styles from "./earn.module.css";

const Earn = () => {
  return (
    <section className={styles.earnSection}>
      <div className={styles.earnContainer}>
        <figure className={styles.earnImage}>
          <img src="phones.png" alt="phones" />
        </figure>

        <div className={styles.earnContent}>
          <h3>Earn money playing games you love...</h3>

          <button className={styles.playBtn}>Play Game</button>
        </div>
      </div>
    </section>
  );
};

export default Earn;

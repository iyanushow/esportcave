import Image from "next/image";
import React from "react";
import styles from "./earn.module.css";

const Earn = () => {
  return (
    <section className={styles.earnSection}>
      <div className={styles.earnContainer}>
        <figure className={styles.earnImage}>
          <Image src="/phones.png" alt="phones" width={405} height={520} />
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

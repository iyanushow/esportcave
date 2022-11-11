import Image from "next/image";
import React from "react";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.heroContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.mainContent}>
            <h1>WELCOME TO ESPORTCAVE</h1>

            <h2>How About a Game of WHOT?</h2>

            <p>
              A skill-based social gaming app of engaging & thrilling battles
              including 1 on 1 and Tournament adventures, with players from
              around the world in real-time. Stand a chance to win real cash
              prizes playing games you love.
            </p>
          </div>
        </div>

        <figure className={styles.mainImage}>
          <Image
            src="/images/cards.png"
            alt="whot-cards"
            width={684.8}
            height={717.68}
            priority
          />
        </figure>
      </div>
    </div>
  );
};

export default Hero;

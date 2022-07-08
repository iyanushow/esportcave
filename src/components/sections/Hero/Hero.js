import React from "react";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.mainContent}>
            <h1>WELCOME TO ESPORTCAVE</h1>

            <h2>How About a Game of Whot?</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing . Morbi vestibulum mi felis. Cras
              ac erat arcu.Vivamus sagittis augue ut bibendum mollis.Vivamus sagittis augue ut
              bibendum mollis.
            </p>
            <div className={styles.stores}>
              <a className="" href="/">
                <img src="/AppStore-Image.jpeg" alt="app-store" />
              </a>
              <a className="" href="/">
                <img src="/G-play-image.jpeg" alt="google-play-store" />
              </a>
            </div>
          </div>
        </div>

        <figure className={styles.mainImage}>
          <img src="cards.png" alt="whot-cards" />
        </figure>
      </div>
    </div>
  );
};

export default Hero;

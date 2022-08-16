import Image from "next/image";
import Link from "next/link";
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
              A skill-based social gaming app of engaging & thrilling battles including 1 on 1 and
              Tournament adventures, with players from around the world in real-time. Stand a chance
              to win real cash prizes playing games you love.
            </p>
            <div className={styles.stores}>
              <Link className="" href="/">
                <a target="_blank">
                  <figure className={styles.storesImg}>
                    <Image
                      src="/images/AppStore-Image.jpeg"
                      alt="app-store"
                      width={174}
                      height={50}
                    />
                  </figure>
                </a>
              </Link>
              <Link className="" href="/">
                <a target="_blank">
                  <figure className={styles.storesImg}>
                    <Image
                      src="/images/G-play-image.jpeg"
                      alt="google-play-store"
                      width={174}
                      height={50}
                    />
                  </figure>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <figure className={styles.mainImage}>
          <Image src="/images/cards.png" alt="whot-cards" width={684.8} height={717.68} />
        </figure>
      </div>
    </div>
  );
};

export default Hero;

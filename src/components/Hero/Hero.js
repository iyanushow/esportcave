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

            <h2>How About a Game of Whot?</h2>

            <p>
              A social game of engaging & thrilling battles including 1 on 1 and Tournament
              adventures, with players from around the world in real-time. (I think this next part
              can be left out since it’s repeated somewhere below) Stand a chance to win real cash
              prizes playing games you love!
            </p>
            <div className={styles.stores}>
              <Link className="" href="/">
                <figure className={styles.storesImg}>
                  <Image src="/AppStore-Image.jpeg" alt="app-store" width={174} height={50} />
                </figure>
              </Link>
              <Link className="" href="/">
                <figure className={styles.storesImg}>
                  <Image src="/G-play-image.jpeg" alt="google-play-store" width={174} height={50} />
                </figure>
              </Link>
            </div>
          </div>
        </div>

        <figure className={styles.mainImage}>
          <Image src="/cards.png" alt="whot-cards" layout="fill" width={684.8} height={717.68} />
        </figure>
      </div>
    </div>
  );
};

export default Hero;

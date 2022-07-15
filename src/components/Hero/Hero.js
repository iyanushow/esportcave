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
              Lorem ipsum dolor sit amet, consectetur adipiscing . Morbi vestibulum mi felis. Cras
              ac erat arcu.Vivamus sagittis augue ut bibendum mollis.Vivamus sagittis augue ut
              bibendum mollis.
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

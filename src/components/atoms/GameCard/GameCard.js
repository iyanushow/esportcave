import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./gamecard.module.css";

const GameCard = ({ src, title, href, live }) => {
  return (
    <div
      className={`${styles.gameCard} ${live ? styles.live : styles.notLive}`}>
      {!live && (
        <div
          className={`${live ? styles.overlay_live : styles.overlay_notLive}`}>
          <h2>Coming Soon</h2>
        </div>
      )}
      <figure className={styles.cardImage}>
        <Image src={src} alt={title} width={485} height={356} />
      </figure>
      <div className={styles.cardTitle}>
        <h1>{title}</h1>
        <Link href="/how-to-play">How to play?</Link>
      </div>
      <a
        href="https://app.esportcave.com/live/eSportcave.apk"
        className={styles.cardBtn}>
        Play Game
      </a>
    </div>
  );
};

export default GameCard;

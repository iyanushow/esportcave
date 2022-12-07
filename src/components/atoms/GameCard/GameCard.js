import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./gamecard.module.css";

const GameCard = ({ src, title, live }) => {
  function scrollToGames() {
    const element = document.getElementById(`get-app`);
    if (element instanceof HTMLElement) {
      const elementPosition = element.offsetTop - 120;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  }
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
      <button className={styles.cardBtn} onClick={scrollToGames}>
        Play Game
      </button>
    </div>
  );
};

export default GameCard;

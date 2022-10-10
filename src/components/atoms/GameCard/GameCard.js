import Image from "next/image";
import React from "react";
import styles from "./gamecard.module.css";

const GameCard = ({ src, title, href, live }) => {
  const customStyle = live ? {} : { backgroundImage: `url(${src})` };

  return (
    <div
      className={`${styles.gameCard} ${live ? styles.live : styles.notLive}`}
      style={customStyle}>
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
        <a>How to play?</a>
      </div>
      <button className={styles.cardBtn}>Play Game</button>
    </div>
  );
};

export default GameCard;

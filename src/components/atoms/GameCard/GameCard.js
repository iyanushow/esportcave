import React from "react";
import styles from "./gamecard.module.css";

const GameCard = ({ src, title, href, live }) => {
  const customStyle = live ? {} : { backgroundImage: `url(${src})` };

  return (
    <div
      className={`${styles.gameCard} ${live ? styles.live : styles.notLive}`}
      style={customStyle}
    >
      <div className={`${live ? styles.overlay_live : styles.overlay_notLive}`}>
        <h2>Coming Soon</h2>
      </div>
      <figure className={styles.cardImage}>
        <img src={src} alt={title} />
      </figure>
      <h1 className={styles.cardTitle}>{title}</h1>
      <button className={styles.cardBtn}>Play Game</button>
    </div>
  );
};

export default GameCard;

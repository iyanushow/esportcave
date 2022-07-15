import React from "react";
import GameCard from "../atoms/GameCard/GameCard";

import styles from "./games.module.css";

const Games = ({ games }) => {
  return (
    <section className={styles.gamesSection}>
      <div className={styles.heading}>
        <h2>Our Games</h2>
        <p>Join the Salam Gamer League Tournaments and win amazing prizes</p>
      </div>

      <div className={styles.gameContainer}>
        {games.map(game => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </section>
  );
};

export default Games;

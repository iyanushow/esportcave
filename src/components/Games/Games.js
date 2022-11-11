import React from "react";
import GameCard from "../atoms/GameCard/GameCard";
import { games } from "../../utils/data";

import styles from "./games.module.css";

const Games = () => {
  return (
    <section className={styles.gamesSection}>
      <div className={styles.heading}>
        <h2>Our Games</h2>
        <p>Play your favorite games for a chance to win real cash</p>
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

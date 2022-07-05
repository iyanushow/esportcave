import React from "react";
import GameCard from "../../atoms/GameCard/GameCard";

import styles from "./games.module.css";

const games = [
  {
    id: 1,
    title: "Whot Cave Game",
    href: "/",
    live: true,
    src: "/games/game-whot.png",
  },
  {
    id: 2,
    live: false,
    src: "/games/nascar.png",
  },
  {
    id: 3,
    live: false,
    src: "/games/cycles.png",
  },
  {
    id: 4,
    live: false,
    src: "/games/checkers.png",
  },
  {
    id: 5,
    live: false,
    src: "/games/chess.png",
  },
  {
    id: 6,
    live: false,
    src: "/games/pool.png",
  },
];

const Games = () => {
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

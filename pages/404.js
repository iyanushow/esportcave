import React from "react";
import styles from "../styles/pagestyles/404.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <span>🚧</span>
      <h1>Temporarily Unavailable ... We&apos;ll be back soon </h1>
      <span>🚧</span>
    </div>
  );
};

export default ErrorPage;

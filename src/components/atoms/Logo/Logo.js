import React from "react";
import { ReactComponent as Elogo } from "../../../images/ELogo.svg";

//styles
import styles from "./logo.module.css";

const Logo = ({ className }) => {
  return (
    <a href="/" className={`${styles.logo} ${className}`}>
      <Elogo className={styles.logoImage} />
      <p className={styles.logoText}>Play..Earn..Socialize</p>
    </a>
  );
};

export default Logo;

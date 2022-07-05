import React from "react";
import { ReactComponent as Elogo } from "../../../images/ELogo.svg";

//styles
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Elogo className={styles.logoImage} />
      <p className={styles.logoText}>Play..Earn..Socialize</p>
    </div>
  );
};

export default Logo;

import Image from "next/image";
import Link from "next/link";
import React from "react";

//styles
import styles from "./logo.module.css";

const Logo = ({ className, showLogoText = false }) => {
  return (
    <Link href="/">
      <a className={`${styles.logo} ${className}`}>
        <figure className={styles.logoImage}>
          <Image
            alt="logo"
            src="/images/ELogo.svg"
            className={styles.logoImage}
            width={95}
            height={87}
          />
        </figure>
        {showLogoText && <p className={styles.logoText}>Play..Earn..Socialize</p>}
      </a>
    </Link>
  );
};

export default Logo;

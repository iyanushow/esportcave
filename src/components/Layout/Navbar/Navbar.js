import React, { useState } from "react";

import Logo from "../../atoms/Logo/Logo";
import Hamburger from "../../atoms/Hamburger/Hamburger";

//styles
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.nav}>
        <Logo />

        <ul className={styles.navList}>
          <li className={styles.navLink}>Home</li>
          <li className={styles.navLink}>About Us</li>
          <li className={`${styles.navLink} ${styles.active}`}>Contact</li>
        </ul>

        <Hamburger isOpen={isOpen} openNav={() => setIsOpen(prev => !prev)} />
      </div>
    </nav>
  );
};

export default Navbar;

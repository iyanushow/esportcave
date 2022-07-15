import React, { useEffect, useState, useRef } from "react";

import Logo from "../../components/atoms/Logo/Logo";
import Hamburger from "../../components/atoms/Hamburger/Hamburger";

//styles
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stickToTop, setStickToTop] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = e => {
      if (window.scrollY >= navRef.current.clientHeight) {
        setStickToTop(true);
      } else {
        setStickToTop(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.container} ${stickToTop ? styles.sticky : undefined}`} ref={navRef}>
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

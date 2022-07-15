import React, { useEffect, useState, useRef } from "react";

import Logo from "../../components/atoms/Logo/Logo";
import Hamburger from "../../components/atoms/Hamburger/Hamburger";

//styles
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const callback = () => {};

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }
    const current = navRef?.current;
    const observer = new IntersectionObserver(callback, {});
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <nav className={styles.container} ref={navRef}>
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

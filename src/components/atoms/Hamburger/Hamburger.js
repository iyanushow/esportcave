import React from "react";
import styles from "./hamburger.module.css";

const Hamburger = ({ isOpen, openNav }) => {
  return (
    <div
      href="#"
      class={`${styles.hamburger} ${isOpen ? styles.isOpen : undefined}`}
      onClick={openNav}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;

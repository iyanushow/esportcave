import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../../atoms/Logo/Logo";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <Logo className={styles.logo} />

        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <h2>About ESPORTSAVE</h2>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Groups</li>
              <li>Game For Good</li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h2>Business & Organizer Services</h2>
            <ul>
              <li>Corporate ESPORT Tournement</li>
              <li>Advertising Inquiries</li>
              <li>Blog</li>
              <li>Corporate ESPORT Tournement</li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h2>Legal</h2>
            <ul>
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className={styles.legal}>
          <h3>Powered By</h3>
          <p>Copyright © 2022 ESPORTCAVE. All Rights Reserved.</p>
          <div className={styles.socials}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Logo from "../../components/atoms/Logo/Logo";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <Logo className={styles.logo} showLogoText={true} />

        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <h2>About ESPORTCAVE</h2>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Game For Good</li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h2>Business & Organizer Services</h2>
            <ul>
              <li>Advertising Inquiries</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h2>Legal</h2>
            <ul>
              <li>
                <Link href="/terms-of-use">
                  <a target="_blank">Terms of Services</a>
                </Link>
              </li>
              <li>
                <Link href="privacy-policy">
                  <a target="_blank">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="promotions">
                  <a target="_blank">Promotions</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.legal}>
          <h3>Powered By</h3>
          <p>Copyright © 2022 ESPORTCAVE. All Rights Reserved.</p>
          <div className={styles.socials}>
            <Link href="https://www.facebook.com/esportcaveNG" passHref>
              <a target="_blank">
                <FontAwesomeIcon icon={faFacebook} name="Facebook" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/esportcave/" passHref>
              <a target="_blank">
                <FontAwesomeIcon icon={faInstagram} name="Instagram" />
              </a>
            </Link>
            <Link href="https://twitter.com/esportcave" passHref>
              <a target="_blank">
                <FontAwesomeIcon icon={faTwitter} name="Twitter" />
              </a>
            </Link>
            <Link href="https://www.tiktok.com/@esportcave" passHref>
              <a target="_blank">
                <FontAwesomeIcon icon={faTiktok} name="Tiktok" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

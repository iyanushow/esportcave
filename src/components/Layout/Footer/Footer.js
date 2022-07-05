import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="footer_logo">
        <p></p>
      </div>
      <div>
        <div className="footerlinks">
          <h2 className="footerlink_about__heading">About ESPORTSAVE</h2>
          <ul className="footerlink_about">
            <li className="footerlink_about__link">About Us</li>
            <li className="footerlink_about__link">Contact Us</li>
            <li className="footerlink_about__link">Groups</li>
            <li className="footerlink_about__link">Game For Good</li>
          </ul>
        </div>

        <div className="footerlinks">
          <h2 className="footerlink_about__heading">Business & Organizer Services</h2>
          <ul className="footerlink_about">
            <li className="footerlink_about__link">Corporate ESPORT Tournement</li>
            <li className="footerlink_about__link">Advertising Inquiries</li>
            <li className="footerlink_about__link">Blog</li>
            <li className="footerlink_about__link">Corporate ESPORT Tournement</li>
          </ul>
        </div>

        <div className="footerlinks">
          <h2 className="footerlink_about__heading">Legal</h2>
          <ul className="footerlink_about">
            <li className="footerlink_about__link">Terms of Services</li>
            <li className="footerlink_about__link">Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer_legal">
        <h3 className="footer_legal__heading">Powered By</h3>
        <p className="footer_legal__text">Copyright © 2022 ESPORTCAVE. All Rights Reserved.</p>
        <div className="socials"></div>
      </div>
    </div>
  );
};

export default Footer;

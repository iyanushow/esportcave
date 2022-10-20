import styles from "../contact.module.css";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const MobileContact = () => {
  return (
    <div className={styles.mobile}>
      <h3>Download Now</h3>

      <div className={styles.mobileContainer}>
        <a href="https://app.esportcave.com/live/eSportcave.apk">
          <button className={styles.mobileBtn}>
            <FontAwesomeIcon
              icon={faGooglePlay}
              width={24}
              height={24}
              color="black"
            />
            <div className={styles.mobilePlay}>
              <span>GET IT ON</span>
              <span>Google Play</span>
            </div>
          </button>
        </a>
        <Link href="#">
          <button className={styles.mobileBtn}>
            <FontAwesomeIcon
              icon={faApple}
              width={24}
              height={24}
              color="black"
            />
            <div className={styles.mobileApple}>Coming Soon</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MobileContact;

import styles from "../contact.module.css";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const MobileContact = () => {
  return (
    <div className={styles.mobile}>
      <h3>Download Now</h3>

      <div className={styles.mobileContainer}>
        <Link href="https://app.esportcave.com/live/eSportcave.apk">
          <a className={styles.mobileBtn}>
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
          </a>
        </Link>
        <Link href="https://apps.apple.com/app/whot-card-game-esportcave/id6444103007">
          <a className={styles.mobileBtn}>
            <FontAwesomeIcon
              icon={faApple}
              width={24}
              height={24}
              color="black"
            />
            <div className={styles.mobilePlay}>
              <span>Download on the</span>
              <span>App Store</span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MobileContact;

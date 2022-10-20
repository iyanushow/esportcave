import Image from "next/image";
import { useState } from "react";
import styles from "../contact.module.css";

const DesktopContact = () => {
  const [contactDetails, setContact] = useState({ code: "+234", number: "" });

  const submitForm = e => {
    e.preventDefault();
    console.log(contactDetails);
  };

  return (
    <>
      <div className={styles.content}>
        <h3>Request App Link.</h3>

        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.inputBox}>
            <select
              value={contactDetails.code}
              onChange={e =>
                setContact({ ...contactDetails, code: e.target.value })
              }
              className={styles.select}>
              <option value={+234}>+234</option>
              <option value={+233}>+233</option>
            </select>
            <input
              type="tel"
              placeholder="Enter Your Mobile Number"
              value={contactDetails.number}
              onChange={e =>
                setContact({ ...contactDetails, number: e.target.value })
              }
            />
            <button type="submit" className={styles.playBtn}>
              Send App Link
            </button>
          </div>
        </form>
      </div>

      <div className={styles.imageBox}>
        <div className={styles.imgContainer}>
          {/* <figure className={styles.image}>
            <Image
              src="/images/qr-code.png"
              alt="phones"
              width={133}
              height={126}
            />
          </figure> */}
        </div>
        {/* <p>OR Scan QR Code</p> */}
      </div>
    </>
  );
};

export default DesktopContact;

import * as styles from "./Footer.module.css";
import footerLogo from "../../assets/footer.png";
import appleLogo from "../../assets/apple.jpg";
import gpayLogo from "../../assets/gpay.png";
import mastercardLogo from "../../assets/mastercard.jpg";
import paytmLogo from "../../assets/paytm.jpg";
import phonepeLogo from "../../assets/phonepe.png";
import playstoreLogo from "../../assets/googleplaystore.png";
import rupayLogo from "../../assets/rupay.png";
import visaLogo from "../../assets/visa.png";

import {
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaSnapchat,
  FaTruck,
  FaDollarSign,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerGroup}>
          <h3>About Bewakoof</h3>

          <ul className={styles.footerLinks}>
            <li>Who are we?</li>
            <li>We're hiring</li>
            <li>Terms and Conditions</li>

            <li>Privacy Policy</li>

            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.footerGroup}>
          <h3>Customer Service</h3>

          <ul className={styles.footerLinks}>
            <li>Contact Us</li>
            <li>Track order</li>
            <li>Return order</li>
            <li>Cancel order</li>
          </ul>
        </div>

        <div className={styles.footerGroup}>
          <h3>Quick Links</h3>

          <ul className={styles.footerLinks}>
            <li>Offers</li>
            <li>Sitemap</li>
            <li>Brand stores</li>
            <li>Fanbook</li>
          </ul>
        </div>

        <div className={`${styles.footerGroup} ${styles.footerForm}`}>
          <h3>Get updates on your inbox</h3>
          <div className={styles.footerInputContainer}>
            <input type="text" placeholder="Enter your email address" />
            <button className={styles.inputButton}>Subscribe</button>
          </div>
          <ul className={styles.footerLinks}>
            <li className={styles.iconLink}>
              <FaTruck />
              15 Days Return Policy*
            </li>
            <li className={styles.iconLink}>
              <FaDollarSign />
              Cash On Delivery*
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className={styles.footerBottom}>
        <div className={styles.footerGroup}>
          <img src={footerLogo} className={styles.footerLogo} />
          <ul className={styles.footerLinks}>
            <li>Shipping Policy | Cancellation Policy</li>
            <li>
              &copy; {new Date().getFullYear()} Bewakoof Private Limited. All
              Rights Reserved.
            </li>
            <li className={styles.icons}>
              <FaInstagram />
              <FaSnapchat />
              <FaTwitter />
              <FaPinterest />
            </li>
          </ul>
        </div>
        <div className={styles.footerGroup}>
          <h3>100% Secure Payment</h3>
          <div className={styles.iconButtons}>
            <button>
              <img src={gpayLogo} alt="gpay" />
            </button>
            <button>
              <img src={paytmLogo} alt="paytm" />
            </button>
            <button>
              <img src={mastercardLogo} alt="mastercard" />
            </button>
            <button>
              <img src={visaLogo} alt="visa" />
            </button>
            <button>
              <img src={phonepeLogo} alt="phonepe" />
            </button>
            <button>
              <img src={rupayLogo} alt="rupay" />
            </button>
          </div>
        </div>

        <div className={styles.footerGroup}>
          <h3>Download The App</h3>

          <div className={styles.iconButtons}>
            <button className={styles.btnLarge}>
              <img src={appleLogo} alt="apple" />
              AppStore
            </button>
            <button className={styles.btnLarge}>
              <img src={playstoreLogo} alt="google" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

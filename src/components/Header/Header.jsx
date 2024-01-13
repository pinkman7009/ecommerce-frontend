import * as styles from "./Header.module.css";
import Navbar from "./Navbar";
import headerUrl from "../../assets/header.png";

const Header = ({ setSearchTerm }) => {
  return (
    <>
      <div className={styles.banner}>Flat 10% off on your first order</div>
      <Navbar setSearchTerm={setSearchTerm} />
      <img src={headerUrl} className={styles.headerImg} />
    </>
  );
};

export default Header;

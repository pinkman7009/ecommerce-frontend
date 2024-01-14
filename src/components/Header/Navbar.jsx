import { useState } from "react";
import {
  FaBars,
  FaChevronLeft,
  FaRegHeart,
  FaRegUserCircle,
  FaSearch,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import * as styles from "./Navbar.module.css";
import logoUrl from "../../assets/logo.png";

const Navbar = ({ setSearchTerm }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <FaBars />
        </div>
        <div className={`${styles.links} ${showMenu ? styles.showMenu : ""}`}>
          <li>
            <img src={logoUrl} className={styles.logo} />
          </li>
          <li>Men</li>
          <li>Women</li>
          <li>Accessories</li>
          <IoClose className={styles.cross} onClick={toggleMenu} />
        </div>
        <div className={styles.productInfo}>
          <FaChevronLeft />
          <span className={styles.productInfoText}>
            Men's Boyfriend T shirts
          </span>
        </div>
      </div>
      <div className={styles.navbarRight}>
        <input
          type="text"
          placeholder="Search for products"
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchbar}
        />

        <ul className={styles.links}>
          <li className={styles.searchIcon}>
            <FaSearch />
          </li>
          <li>
            <FaRegUserCircle />
            <span className={styles.linkText}>Account</span>
          </li>
          <li>
            <FaRegHeart />
            <span className={styles.linkText}>Wishlist</span>
          </li>
          <li>
            <AiOutlineShoppingCart />
            <span className={styles.linkText}>Cart</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

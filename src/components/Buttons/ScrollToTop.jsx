import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import * as styles from "./Buttons.module.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${styles.scrollToTopButton} ${
        isVisible ? styles.showButton : ""
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
      <div>TOP</div>
    </div>
  );
};

export default ScrollToTopButton;

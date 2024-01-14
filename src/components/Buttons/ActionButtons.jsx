import React from "react";
import * as styles from "./Buttons.module.css";
import { IoFilter } from "react-icons/io5";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { sortOptions } from "../Products/ProductSort/const";

const ActionButtons = ({ setShowFilterMobile, setShowSort, sortBy }) => {
  return (
    <div className={styles.actionbtns}>
      <button
        className={styles.sortButton}
        onClick={() => setShowSort((showSort) => !showSort)}
      >
        <FaSortAmountDownAlt />
        Sort by{" "}
        {sortBy !== "" &&
          sortOptions.find((option) => option.key === sortBy).label}
      </button>
      <button
        className={styles.filterBtn}
        onClick={() => setShowFilterMobile((prevShow) => !prevShow)}
      >
        <IoFilter />
        Filter
      </button>
    </div>
  );
};

export default ActionButtons;

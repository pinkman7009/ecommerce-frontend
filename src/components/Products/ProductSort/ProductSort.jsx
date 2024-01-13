import React from "react";
import * as styles from "../AllProducts.module.css";
import { sortOptions } from "./const";

const ProductSort = ({ setShowSort, sortBy, setSortBy }) => {
  return (
    <div className={styles.sortBox}>
      {sortOptions.map((option) => (
        <div key={option.value} className={styles.option}>
          <input
            type="radio"
            id={option.value}
            name="radio"
            className={styles.radioInput}
            checked={sortBy === option.key}
            onChange={() => {
              setShowSort((showSort) => !showSort);
              setSortBy(option.key);
            }}
          />
          <label htmlFor={option.value} className={styles.radioLabel}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProductSort;

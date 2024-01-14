import { useState, useCallback } from "react";
import { FaSortAmountDownAlt } from "react-icons/fa";

import * as styles from "./AllProducts.module.css";
import ProductItem from "./ProductItem";
import useFilterContext from "../../hooks/useFilterContext";
import ProductSort from "./ProductSort/ProductSort";
import ActionButtons from "../Buttons/ActionButtons";

import { products } from "./const";
import { sortOptions } from "./ProductSort/const";

const ProductsList = ({
  searchTerm,
  showSort,
  setShowSort,
  sortBy,
  setSortBy,
}) => {
  const { state: filters } = useFilterContext();

  const filterProducts = useCallback(
    (product) => {
      for (const key in filters) {
        if (filters[key] && filters[key].length > 0) {
          if (!filters[key].includes(product[key])) {
            return false;
          }
        }
      }
      return true;
    },
    [filters]
  );

  const sortProducts = (a, b) => {
    const option = sortOptions.find((option) => option.key === sortBy);
    const sortKey = option.value;
    const isAsc = option.asc;
    const discountedAmount1 = a.amount - (a.amount * a.discount) / 100;
    const discountedAmount2 = b.amount - (b.amount * b.discount) / 100;

    switch (sortKey) {
      case "amount":
        return isAsc
          ? discountedAmount1 - discountedAmount2
          : discountedAmount2 - discountedAmount1;
      default:
        return isAsc ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
    }
  };

  const filteredProducts = products.filter(filterProducts);
  const searchedProducts =
    searchTerm.length > 0
      ? filteredProducts.filter(
          (product) =>
            product.product_name
              ?.toLowerCase()
              .includes(searchTerm?.toLowerCase()) ||
            product.brand?.toLowerCase().includes(searchTerm?.toLowerCase())
        )
      : filteredProducts;
  const sortedProducts =
    sortBy !== ""
      ? searchedProducts.slice().sort(sortProducts)
      : searchedProducts;

  return (
    <div className={styles.productSection}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h3>T Shirts for Men</h3>
          <p>{sortedProducts.length} Products</p>
        </div>

        <button
          className={styles.sortButton}
          onClick={() => setShowSort((showSort) => !showSort)}
        >
          <FaSortAmountDownAlt />
          Sort by{" "}
          {sortBy !== "" &&
            sortOptions.find((option) => option.key === sortBy).label}
        </button>
      </div>
      {showSort ? (
        <ProductSort
          setShowSort={setShowSort}
          sortBy={sortBy}
          setSortBy={setSortBy}
          visibleClassname={"visibleSortDesktop"}
        />
      ) : null}

      <div className={styles.productsList}>
        {sortedProducts.map((product) => (
          <ProductItem key={product.product_name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;

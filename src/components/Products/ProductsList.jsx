import React from "react";
import * as styles from "./AllProducts.module.css";
import products from "./const";
import { FaSortAmountDownAlt } from "react-icons/fa";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  return (
    <div className={styles.productSection}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h3>T Shirts for Men</h3>
          <p>{products.length} Products</p>
        </div>
        <button>
          <FaSortAmountDownAlt />
          Sort by:
        </button>
      </div>
      <div className={styles.productsList}>
        {products.map((product) => (
          <ProductItem key={product.product_name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;

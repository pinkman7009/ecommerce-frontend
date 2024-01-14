import { useState } from "react";
import * as styles from "./AllProducts.module.css";
import Filters from "./ProductFilters/Filters";
import ProductsList from "./ProductsList";
import ActionButtons from "../Buttons/ActionButtons";
import ProductSort from "./ProductSort/ProductSort";
import ScrollToTopButton from "../Buttons/ScrollToTop";

const AllProducts = ({ searchTerm }) => {
  const [showFilterMobile, setShowFilterMobile] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [sortBy, setSortBy] = useState("");

  console.log({ searchTerm });

  return (
    <>
      <div className={styles.productsSection}>
        <ul className={styles.breadcrumbs}>
          <li>Home {">"}</li>
          <li> Men Clothing {"> "}</li>
          <li>
            {" "}
            <span> Mens Tshirts</span>
          </li>
        </ul>
        <div className={styles.productsData}>
          <Filters visibleClassname={"filterVisibleDesktop"} />
          <ProductsList
            searchTerm={searchTerm}
            showSort={showSort}
            setShowSort={setShowSort}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>
      </div>
      <div className={styles.actions}>
        {showFilterMobile ? (
          <Filters visibleClassname={"filterVisibleMobile"} />
        ) : null}
        {showSort ? (
          <ProductSort
            setShowSort={setShowSort}
            sortBy={sortBy}
            setSortBy={setSortBy}
            visibleClassname={"visibleSortMobile"}
          />
        ) : null}
        <ActionButtons
          setShowFilterMobile={setShowFilterMobile}
          setShowSort={setShowSort}
          sortBy={sortBy}
        />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default AllProducts;

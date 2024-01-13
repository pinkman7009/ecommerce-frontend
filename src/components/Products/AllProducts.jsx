import * as styles from "./AllProducts.module.css";
import Filters from "./ProductFilters/Filters";
import ProductsList from "./ProductsList";

const AllProducts = ({ searchTerm }) => {
  return (
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
        <Filters />
        <ProductsList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default AllProducts;

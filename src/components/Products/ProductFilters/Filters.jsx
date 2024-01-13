import { FaChevronUp } from "react-icons/fa";
import filters from "./const";
import * as styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.filterHeader}>
        <h3>Filters ({filters.length})</h3>
        <button>Clear All</button>
      </div>
      <div className={styles.filtersList}>
        {filters.map((filter) => (
          <div key={filter.label} className={styles.filterGroup}>
            <div className={styles.filterHeader}>
              <h3 className={styles.filterLabel}>{filter.label}</h3>
              <FaChevronUp />
            </div>
            {filter.items.map((item) => (
              <div key={item.label} className={styles.filterItem}>
                <input type="checkbox" />
                <label htmlFor="">{item.label}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;

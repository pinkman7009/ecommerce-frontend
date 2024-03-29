import filters from "./const";
import * as styles from "./Filters.module.css";
import FilterGroup from "./FilterGroup";
import useFilterContext from "../../../hooks/useFilterContext";

const Filters = ({ visibleClassname }) => {
  const { dispatch } = useFilterContext();

  const clearAllFilters = () => {
    dispatch({
      type: "CLEAR_ALL_FILTERS",
    });
  };

  console.log({ visibleClassname });
  return (
    <div className={`${styles.filters} ${styles[visibleClassname]}`}>
      <div className={styles.filterHeader}>
        <h3>Filters ({filters.length})</h3>
        <button onClick={clearAllFilters}>Clear All</button>
      </div>
      <div className={styles.filtersList}>
        {filters.map((filter) => (
          <FilterGroup key={filter.key} filter={filter} />
        ))}
      </div>
    </div>
  );
};

export default Filters;

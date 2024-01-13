import { useState } from "react";
import * as styles from "./Filters.module.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import useFilterContext from "../../../hooks/useFilterContext";
import { products } from "../const";

const FilterGroup = ({ filter }) => {
  const { state: filters, dispatch } = useFilterContext();

  const handleFilterClick = (value) => {
    const isSelected = filters[filter.key]?.includes(value);

    const updatedFilters = isSelected
      ? filters[filter.key].filter((item) => item !== value)
      : [...filters[filter.key], value];

    dispatch({
      type: "SET_FILTER",
      filterType: filter.key,
      value: updatedFilters,
    });
  };

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.filterGroup}>
      <div className={styles.filterHeader}>
        <h3 className={styles.filterLabel}>{filter.label}</h3>
        {open ? (
          <FaChevronUp onClick={() => setOpen(false)} />
        ) : (
          <FaChevronDown onClick={() => setOpen(true)} />
        )}
      </div>
      {open
        ? filter.items.map((item) => (
            <div key={item.label} className={styles.filterItem}>
              <input
                type="checkbox"
                onChange={() => handleFilterClick(item.value)}
                checked={filters[filter.key].includes(item.value)}
              />
              <label htmlFor="">
                {item.label}

                <span>
                  (
                  {
                    products.filter(
                      (product) => product[filter.key] === item.value
                    ).length
                  }
                  )
                </span>
              </label>
            </div>
          ))
        : null}
    </div>
  );
};

export default FilterGroup;

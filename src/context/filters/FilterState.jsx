import { useReducer } from "react";
import FilterContext from "./filterContext";

const initialState = {
  gender: [],
  size: [],
  brand: [],
  color: [],
  sleeve: [],
  neck: [],
  type: [],
  ratings: [],
  discount: [],
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, [action.filterType]: action.value };
    case "CLEAR_ALL_FILTERS":
      return initialState;
    default:
      return state;
  }
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

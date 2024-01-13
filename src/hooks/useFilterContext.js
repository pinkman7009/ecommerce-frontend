import { useContext } from "react";
import FilterContext from "../context/filters/filterContext";

const useFilterContext = () => useContext(FilterContext);

export default useFilterContext;

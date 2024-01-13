import Home from "./pages/home";
import FilterProvider from "./context/filters/FilterState";

function App() {
  return (
    <FilterProvider>
      <Home />
    </FilterProvider>
  );
}

export default App;

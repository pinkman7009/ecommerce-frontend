import { useState } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";
import useDebounce from "../hooks/useDebounce";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useDebounce(searchTerm, 500);

  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <Products searchTerm={debouncedSearch} />
      <Footer />
    </>
  );
};

export default Home;

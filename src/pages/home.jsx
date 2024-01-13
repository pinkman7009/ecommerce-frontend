import { useState } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container">
      <Header setSearchTerm={setSearchTerm} />
      <Products searchTerm={searchTerm} />
      <Footer />
    </div>
  );
};

export default Home;

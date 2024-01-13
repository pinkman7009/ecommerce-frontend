import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";

const home = () => {
  return (
    <div className="container">
      <Header />
      <Products />
      <Footer />
    </div>
  );
};

export default home;

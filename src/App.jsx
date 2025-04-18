import React from "react";
import Navbar from "./components/Navbar";
import Crocsbanner from "./components/Crocsbanner";
import Crocsbanner2 from "./components/Crocsbanner2";
import NewArrivals from "./components/NewArrivals";
import ShopbyStyle from "./components/ShopbyStyle";
import AboutCrocsProducts from "./components/AboutCrocsProducts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="crocs">
      <Navbar />
      <Crocsbanner />
      <ShopbyStyle />
      <NewArrivals />
      <Crocsbanner2 />
      <AboutCrocsProducts />
      <Footer />
    </div>
  );
};

export default App;

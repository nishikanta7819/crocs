import React from "react";
import Navbar from "./components/Navbar";
import Crocsbanner from "./components/Crocsbanner";
import Crocsbanner2 from "./components/Crocsbanner2";
import NewArrivals from "./components/NewArrivals";
import ShopbyStyle from "./components/ShopbyStyle";
import AboutCrocsProducts from "./components/AboutCrocsProducts";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clogs from "./components/Clogs";
import Flips from "./components/Flips";

function Home() {
  return (
    <>
      <Crocsbanner />
      <ShopbyStyle />
      <NewArrivals />
      <Crocsbanner2 />
      <AboutCrocsProducts />
    </>
  );
}
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clogs" element={<Clogs />} />
          <Route path="/flips" element={<Flips />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

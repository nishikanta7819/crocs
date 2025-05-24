import React from "react";
import "../css/navbar.css";
import search from "../assets/search-interface-symbol.png";
import wishlist from "../assets/heart.png";
import cart from "../assets/trolley.png";

const Navbar = () => {
  return (
    <div className="crocs-navbar">
      <div className="navbar-top">
        <div className="offer">
          <p>sign up for 15% off</p>
        </div>
        <div className="account">
          <p>my account</p>
          {/* <img src="" alt="" /> */}
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="crocs-logo">
          <img src="https://www.crocs.in/logo-crocs-kMY.svg" alt="" />
        </div>
        <div className="crocs-category">
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            <li>Bestsellers</li>
            <li>new arrivals</li>
            <li>sale</li>
            <li>big savings</li>
          </ul>
        </div>
        <div className="crocs-btns">
          <img src={search} alt="" />
          <img src={wishlist} alt="" />
          <img src={cart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

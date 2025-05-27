import React from "react";
import "../css/products.css";
import allProducts from "../allProducts";
import ProductsCard from "./ProductsCard";

const Flips = () => {
  const allFlips = allProducts.filter((product) => product.type === "flips");
  return (
    <div className="products">
      <div className="products-heading">
        <div className="products-title">
          <p>flips</p>
        </div>
        <div className="products-counts">
          <p>{allFlips.length} items</p>
        </div>
      </div>
      <div className="products-products">
        {allFlips.map((product) => {
          return <ProductsCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Flips;

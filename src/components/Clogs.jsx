import React from "react";
import "../css/products.css";
import allProducts from "../allProducts";
import ProductsCard from "./ProductsCard";

const Clogs = () => {
  const allClogs = allProducts.filter((product) => product.type === "clogs");
  return (
    <div className="products">
      <div className="products-heading">
        <div className="products-title">
          <p>clogs</p>
        </div>
        <div className="products-counts">
          <p>{allClogs.length} items</p>
        </div>
      </div>
      <div className="products-products">
        {allClogs.map((product) => {
          return <ProductsCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Clogs;

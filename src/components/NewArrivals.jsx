import React from "react";
import "../css/newarrivals.css";
import allProducts from "../allProducts";
import ProductsCard from "../components/ProductsCard";

const NewArrivals = () => {
  const newArrivals = allProducts.filter(
    (product) => product.newArrivals === "yes"
  );
  return (
    <div className="new-arrivals">
      <div className="new-arrivals-title">
        <p>New arrivals</p>
      </div>
      <div className="new-arrivals-cards">
        {newArrivals.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;

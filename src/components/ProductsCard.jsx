import React from "react";
import "../css/productscard.css";

const ProductsCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card-title">
        <p>{product.name}</p>
      </div>
      <div className="product-card-price">
        <span style={{ fontWeight: "bold" }}>₹{product.discountedPrice}</span>{" "}
        <span style={{ color: "green", fontWeight: "bold" }}>
          ({product.discountPercentage})
        </span>
        <span style={{ textDecoration: "line-through", color: "gray" }}>
          ₹{product.originalPrice}
        </span>{" "}
      </div>
    </div>
  );
};

export default ProductsCard;

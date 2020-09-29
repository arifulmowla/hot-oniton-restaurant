import React from "react";
import "./Product.css";

const Product = (props) => {
  const { title, description, price, image } = props.product;

  return (
    <div className="product">
      <img src={image} alt="breakfast" className="product-img" />

      <h6>{title}</h6>

      <p>{description}</p>
      <h3 className="price">${price}</h3>
    </div>
  );
};

export default Product;

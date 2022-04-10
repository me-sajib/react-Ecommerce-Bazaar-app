import React from "react";
import "./Product.css";
import img from "../../img/images (13).jpg";

const Product = (props) => {
  const { name, price, image } = props.product;

  return (
    <div className="product-container">
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="product-details">
        <h2>{name}</h2>
        <h3>${price}</h3>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;

import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 10)));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">See our Products</h1>
      <div className="products">
        {products.map((pd) => (
          <Product product={pd} key={pd.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;

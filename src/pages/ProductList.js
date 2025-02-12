import React from "react";
import ProductCard from "../components/ProductCard";
import "./ProductList.css";

const products = [
  { id: 1, name: "Laptop", price: 1200, image: "/images/laptop.png" },
  { id: 2, name: "Smartphone", price: 800, image: "/images/phone.png" },
  { id: 3, name: "Headphones", price: 200, image: "/images/headphones.png" }
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

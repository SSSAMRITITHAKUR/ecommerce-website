import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopCard from "./ShopCard";
import axios from "axios";

const ShopList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // ✅ Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // ✅ Function to navigate to Product Detail Page
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="col-md-4 mb-4"
            onClick={() => handleProductClick(product)} // ✅ Click to navigate
            style={{ cursor: "pointer" }}
          >
            <ShopCard 
              id={product.id} 
              image={product.images.length > 0 ? product.images[0].mediaUrl : "placeholder.jpg"} 
              title={product.name} 
              price={product.price} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopList;

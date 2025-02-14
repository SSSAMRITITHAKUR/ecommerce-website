import React from "react";
import ShopList from "../components/ShopList";

const ShopPage = ({ products }) => { // ✅ Pass products as props
  return (
    <div className="container text-center mt-4">
      <h1>Shop</h1>
      <p className="text-muted">
        State the biggest use case of your product. Briefly expand on how this will help your customers.
      </p>
      <ShopList products={products} /> {/* ✅ Pass products */}
    </div>
  );
};

export default ShopPage;

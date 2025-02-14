import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; 
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import Account from "./pages/Account";
import ProductDetail from "./pages/ProductDetail"; // ✅ Import Product Detail Page

import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const menuItems = ["Home", "Blog", "Shop", "Contact"];
  const brandName = "BOTIGA";
  const location = useLocation();

  return (
    <CartProvider>
      <div className="app-container">
        <CustomNavbar brandName={brandName} menuItems={menuItems} />
        <div className="content-wrapper">
          <Routes key={location.pathname}>
            <Route path="/" element={<Home />} /> 
            <Route path="/home" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/account" element={<Account />} />
            
            
            {/* ✅ Product Detail Route */}
            <Route path="/product/:id" element={<ProductDetail />} /> 
          </Routes>
        </div>
        <Footer brandName={brandName} />
      </div>
    </CartProvider>
  );
};

export default App;

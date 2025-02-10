import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop"; // ✅ Add this line
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Search from "./pages/Search";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const menuItems = ["Home", "Blog", "Shop", "Contact"];
  const brandName = "BOTIGA";

  return (
    <>
      <CustomNavbar brandName={brandName} menuItems={menuItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} /> {/* ✅ Add this route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer brandName={brandName} />
    </>
  );
};

export default App;

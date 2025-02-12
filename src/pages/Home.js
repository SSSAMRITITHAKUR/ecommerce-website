import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ Import location for route tracking
import Banner from "../components/Banner";
import FeaturedSection from "../components/FeaturedSection";
import HighlightedSection from "../components/HighlightedSection";
import CategorySection from "../components/CategorySection";
import QuickViewModal from "../components/QuickViewModal";
import { useCart } from "../context/CartContext"; // ✅ Import global cart context

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Get current route
  const { addToCart } = useCart(); // ✅ Use global cart context
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ Reset Quick View Modal on route change
  useEffect(() => {
    setSelectedProduct(null);
  }, [location.pathname]); // Runs when route changes

  const products = [
    {
      id: 1,
      image: "front-view-colored-fragrance-designed-isolated-white-floor.jpg",
      sale: true,
      name: "Eternal Sunset Collection Lip and Cheek",
      price: 16.00, // ✅ Changed to a number
      discountedPrice: 12.00,
      colors: ["#ff5733", "#ffcc00"],
      description: "A vibrant lip and cheek tint that lasts all day.",
    },
    {
      id: 2,
      image: "front-view-dark-red-bottle-fragrance-isolated-white-desk.jpg",
      sale: false,
      name: "Vinopure Pore Purifying Gel Cleanser",
      price: 14.00,
      colors: ["#009688", "#607d8b"],
      description: "A deep pore cleanser with natural extracts for glowing skin.",
    },
    {
      id: 3,
      image: "4182757_34.jpg",
      sale: false,
      name: "Deep Sweep 2% BHA Pore Cleaning Toner",
      price: 21.00,
      colors: ["#795548", "#9e9e9e"],
      description: "An exfoliating toner that clears breakouts and tightens pores.",
    },
  ];

  const categories = [
    { id: 1, name: "Makeup", image: "pink-compact-powder-with-flower-twig-mirror-makeup-brushes-white-fur-backdrop.jpg" },
    { id: 2, name: "Lipstick", image: "set-vivid-lipsticks.jpg" },
    { id: 3, name: "Bath Products", image: "bath-decoration-with-soap-bottle-towel.jpg" },
    { id: 4, name: "Treatments", image: "pexels-rethaferguson-3621234.jpg" },
  ];

  // Open Quick View Modal
  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  // Close Quick View Modal
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  // ✅ Add to Global Cart Context
  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); // ✅ Ensure quantity is added
  };

  return (
    <div key={location.pathname}> {/* ✅ Force re-render when navigating to Home */}
      <Banner />
      <FeaturedSection 
        products={products} 
        onQuickView={handleQuickView} 
        onAddToCart={handleAddToCart} 
      />
      
      {/* ✅ Dynamic Highlighted Section */}
      <HighlightedSection 
        title="What differentiates you from the competition?"
        description="Use this section to talk about it. Don’t forget to talk about the benefits."
        backgroundImage="close-up-body-butter-recipient.jpg"
        buttonText="Shop Now"
        buttonLink="/shop"
      />

      <CategorySection categories={categories} />
      
      {/* ✅ Quick View Modal */}
      {selectedProduct && (
        <QuickViewModal 
          product={selectedProduct} 
          onClose={handleCloseModal} 
          onAddToCart={handleAddToCart} 
        />
      )}
    </div>
  );
};

export default Home;

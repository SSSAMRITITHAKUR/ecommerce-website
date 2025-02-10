import React from "react";
import Banner from "../components/Banner";
import FeaturedSection from "../components/FeaturedSection";
import HighlightedSection from "../components/HighlightedSection";
import CategorySection from "../components/CategorySection";

const Home = () => {
  const products = [
    {
      id: 1,
      image: "front-view-colored-fragrance-designed-isolated-white-floor.jpg",
      sale: true,
      name: "Eternal Sunset Collection Lip and Cheek",
      price: "$16.00",
      discountedPrice: "$12.00",
    },
    {
      id: 2,
      image: "front-view-dark-red-bottle-fragrance-isolated-white-desk.jpg",
      sale: false,
      name: "Vinopure Pore Purifying Gel Cleanser",
      price: "$14.00",
    },
    {
      id: 3,
      image: "4182757_34.jpg",
      sale: false,
      name: "Deep Sweep 2% BHA Pore Cleaning Toner",
      price: "$21.00",
    },
  ];

  const categories = [
    { id: 1, name: "Makeup", image: "pink-compact-powder-with-flower-twig-mirror-makeup-brushes-white-fur-backdrop.jpg" },
    { id: 2, name: "Lipstick", image: "set-vivid-lipsticks.jpg" },
    { id: 3, name: "Bath Products", image: "bath-decoration-with-soap-bottle-towel.jpg" },
    { id: 4, name: "Treatments", image: "pexels-rethaferguson-3621234.jpg" },
  ];

  return (
    <>
      <Banner />
      <FeaturedSection products={products} />
      <HighlightedSection backgroundImage="close-up-body-butter-recipient.jpg" />
      <CategorySection categories={categories} />
    </>
  );
};

export default Home;

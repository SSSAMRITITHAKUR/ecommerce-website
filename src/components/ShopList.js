import React from "react";
import ShopCard from "./ShopCard";

const products = [
  { id: 1, title: "Deep Sweep 2% BHA Pore Cleaning Toner", price: "21.00", image: "beauty-self-care-products-arrangement.jpg" },
  { id: 2, title: "Hydrating Face Moisturizer", price: "25.50", image: "front-view-natural-cream-concept.jpg" },
  { id: 3, title: "Vitamin C Brightening Serum", price: "30.00", image: "spa-concept-with-salt-mint-lotion-towel.jpg" },
  { id: 4, title: "Aloe Vera Soothing Gel", price: "18.99", image: "aloe-vera-cosmetic-cream-dark-surface.jpg" },
  { id: 5, title: "Charcoal Detox Face Mask", price: "15.00", image: "overhead-view-spa-stones-brush-clay-mask-pumice-stone-white-background.jpg" },
  { id: 6, title: "Organic Lip Balm Pack", price: "12.00", image: "shea-butter-beauty-treatment-arrangement.jpg" },
  { id: 7, title: "Rose Water Facial Mist", price: "20.50", image: "spa-setting-with-pink-roses-aroma-oil-vintage-style.jpg" },
  { id: 8, title: "SPF 50+ Sunscreen Lotion", price: "22.99", image: "4399064_2334650.jpg" },
];

const ShopList = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ShopCard 
              id={product.id} 
              image={product.image} 
              title={product.title} 
              price={product.price} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopList;

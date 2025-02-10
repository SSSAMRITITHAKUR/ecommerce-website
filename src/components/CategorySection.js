import React from "react";
import "./CategorySection.css"; // Custom CSS

const CategorySection = ({ categories }) => {
  return (
    <section className="category-section">
      <div className="container text-center">
        <h2 className="section-title">Featured Categories</h2>
        <p className="section-description">
          Give your customers insight into your product collection. Select imagery and name that relates to the product category.
        </p>
        <div className="row">
          {categories.map((category) => (
            <div key={category.id} className="col-md-3">
              <div className="category-card">
                <img src={category.image} alt={category.name} className="img-fluid" />
                <h5 className="category-name">{category.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

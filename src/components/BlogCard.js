import React from "react";
import "./BlogCard.css"; // Import CSS

const BlogCard = ({ image, date, title }) => {
  return (
    <div className="card blog-card h-100">
      <img src={image} className="card-img-top" alt="blog" />
      <div className="card-body blog-card-body">
        <p className="text-muted">{date}</p>
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default BlogCard;

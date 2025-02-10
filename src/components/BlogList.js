import React from "react";
import BlogCard from "./BlogCard";

const blogsData = [
  { id: 1, title: "Desirable outcome that your customers get from using your product", date: "July 18, 2021", image: "close-up-body-butter-recipient.jpg" },
  { id: 2, title: "Headline about your customers' biggest problem", date: "July 18, 2021", image: "bath-decoration-with-soap-bottle-towel.jpg" },
  { id: 3, title: "Product features you can't live without", date: "July 18, 2021", image: "close-up-view-body-butter-cream-marble-background.jpg" },
  { id: 4, title: "Why your product is worth the investment", date: "July 18, 2021", image: "pink-compact-powder-with-flower-twig-mirror-makeup-brushes-white-fur-backdrop.jpg" },
  { id: 5, title: "How to use your product effectively", date: "July 18, 2021", image: "pexels-rethaferguson-3621234.jpg" },
  { id: 6, title: "The best way to integrate your product into daily life", date: "July 18, 2021", image: "packaging-concept.jpg" },
  { id: 7, title: "Top benefits of using your product", date: "July 18, 2021", image: "coconut-jelly-coconut-milk.jpg" },
  { id: 8, title: "Customer success stories with your product", date: "July 18, 2021", image: "set-vivid-lipsticks.jpg" },
  { id: 9, title: "The future of your product and what's next", date: "July 18, 2021", image: "front-view-natural-cream-concept.jpg" },
];

const BlogList = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {blogsData.map((blog) => (
          <div key={blog.id} className="col-md-4 mb-4 d-flex">
            <div className="w-100 h-100">
              <BlogCard image={blog.image} date={blog.date} title={blog.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

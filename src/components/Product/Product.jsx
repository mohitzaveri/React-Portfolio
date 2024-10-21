import React from "react";

const Product = ({ image, GithubRepo }) => {
  return (
    <div className="product">
      <img src={image} alt="Project Screenshot" className="product-image" />
    </div>
  );
};

export default Product;

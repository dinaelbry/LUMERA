import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  if (!product) {
    return <div>Loading product...</div>;
  }
  return (
      <div className="card " style={{ width: "280px", height: "520px" }}>
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title || "Product image"}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
            {product.description
              ? product.description.substring(0, 100) + "..."
              : "No description"}
        </p>
          <Link to={`/products/${product.id}`} className="btn btn-outline ">
            View Details
          </Link>
        </div>
      </div>
  );
}

export default ProductCard;

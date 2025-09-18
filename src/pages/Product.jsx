import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("error fetching product:", error);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-5">Product not found</div>;
  }

  return (
    <div className="container item py-5 my-5">
      <div className="row m-5 p-5">
        <div className="col-md-6 ">
          <img src={product.thumbnail} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 det">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p className="fw-bold">Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>

          <Link to="/products" className="btn btn-outline">
            Back to Products
          </Link>

          <Link to="#" className="btn btn-outline ms-2">
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

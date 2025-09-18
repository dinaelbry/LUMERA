import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../components/ProductCard";
import { SearchContext } from "../SearchContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useContext(SearchContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products?category=beauty")
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.products.filter((product) => product.category === "beauty")
        );
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching products: ", error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }



  return (
    <div className="container products">
      <h2 className="text-center display-6 fw-bold my-5 text-dark ">
        Our Products
      </h2>
      {filteredProducts.length === 0 ? (
        <div className="text-center py-5">No products found</div>
      ) : (
        <div className="product-cards row row-cols-1 row-cols-md-2 row-cols-lg-3 gap-3 align-items-stretch justify-content-center">
          {" "}
          {filteredProducts.map((product) => (
            <div className="col" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

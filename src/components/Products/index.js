import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductGrid from "../ProductGrid";
import "./index.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="main-products-container">
      <div className="heading">
        <h1>Products</h1>
      </div>

      <ul className="product-list-items">
        {products.map((each) => (
          <ProductGrid eachItem={each} id={each.id} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
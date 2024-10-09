
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import './Product.css'
const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // State to manage filtered products
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Display all products initially
      })
      .catch((error) => {
        console.error("error fetching data", error);
      });
  }, []);

  // Function to filter products based on category (tab)
  const filterProducts = (category) => {
    setActiveTab(category); // Update the active tab

    if (category === "all") {
      setFilteredProducts(products); // Show all products
    } else if (category === "topRated") {
      setFilteredProducts(products.filter((product) => product.isTopProduct));
    } else if (category === "bestseller") {
      setFilteredProducts(products.filter((product) => product.isBestSeller));
    } else if (category === "newArrivals") {
      setFilteredProducts(products.filter((product) => product.isNewArrival));
    }
  };

  return (
    <section className="container mx-auto my-5" data-aos="fade-up">
      {/* Category Tabs */}
      <ul className="nav justify-content-center text-uppercase gap-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "all" ? "active font-extrabold underline" : ""}`}
            onClick={() => filterProducts("all")}
            style={{ border: "none", background: "transparent" }} 
          >
            ALL PRODUCTS
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "topRated" ? "active font-extrabold underline" : ""}`}
            onClick={() => filterProducts("topRated")}
            style={{ border: "none", background: "transparent" }} 
          >
            TOP RATED
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "bestseller" ? "active font-extrabold underline" : ""}`}
            onClick={() => filterProducts("bestseller")}
            style={{ border: "none", background: "transparent" }} 
          >
            BESTSELLER
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "newArrivals" ? "active font-extrabold underline" : ""}`}
            onClick={() => filterProducts("newArrivals")}
            style={{ border: "none", background: "transparent" }} 
          >
            NEW ARRIVALS
          </button>
        </li>
      </ul>

      {/* Products Grid */}
      <div className="row g-3 mt-2 mb-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  );
};

export default Products;


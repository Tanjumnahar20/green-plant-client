// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import ProductCard from "./ProductCard";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/products")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);
//   return (
//     <section className="container mx-auto my-5" data-aos="fade-up">
//       <ul className="nav justify-content-center text-uppercase gap-3">
//         <li className="nav-item">
//           <Link className="nav-link active font-extrabold"> TOP RATED</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link"> BESTSELLER</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link"> NEW ARRIVALS</Link>
//         </li>
//       </ul>
//       <div className="row g-3 mt-2 mb-5">
//         {products.map((product) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Products;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import ProductCard from "./ProductCard";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [activeTab, setActiveTab] = useState("all"); // Default tab is "topRated"

//   useEffect(() => {
//     fetch("http://localhost:5000/products")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   // Function to filter products based on active tab
//   const filteredProducts = () => {
//     if (activeTab === "isTopProduct") {
//       return products.filter(product => product.rating >= 4.5); // Filter by rating
//     } else if (activeTab === "bestseller") {
//       return products.filter(product => product.isBestSeller); // Assuming a property isBestseller
//     } else if (activeTab === "newArrivals") {
//       return products.filter(product => product.isNewArrival); // Assuming a property isNewArrival
//     } else {
//       return products; // Return all products by default
//     }
//   };

//   return (
//     <section className="container mx-auto my-5" data-aos="fade-up">
//       <ul className="nav justify-content-center text-uppercase gap-3">
//         <li className="nav-item">
//           <Link
//             className={`nav-link ${activeTab === "topRated" ? "active font-extrabold" : ""}`}
//             onClick={() => setActiveTab("topRated")}
//           >
//             TOP RATED
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             className={`nav-link ${activeTab === "bestseller" ? "active font-extrabold" : ""}`}
//             onClick={() => setActiveTab("bestseller")}
//           >
//             BESTSELLER
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             className={`nav-link ${activeTab === "newArrivals" ? "active font-extrabold" : ""}`}
//             onClick={() => setActiveTab("newArrivals")}
//           >
//             NEW ARRIVALS
//           </Link>
//         </li>
//       </ul>

//       <div className="row g-3 mt-2 mb-5">
//         {filteredProducts().map((product) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Products;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // State to manage filtered products
  const [activeTab, setActiveTab] = useState("all"); // Default tab is "All Products"

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setFilteredProducts(data); // Display all products initially
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Function to filter products based on category (tab)
  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(products); // Show all products
    } else if (category === "topRated") {
      setFilteredProducts(products.filter(product => product.isTopProduct));
    } else if (category === "bestseller") {
      setFilteredProducts(products.filter(product => product.isBestSeller));
    } else if (category === "newArrivals") {
      setFilteredProducts(products.filter(product => product.isNewArrival));
    }
    setActiveTab(category); // Update the active tab
  };

  return (
    <section className="container mx-auto my-5" data-aos="fade-up">
      <ul className="nav justify-content-center text-uppercase gap-3">
        <li className="nav-item">
          <Link
            className={`nav-link ${activeTab === "all" ? "active font-extrabold" : ""}`}
            onClick={() => filterProducts("all")}
          >
            ALL PRODUCTS
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activeTab === "topRated" ? "active font-extrabold" : ""}`}
            onClick={() => filterProducts("topRated")}
          >
            TOP RATED
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activeTab === "bestseller" ? "active font-extrabold" : ""}`}
            onClick={() => filterProducts("bestseller")}
          >
            BESTSELLER
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activeTab === "newArrivals" ? "active font-extrabold" : ""}`}
            onClick={() => filterProducts("newArrivals")}
          >
            NEW ARRIVALS
          </Link>
        </li>
      </ul>

      <div className="row g-3 mt-2 mb-5">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;



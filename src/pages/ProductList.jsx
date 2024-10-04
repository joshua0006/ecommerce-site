import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { products } from "../data/products";

function ProductList() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Sports",
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("All");
    }
  }, [location]);

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    // The search is already handled by the filteredProducts, so we don't need to do anything here
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
        Our Products
      </h2>

      {/* Search bar */}
      <form onSubmit={handleSearch} className="mb-4 md:mb-8">
        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-grow px-4 py-2 border rounded-md md:rounded-l-md md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md md:rounded-l-none md:rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </form>

      {/* Category filter buttons */}
      <div className="mb-4 md:mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 text-sm md:px-4 md:py-2 md:text-base rounded-full ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <p
              className="text-sm md:text-base text-gray-600 mb-4 flex-grow overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {product.description}
            </p>
            <div className="mt-auto">
              <p className="text-lg font-bold text-blue-600 mb-2 md:mb-4">
                ${product.price.toFixed(2)}
              </p>
              <Link
                to={`/product/${product.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block transition duration-300 ease-in-out w-full text-center text-sm md:text-base"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

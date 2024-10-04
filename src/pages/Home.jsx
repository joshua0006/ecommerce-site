import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { featuredProducts } from "../data/products";

function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const categories = ["Electronics", "Clothing", "Home & Garden", "Sports"];

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log(`Subscribed with email: ${email}`);
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="flex justify-center">
      {/* Main Content */}
      <div className="w-full max-w-6xl px-4">
        <div className="space-y-12 md:space-y-24">
          {/* Hero Section */}
          <div className="relative h-screen flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://picsum.photos/1920/1080?random=0')",
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
                  Welcome to E-Shopper
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-10">
                  Products shown here are for placeholder purposes only.
                </p>
                <Link
                  to="/products"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-lg md:text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg inline-block"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">
              Shop by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="group bg-gray-100 rounded-lg p-6 text-center transition-all duration-300 hover:bg-blue-500 hover:text-white"
                >
                  <h3 className="text-xl font-semibold">{category}</h3>
                </button>
              ))}
            </div>
          </div>

          {/* Featured Products Carousel */}
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">
              Featured Products
            </h2>
            <Slider {...settings} className="mb-12">
              {featuredProducts.map((product) => (
                <div key={product.id} className="px-2">
                  <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition duration-300">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="p-4 md:p-6">
                      <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 truncate">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-3 md:mb-4 truncate">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl md:text-3xl font-bold text-blue-600">
                          ${product.price.toFixed(2)}
                        </span>
                        <Link
                          to={`/product/${product.id}`}
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition duration-300 ease-in-out"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Special Offer Section */}
          <div className="bg-yellow-100 py-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Special Offer!
                  </h2>
                  <p className="text-xl">
                    Get 20% off on all products. Use code: SUMMER20
                  </p>
                </div>
                <Link
                  to="/products"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  review: "Great products and fast shipping!",
                },
                {
                  name: "Jane Smith",
                  review: "Excellent customer service. Highly recommended!",
                },
                {
                  name: "Mike Johnson",
                  review:
                    "Quality items at affordable prices. Will shop again!",
                },
              ].map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">"{review.review}"</p>
                  <p className="font-semibold">- {review.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className="bg-gray-100 py-12 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Join Our Newsletter
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-10 max-w-2xl mx-auto">
                Stay updated with our latest products and exclusive offers!
              </p>
              {subscribed ? (
                <p className="text-green-600 text-xl font-semibold">
                  Thank you for subscribing!
                </p>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="max-w-lg mx-auto flex flex-col md:flex-row"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-4 py-3 md:px-6 md:py-4 rounded-full md:rounded-l-full md:rounded-r-none text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 md:mb-0"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full md:rounded-l-none md:rounded-r-full text-lg transition duration-300 ease-in-out"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Free Shipping", description: "On orders over $50" },
                {
                  title: "30-Day Returns",
                  description: "Easy and hassle-free",
                },
                {
                  title: "Secure Payments",
                  description: "100% secure checkout",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

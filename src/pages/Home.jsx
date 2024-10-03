import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { featuredProducts } from "../data/products";

function Home() {
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

  return (
    <div className="space-y-12 md:space-y-24">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://picsum.photos/1920/1080?random=0')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
              Welcome to E-Shopper
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-10">
              Discover amazing products at great prices!
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

      {/* Featured Products Carousel */}
      <div className="container mx-auto px-4">
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

      {/* Call-to-Action Section */}
      <div className="bg-gray-100 py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Join Our Newsletter
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-10 max-w-2xl mx-auto">
            Stay updated with our latest products and exclusive offers!
          </p>
          <form className="max-w-lg mx-auto flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 md:px-6 md:py-4 rounded-full md:rounded-l-full md:rounded-r-none text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 md:mb-0"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full md:rounded-l-none md:rounded-r-full text-lg transition duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;

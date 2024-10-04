import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [selectedVersion, setSelectedVersion] = useState(product?.versions[0]);
  const popoverRef = useRef(null);

  // Generate additional images for the product
  const additionalImages = [
    product?.image,
    `https://picsum.photos/600/400?random=${product?.id + 100}`,
    `https://picsum.photos/600/400?random=${product?.id + 200}`,
  ];

  const [mainImage, setMainImage] = useState(additionalImages[0]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        selectedColor,
        selectedSize,
        selectedVersion,
      },
      quantity
    );
    setIsPopoverOpen(true);
    setTimeout(() => setIsPopoverOpen(false), 3000); // Close popover after 3 seconds
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <div className="relative pb-[100%]">
          <img
            src={mainImage}
            alt={product.name}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {additionalImages.map((img, index) => (
            <div
              key={index}
              className="relative pb-[100%] cursor-pointer"
              onClick={() => setMainImage(img)}
            >
              <img
                src={img}
                alt={`${product.name} - view ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover hover:opacity-80 transition-opacity duration-200"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-xl text-gray-600 mb-4">
          ${product.price.toFixed(2)}
        </p>
        <p className="mb-8">{product.description}</p>

        {/* Color options */}
        {product.colors.length > 0 && (
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Color:</label>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full ${
                    selectedColor === color ? "ring-2 ring-blue-500" : ""
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                ></button>
              ))}
            </div>
          </div>
        )}

        {/* Size options */}
        {product.sizes.length > 0 && (
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Size:</label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded ${
                    selectedSize === size
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Version options */}
        {product.versions.length > 0 && (
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Version:</label>
            <div className="flex flex-wrap gap-2">
              {product.versions.map((version) => (
                <button
                  key={version}
                  onClick={() => setSelectedVersion(version)}
                  className={`px-3 py-1 border rounded ${
                    selectedVersion === version
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {version}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center mb-4">
          <label htmlFor="quantity" className="mr-2">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
            className="border rounded px-2 py-1 w-16 text-center"
          />
        </div>
        <div className="relative">
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
          {isPopoverOpen && (
            <div
              ref={popoverRef}
              className="absolute left-0 top-full mt-2 w-full max-w-sm bg-emerald-500 text-white rounded-md shadow-lg"
            >
              <div className="flex items-center p-4">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="font-semibold">Added to cart!</span>
                <span className="ml-2">
                  {quantity} item{quantity > 1 ? "s" : ""} added
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

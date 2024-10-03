const productNames = [
  "Eco-Friendly Water Bottle",
  "Smart Home Assistant",
  "Wireless Noise-Cancelling Headphones",
  "Ergonomic Office Chair",
  "Portable Solar Charger",
  "Fitness Tracking Smartwatch",
  "Gourmet Coffee Maker",
  "Ultra-Thin Laptop",
  "Air Purifier with HEPA Filter",
  "Adjustable Standing Desk",
];

const getRandomProductName = () => {
  return productNames[Math.floor(Math.random() * productNames.length)];
};

const productCategories = [
  "Electronics",
  "Home & Kitchen",
  "Sports & Outdoors",
  "Beauty & Personal Care",
  "Books",
];

const getRandomCategory = () => {
  return productCategories[
    Math.floor(Math.random() * productCategories.length)
  ];
};

const colors = ["Red", "Blue", "Green", "Black", "White"];
const sizes = ["S", "M", "L", "XL", "XXL"];
const versions = ["Standard", "Pro", "Lite", "Ultimate"];

const getRandomOptions = () => ({
  colors: colors.slice(0, Math.floor(Math.random() * colors.length) + 1),
  sizes: sizes.slice(0, Math.floor(Math.random() * sizes.length) + 1),
  versions: versions.slice(0, Math.floor(Math.random() * versions.length) + 1),
});

const generateProducts = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: getRandomProductName(),
    price: Number((Math.random() * 100 + 10).toFixed(2)), // Store as a number
    image: `https://picsum.photos/600/400?random=${index + 1}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: getRandomCategory(),
    ...getRandomOptions(),
  }));
};

export const products = generateProducts(20);

export const featuredProducts = products.slice(0, 5);

export const categories = productCategories;

import React from "react";

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About E-Shop</h1>
      <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
        <p className="text-lg">
          Welcome to E-Shop, your premier destination for all things electronic,
          fashion, home & garden, and sports. Founded in 2023, we've quickly
          become a leader in the e-commerce space, offering a curated selection
          of high-quality products at competitive prices.
        </p>
        <p>
          Our mission is to make online shopping an enjoyable, hassle-free
          experience for everyone. We believe that great products shouldn't come
          with a hefty price tag, which is why we work tirelessly to bring you
          the best deals on the items you love.
        </p>
        <p>
          At E-Shop, we're more than just an online store - we're a community of
          passionate shoppers and dedicated staff who believe in the power of
          excellent customer service. From our user-friendly website to our
          responsive support team, we're here to ensure your shopping experience
          is nothing short of exceptional.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Quality: We carefully vet all our products to ensure they meet our
            high standards.
          </li>
          <li>
            Affordability: We believe everyone deserves access to great products
            at fair prices.
          </li>
          <li>
            Customer Satisfaction: Your happiness is our top priority, and we'll
            go above and beyond to ensure it.
          </li>
          <li>
            Innovation: We're always looking for new ways to improve your
            shopping experience.
          </li>
        </ul>
        <p className="mt-8">
          Thank you for choosing E-Shop. We look forward to serving you and
          exceeding your expectations with every purchase.
        </p>
      </div>
    </div>
  );
}

export default About;

import React from "react";

function Shipping() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Shipping Information</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">Shipping Methods</h2>
          <p>We offer the following shipping methods:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Standard Shipping (3-5 business days)</li>
            <li>Express Shipping (1-2 business days)</li>
            <li>International Shipping (7-14 business days)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Shipping Costs</h2>
          <p>
            Shipping costs are calculated based on the weight of your order and
            your location. You can view the exact shipping cost during checkout
            before completing your purchase.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Order Tracking</h2>
          <p>
            Once your order has been shipped, you will receive a tracking number
            via email. You can use this number to track your package on our
            website or the carrier's website.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Free Shipping</h2>
          <p>
            We offer free standard shipping on orders over $50 within the
            continental United States.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Shipping;

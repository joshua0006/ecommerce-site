import React from "react";

function Returns() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Returns & Exchanges</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">Return Policy</h2>
          <p>
            We offer a 30-day return policy for most items. If you're not
            satisfied with your purchase, you can return it for a full refund or
            exchange within 30 days of receiving your order.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Conditions for Returns</h2>
          <ul className="list-disc list-inside ml-4">
            <li>
              Items must be unused and in the same condition that you received
              them
            </li>
            <li>Items must be in the original packaging</li>
            <li>You must have the receipt or proof of purchase</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">
            How to Initiate a Return
          </h2>
          <p>
            To start the return process, please contact our customer support
            team at support@e-shop.com or call us at 1-800-123-4567. We'll
            provide you with a return authorization and further instructions.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Refunds</h2>
          <p>
            Once we receive and inspect your return, we will notify you about
            the status of your refund. If approved, your refund will be
            processed, and a credit will automatically be applied to your
            original method of payment within 5-10 business days.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Returns;

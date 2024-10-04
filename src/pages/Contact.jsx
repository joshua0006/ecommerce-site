import React from "react";

function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 space-y-6">
          <p className="text-lg text-gray-700">
            We're here to help! If you have any questions, concerns, or
            feedback, please don't hesitate to reach out to us using the
            information below.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Customer Support</h2>
              <p className="text-gray-600">Email: support@e-shop.com</p>
              <p className="text-gray-600">Phone: 1-800-123-4567</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Business Hours</h2>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 5:00 PM EST
              </p>
              <p className="text-gray-600">Saturday - Sunday: Closed</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Address</h2>
            <address className="text-gray-600 not-italic">
              E-Shop Headquarters
              <br />
              123 E-Commerce Street
              <br />
              Shopville, SP 12345
              <br />
              United States
            </address>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();
  const userMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-3xl mr-5 font-thin tracking-widest transition duration-300 hover:text-blue-300"
            >
              E-Shopper
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className="hover:text-gray-300 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="hover:text-gray-300 transition duration-300"
              >
                Products
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/cart"
              className="hover:text-gray-300 transition duration-300 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={toggleUserMenu}
                  className="focus:outline-none transition duration-300 hover:text-blue-300"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transition-all duration-300 ease-in-out ${
                    isUserMenuOpen
                      ? "opacity-100 transform scale-100"
                      : "opacity-0 transform scale-95 pointer-events-none"
                  }`}
                >
                  <button
                    onClick={() => {
                      logout();
                      toggleUserMenu();
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <button
            className="md:hidden focus:outline-none transition duration-300 hover:text-blue-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div
          className={`mt-4 md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <Link
            to="/"
            className="block py-2 hover:text-gray-300 transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block py-2 hover:text-gray-300 transition duration-300"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="block py-2 hover:text-gray-300 transition duration-300 relative"
            onClick={toggleMenu}
          >
            Cart
            {totalItems > 0 && (
              <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {totalItems}
              </span>
            )}
          </Link>
          {isAuthenticated ? (
            <button
              onClick={() => {
                logout();
                toggleMenu();
              }}
              className="block py-2 hover:text-gray-300 w-full text-left transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="block py-2 hover:text-gray-300 transition duration-300"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block py-2 hover:text-gray-300 transition duration-300"
                onClick={toggleMenu}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;

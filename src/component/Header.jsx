import React, { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [MenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };
  const navLinks = [
    { label: "Home", path: "#home" },
    { label: "Health Library", path: "#library" },
    { label: "Blog", path: "#blog" },
    { label: "Contact", path: "#contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-yellow-300 to-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
        <a href="flex items-center focus:outline-none focus:ring-2 focus:ring-pink-500 rounded ">
          <h1 className="text-2xl font-bold text-pink-600 ">Hoang khang Gay</h1>
        </a>
        <nav aria-label="primary navigation ">
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-gray-700 hover:text-pink-600 transition-colors duration-200
                      focus:outline-none focus:ring-pink-600 focus:rounded"
                >
                  {" "}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-pink-500 rounded"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={MenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {MenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
        {MenuOpen && (
          <aside
            id="mobile-menu"
            className="md:hidden absolute top-16 right-0 left-0 bg-white shadow-lg py-4 px-4"
            aria-label="Mobile menu"
          >
            <nav aria-label="Mobile Menu">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                <Link
                      to={link.path}
                      className="text-gray-700 hover:text-pink-600 transition-colors duration-200 
                          py-2 px-2 focus:outline-none focus:ring-pink-600 focus:rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
          <nav>
          <Link
              to="/login"
              aria-label="Login"
              className="bg-white border-2 border-blue-300 px-8 py-2 text-gray-700 hover:text-pink-600 transition-colors duration-200
               rounded-full focus:outline-none focus:ring-pink-600 focus:rounded"
                     >
                  Login
            </Link>
          </nav>
      </div>
    </header>
  );
};
export default Header;

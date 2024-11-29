import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        {/* Brand/Logo */}
        <div className="mb-4 text-lg font-semibold md:mb-0">
          <a href="/" className="hover:text-gray-400">
            MyBrand
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-6 md:justify-start">
          <a href="#about" className="hover:text-gray-400">
            About Us
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
          <a href="#privacy" className="hover:text-gray-400">
            Privacy Policy
          </a>
        </div>

        {/* Social Media Links */}
        <div className="mt-4 flex space-x-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="mt-4 text-center text-gray-500">
        © 2024 MyBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

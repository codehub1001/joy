import React from 'react';
import { FaHeart, FaEnvelopeOpenText, FaMobileAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-pink-100 to-red-200 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <FaHeart className="text-red-500 text-3xl animate-pulse" />
            <h1 className="text-xl md:text-2xl font-bold text-rose-700 tracking-tight">
              Love Notes to Joy Chioma 💌
            </h1>
          </div>

          {/* Nav for large screens */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-rose-800">
            <a href="#about" className="hover:text-red-600 transition">About Joy</a>
            <a href="#messages" className="hover:text-red-600 transition">Messages</a>
            <a href="#gallery" className="hover:text-red-600 transition">Gallery</a>
            <a href="#contact" className="hover:text-red-600 transition">Send a Note</a>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <FaMobileAlt className="text-2xl text-rose-700" />
          </div>
        </div>

        {/* Mobile nav - visible on small screens only */}
        <div className="md:hidden flex flex-col space-y-2 mt-2 text-rose-800 font-medium text-sm">
          <a href="#about" className="hover:text-red-600 transition">About Joy</a>
          <a href="#messages" className="hover:text-red-600 transition">Messages</a>
          <a href="#gallery" className="hover:text-red-600 transition">Gallery</a>
          <a href="#contact" className="hover:text-red-600 transition">Send a Note</a>
        </div>
      </div>

      {/* Subheader Line */}
      <div className="text-center text-rose-600 text-sm md:text-base py-2 italic">
        A love letter site dedicated to the one and only slim, brown-skin queen — Joy Chioma Ummuna 💕
      </div>
    </header>
  );
};

export default Header;

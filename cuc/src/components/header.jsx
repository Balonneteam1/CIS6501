import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { useLogin } from '../context/logincontext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { loggedIn, login, logout } = useLogin(); // Use the login context

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    logout(); // Trigger the logout function from context
    window.location.href = '/'; // Optionally, redirect to the homepage
  };

  return (
    <header className="bg-secondary text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-white hover:text-accent">
            <img
              src="/logocuc.png"
              alt="CUC Horizons Logo"
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-xs mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-1.5 text-secondary bg-white rounded-md outline-none focus:ring-2 focus:ring-accent"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <ul className="flex">
            {['Home', 'Career', 'About', 'Engagement', 'Feedback'].map((text, index) => (
              <li key={index} className="group">
                <Link
                  to={`/${text.toLowerCase().replace(/ & | /g, '-')}`}
                  className="relative text-lg px-2 hover:text-accent transition duration-300"
                >
                  {text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login/Logout Button */}
        <div className="hidden lg:block">
          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-accent text-white px-4 py-2 rounded-md hover:bg-primary transition duration-300 transform hover:scale-105"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-accent text-white px-4 py-2 rounded-md hover:bg-primary transition duration-300 transform hover:scale-105"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 bg-secondary p-4 rounded-md shadow-lg animate-slide-down">
          <ul className="space-y-4">
            {['Home', 'Career', 'Map', 'Engagement', 'Feedback'].map((text, index) => (
              <li key={index}>
                <Link
                  to={`/${text.toLowerCase().replace(/ & | /g, '-')}`}
                  className="block text-lg font-bold text-white hover:text-accent transition duration-300"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Login/Logout Button */}
          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-accent text-white px-4 py-2 rounded-md hover:bg-primary transition duration-300 transform hover:scale-105 w-full"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-accent text-white px-4 py-2 rounded-md hover:bg-primary transition duration-300 transform hover:scale-105 w-full"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;

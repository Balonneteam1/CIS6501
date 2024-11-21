import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
        
        {/* Footer Logo or Name and Description */}
        <div className="text-center lg:text-left lg:w-1/3">
          <div className="text-lg font-bold">
            CUC Horizons &copy; {new Date().getFullYear()}
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Empowering students with the tools and resources for career and business success.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 lg:w-1/3 lg:items-center">
          <h4 className="text-md font-bold">Quick Links</h4>
          <Link to="/about" className="hover:text-accent transition duration-300">
            About Us
          </Link>
          <Link to="/career" className="hover:text-accent transition duration-300">
            Careers
          </Link>
          <Link to="/engagement" className="hover:text-accent transition duration-300">
            Engangement
          </Link>
          <Link to="/feedback" className="hover:text-accent transition duration-300">
           Feedback
          </Link>
        </div>

        {/* Newsletter Subscription */}
        <div className="lg:w-1/3">
          <h4 className="text-md font-bold">Subscribe to Our Newsletter</h4>
          <form className="mt-2 flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-secondary bg-white rounded-l-md outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="bg-accent px-4 py-2 rounded-r-md text-white hover:bg-primary transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center lg:justify-end space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition duration-300">
          <FaFacebook size={18} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition duration-300">
          <FaTwitter size={18} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition duration-300">
          <FaInstagram size={18} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition duration-300">
          <FaLinkedin size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

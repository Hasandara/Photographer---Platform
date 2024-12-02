import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/header/logo.png'; // Ensure the logo path is correct
import MobileNav from './MobileNav'; // Import MobileNav component

const Header = () => {
  return (
    <header className="bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[120px] lg:h-[160px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo and Stylish Name */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-20 lg:h-32" />
          </Link>
          <span className="text-3xl lg:text-5xl font-bold text-gray-800 font-dancing">
            Photo Heaven
          </span>
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            <li>
              <Link to="/about" className="text-gray-800 hover:text-gray-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-gray-800 hover:text-gray-500">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-800 hover:text-gray-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;

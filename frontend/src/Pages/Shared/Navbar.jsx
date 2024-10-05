import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let closeDropdownTimeout = null;

  // Dropdown handlers for desktop
  const openServicesDropdown = () => {
    clearTimeout(closeDropdownTimeout);
    setIsServicesDropdownOpen(true);
  };

  const closeServicesDropdown = () => {
    closeDropdownTimeout = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 200);
  };

  return (
    <div className="navbar bg-[#264367] text-white flex justify-between items-center p-4 lg:p-6">
      {/* Left Side for Desktop */}
      <div className="navbar-start hidden lg:block">
        <a className="lg:text-xl text-xs">Courier Service</a>
      </div>

      {/* Center Menu for Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">Home</a></li>
          <li
            onMouseEnter={openServicesDropdown}
            onMouseLeave={closeServicesDropdown}
            className="relative"
          >
            <a href="#" className="block py-2">
              Services
            </a>
            {isServicesDropdownOpen && (
              <div className="absolute bg-gray-700 block text-white rounded-md shadow-lg mt-8 z-20 w-32">
                <a href="#" className="block px-4 py-2">Services1</a>
                <a href="#" className="block px-4 py-2">Services2</a>
              </div>
            )}
          </li>
          <li><a href="#">Branches</a></li>
        </ul>
      </div>

      {/* Center Title for Mobile */}
      <div className="navbar-center ml-32 lg:hidden">
        <h3 className="text-xs font-semibold">Courier Service</h3>
      </div>

      {/* Right Side with Dropdown for Mobile */}
      <div className="navbar-end lg:hidden">
        <button
          className="text-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <RxHamburgerMenu size={24} />
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-12 right-0 w-40 bg-gray-800 rounded-lg shadow-lg z-10">
            <ul className="menu p-2">
              <li><a href="#">Home</a></li>
              <li>
                <div className="relative">
                  <a
                    href="#"
                    className="block py-2"
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  >
                    Services
                  </a>
                  {isServicesDropdownOpen && (
                    <div className="bg-gray-700 text-white rounded-md shadow-lg mt-2">
                      <a href="#" className="block px-4 py-2">Services1</a>
                      <a href="#" className="block px-4 py-2">Services2</a>
                    </div>
                  )}
                </div>
              </li>
              <li><a href="#">Branches</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

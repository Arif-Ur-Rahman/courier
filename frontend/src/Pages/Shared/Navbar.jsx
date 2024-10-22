import React, { useContext, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const {user, logout} = useContext(AuthContext);
  const navigate = useNavigate();
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
  // .........logout
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="navbar bg-black text-white flex justify-between items-center p-4 lg:p-6">
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
              <div className="absolute bg-black block text-white rounded-md shadow-lg mt-8 z-20 w-32">
                <a href="#" className="block px-4 py-2">Services1</a>
                <a href="#" className="block px-4 py-2">Services2</a>
              </div>
            )}
          </li>
          <li><a href="#">Branches</a></li>
        </ul>
         {/* Conditional Rendering Based on Authentication State */}
         {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle flex items-center gap-2"
              >
                <span className="text-white font-bold">{user.username}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="mt-2 p-2 shadow menu menu-compact dropdown-content bg-black text-white rounded-box w-52"
              >
                <li>
                  <Link to="/userboard/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="w-full text-left">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
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
                    <div className="bg-black text-white rounded-md shadow-lg mt-2">
                      <a href="#" className="block px-4 py-2">Services1</a>
                      <a href="#" className="block px-4 py-2">Services2</a>
                    </div>
                  )}
                </div>
              </li>
              <li><a href="#">Branches</a></li>
               {/* Conditional Rendering Based on Authentication State */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle flex items-center gap-2"
              >
                <span className="text-white font-bold">{user.username}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="mt-2 p-2 shadow menu menu-compact dropdown-content bg-black rounded-box w-52"
              >
                <li>
                  <Link to="/userboard/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="w-full text-left">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
             ""
          )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

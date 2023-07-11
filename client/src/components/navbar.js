import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import Logo from "./navLogo.js";
import Auth from "../utils/auth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  

  return (
    <div className="w-full font-gilroy">
      <nav className="bg-grass h-20 md:h-28 flex items-center justify-between">
        <div className="flex justify-between">
          <button
            className="lg:hidden md:hidden text-white text-3xl mx-4"
            onClick={handleMenuToggle}
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
          <div className="flex ml-8 md:ml-6">
            <Link to="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <ul className="flex">
            {Auth.loggedIn() ? (
                  <li
                    className="text-xl lg:text-2xl md:text-base hidden md:block text-white mx-3 hover:cursor-pointer transition-transform transform hover:scale-110"
                    onClick={logout}
                  >
                    Logout
                  </li>
            ) : (
              <>
                <Link to="/buyerlogin">
                  <li className="text-xl lg:text-2xl md:text-base hidden md:block text-white mx-3 transition-transform transform hover:scale-110">
                    Login
                  </li>
                </Link>
                <Link to="/signupintro">
                  <li className="text-xl lg:text-2xl md:text-base hidden md:block text-white mx-3 transition-transform transform hover:scale-110">
                    Sign-Up
                  </li>
                </Link>
              </>
            )}
            <Link to="/shop">
              <li className="text-xl lg:text-2xl md:text-base hidden md:block text-white mx-3 transition-transform transform hover:scale-110">
                Shop
              </li>
            </Link>
          </ul>
          <Link to="/cart">
            <FiShoppingCart className="text-white text-3xl md:text-4xl mx-9 transition-transform transform hover:scale-110" />
          </Link>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="bg-gray-800 text-white px-2 py-3">
          {Auth.loggedIn() ? (
            <span
              className="block py-2 px-4 text-sm hover:bg-gray-700"
              onClick={logout}
            >
              Logout
            </span>
          ) : (
            <>
              <Link to="/buyerlogin">
                <span className="block py-2 px-4 text-sm hover:bg-gray-700">
                  Login
                </span>
              </Link>
              <Link to="/signupintro">
                <span className="block py-2 px-4 text-sm hover:bg-gray-700">
                  Sign-Up
                </span>
              </Link>
              <Link to="/shop">
                <span className="block py-2 px-4 text-sm hover:bg-gray-700">
                  Shop
                </span>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;

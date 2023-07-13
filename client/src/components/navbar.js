import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { CartContext } from "./cartcontext.js";
import Logo from "./navLogo.js";
import Auth from "../utils/auth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItemsCount } = useContext(CartContext);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const userRole = Auth.getUserRole();

  

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
              <>
                <li
                  className="text-xl lg:text-2xl md:text-base hidden md:block text-white mx-3 hover:cursor-pointer transition-transform transform hover:scale-110"
                  onClick={logout}
                >
                  Logout
                </li>
                {userRole === "owner" && (
                  <Link to="/dashboard">
                    <li className="text-xl lg:text-2xl md:text-base hidden md:block text-white mx-3 transition-transform transform hover:scale-110">
                      Dashboard
                    </li>
                  </Link>
                )}
              </>
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
              <Link to="/welcomescreen">
                <li className="text-xl lg:text-2xl md:text-base hidden md:block text-white mx-3 transition-transform transform hover:scale-110">
                  Market
                </li>
              </Link>
          </ul>
          <Link to="/cart">
              <div className="relative transition-transform transform hover:scale-110">
                <FiShoppingCart className="text-white text-3xl md:text-4xl mx-9" />
                {cartItemsCount > 0 && (
                  <div className="absolute top-0 right-7 -mt-2 -mr-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    {cartItemsCount}
                  </div>
                )}
              </div>
          </Link>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="bg-gray-800 text-white px-2 py-3">
          {Auth.loggedIn() ? (
            <>
              <span
                className="block py-2 px-4 text-sm hover:bg-gray-700"
                onClick={logout}
              >
                Logout
              </span>
              {userRole === "owner" && (
                <Link to="/dashboard">
                  <span className="block py-2 px-4 text-sm hover:bg-gray-700">
                    Dashboard
                  </span>
                </Link>
              )}
              <Link to="/shop">
                <span className="block py-2 px-4 text-sm hover:bg-gray-700">
                  Shop
                </span>
              </Link>
              <Link to="/welcomescreen">
                <span className="block py-2 px-4 text-sm hover:bg-gray-700">
                  Market
                </span>
              </Link>
            </>
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
              <Link to="/welcomescreen">
                <span className="block py-2 px-4 text-sm hover:bg-gray-700">
                  Market
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

import { useState, useEffect, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assets } from "../assets/assets";
// awesomeFont
import {
  faMagnifyingGlass,
  faUser,
  faBagShopping,
  faHouse,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../context/ShopContext";

export default function Header() {
  const [visible, setVisible] = useState(false);

  const { setShowSearch, showSearch, getCartCount } = useContext(ShopContext);

  const location = useLocation();

  return (
    <>
      <header className="bg-white pt-6">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          {/* Home link */}
          <NavLink className="block text-teal-600" to="/">
            {/* <FontAwesomeIcon
              icon={faHouse}
              className="text-[30px] sm:text-base"
            /> */}
            <img src={assets.logo_icon} className="h-14" alt="" />
            <span className="sr-only">Home</span>
          </NavLink>
          {/* Shop & About & Contact*/}
          <div className="flex flex-1 items-center justify-end sm:justify-between">
            <nav aria-label="Global" className="hidden sm:block">
              <ul className="flex items-center gap-6 text-sm">
                {/* header items */}

                <NavLink
                  className="text-gray-500  transition hover:text-gray-500/75 flex flex-col items-center"
                  to="/shop"
                >
                  Shop
                  <hr className="w-2/4 border-none h-[1.5px] bg-gray-500 transition hidden" />
                </NavLink>

                <NavLink
                  className="text-gray-500  transition hover:text-gray-500/75 flex flex-col items-center"
                  to="/about"
                >
                  {" "}
                  About{" "}
                  <hr className="w-2/4 border-none h-[1.5px] bg-gray-500 transition hidden" />
                </NavLink>

                <NavLink
                  className="text-gray-500  transition hover:text-gray-500/75 flex flex-col items-center"
                  to="/contact"
                >
                  {" "}
                  Contact{" "}
                  <hr className="w-2/4 border-none h-[1.5px] bg-gray-500 transition hidden" />
                </NavLink>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-7 hidden">
                {/* Search */}

                <FontAwesomeIcon
                  onClick={() => setShowSearch(!showSearch)}
                  icon={faMagnifyingGlass}
                  className={`fa-lg ${
                    location.pathname === "/shop" ? "cursor-pointer" : ""
                  }`}
                />

                {/* Profile */}
                <div className="group relative">
                  <FontAwesomeIcon icon={faUser} className="fa-lg" />
                  <div className="group-hover:block hidden absolute dropdown-menu right-0 top-2 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                      <p className="cursor-pointer hover:text-black hover:underline">
                        My Profile
                      </p>
                      <p className="cursor-pointer hover:text-black hover:underline">
                        Orders
                      </p>
                      <p className="cursor-pointer hover:text-black hover:underline">
                        Logout
                      </p>
                    </div>
                  </div>
                </div>

                {/* shopping cart */}
                <Link to="/cart" className="relative">
                  <FontAwesomeIcon icon={faBagShopping} className="fa-lg" />
                  <p className="absolute right-[-6px] bottom-[-6px] w-4 text-center leading-4 bg-teal-400 text-black aspect-square rounded-full text-[8px]">
                    {getCartCount()}
                  </p>
                </Link>
              </div>

              {/* small screen ... */}
              <button
                onClick={() => {
                  setVisible(true);
                }}
                className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 sm:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* side bar menu */}
          <div
            className={`border-l border-gray-200 fixed top-0 right-0 h-screen z-50 bg-white overflow-hidden transition-all duration-300 ${
              visible ? "w-3/4 sm:w-1/3 p-2" : "w-0 p-0"
            }`}
          >
            <div className="flex flex-col text-gray-600">
              <div
                onClick={() => {
                  setVisible(false);
                }}
                className="flex items-center gap-4 p-3 cursor-pointer"
              >
                <FontAwesomeIcon icon={faAngleLeft} />
                <p>Back</p>
              </div>
              <NavLink
                onClick={() => {
                  setVisible(false);
                }}
                className="py-2 pl-6 border-t border-gray-200"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => {
                  setVisible(false);
                }}
                className="py-2 pl-6 border-t border-gray-200"
                to="/shop"
              >
                Shop
              </NavLink>
              <NavLink
                onClick={() => {
                  setVisible(false);
                }}
                className="py-2 pl-6 border-t border-gray-200"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                onClick={() => {
                  setVisible(false);
                }}
                className="py-2 pl-6 border-t border-b border-gray-200"
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

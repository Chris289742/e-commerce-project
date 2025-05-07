import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { assets } from "../assets/assets";

export const Dropdown = ({ onChange, currentSort }) => {
  const [dropdown, setDropdown] = useState(false);
  // const [currentSort, setCurrentSort] = useState("Sort by: Relavent");

  useEffect(() => {
    onChange(currentSort);
  }, [currentSort]);

  return (
    <div className="relative inline-flex mr-5">
      <span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm">
        <button
          type="button"
          className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
        >
          {currentSort}
        </button>

        <button
          onClick={() => {
            setDropdown(!dropdown);
          }}
          type="button"
          className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
          aria-label="Menu"
        >
          <img
            src={assets.dropdown_icon}
            className={`h-3 ${dropdown ? "rotate-90" : ""}`}
          />
        </button>
      </span>

      <div
        role="menu"
        className={`${
          dropdown ? "" : "hidden"
        } absolute end-0 top-12 z-auto w-56 divide-y divide-gray-200 overflow-hidden rounded border border-gray-300 bg-white shadow-sm`}
      >
        <div>
          <a
            href="#"
            className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              onChange("Sort by: High to Low");
              setDropdown(false);
            }}
          >
            Sort by: High to Low
          </a>

          <a
            href="#"
            className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              onChange("Sort by: Low to High");
              setDropdown(false);
            }}
          >
            Sort by: Low to High
          </a>

          <a
            href="#"
            className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              onChange("Sort by: Relavent");
              setDropdown(false);
            }}
          >
            Sort by: Relavent
          </a>
        </div>
      </div>
    </div>
  );
};

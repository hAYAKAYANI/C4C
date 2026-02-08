import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Categories from "./categories";
import SearchComponent from "./search";
import FilterComponent from "./filter";

const Menu = ({ setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex items-center space-x-4">
      {/* Desktop */}
      <div className="hidden md:flex items-center space-x-4">
        <Home navigate={navigate} />
        <About navigate={navigate} />
        <Categories navigate={navigate} />
        <SearchComponent />
        <FilterComponent onFilterChange={setFilters} />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6 text-[#a5668b]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-64 bg-linear-to-r from-white via-[#cbfff9] to-[#fed0cc] shadow-lg rounded-lg p-4 flex flex-col gap-2 md:hidden">
          {/* Wrap each menu item to force alignment */}
          <div className="flex flex-col w-full">
            <div className="w-full">
              <Home
                navigate={navigate}
                close={() => setIsOpen(false)}
                className="w-full text-left block px-3 py-2"
              />
            </div>
            <div className="w-full">
              <About
                navigate={navigate}
                close={() => setIsOpen(false)}
                className="w-full text-left block px-3 py-2"
              />
            </div>
            <div className="w-full">
              <Categories
                navigate={navigate}
                close={() => setIsOpen(false)}
                className="w-full text-left block px-3 py-2"
              />
            </div>
            <div className="w-full">
              <SearchComponent className="w-full px-3 py-2" />
            </div>
            <div className="w-full">
              <FilterComponent className="w-full px-3 py-2" onFilterChange={setFilters} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;

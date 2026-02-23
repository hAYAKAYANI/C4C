// Navbar.jsx
import React, { useState, useEffect } from "react";
import Logo from "./logo";
import Menu from "./menu";

const Navbar = ({ onRegister, filters, setFilters }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(""); // Track active tab

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 shadow-lg transition-colors duration-300 ${
        isScrolled
          ? "bg-white"
          : "bg-gradient-to-r from-[#d47eb357] via-[#cbfff9] to-[#be83a761]"
      }`}
    >
      <div className="mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-20">
          <div className="cursor-pointer">
            <Logo />
          </div>

          <div className="flex-1 flex justify-end items-center gap-4">
            <Menu
              filters={filters}
              setFilters={setFilters}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <button
              onClick={onRegister}
              className="px-4 text-[#69306d] hover:scale-105 duration-200 text-sm md:text-base font-medium border border-[#69306d] rounded-full hover:bg-[#69306d] hover:text-white transition"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

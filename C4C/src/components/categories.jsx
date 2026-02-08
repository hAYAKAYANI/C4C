import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const sectors = [
    { name: "All NGOs", path: "all" }, 
  { name: "Health", path: "health" },
  { name: "Education", path: "education" },
  { name: "Social Welfare", path: "social-welfare" },
  { name: "Environment", path: "environment" },
  { name: "Natural Disaster", path: "disaster" },
  { name: "Food", path: "food" },
  { name: "Animal Welfare", path: "animal-welfare" },
];

const Categories = ({ close }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (path) => {
    navigate(`/sector/${path}`);
    setOpen(false);
    if (close) close(); // Close mobile menu if provided
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-[#a5668b] px-4 py-2 text-sm md:text-base font-medium hover:scale-105 transition rounded-md"
      >
        Sectors
      </button>

      {open && (
        <ul className="absolute top-full left-0 mt-2 w-56 md:w-64 bg-white rounded-lg shadow-xl z-50">
          {sectors.map((sector) => (
            <li
              key={sector.path}
              onClick={() => handleSelect(sector.path)}
              className="px-5 py-3 cursor-pointer hover:bg-[#f9f9f9] text-base md:text-lg transition"
            >
              {sector.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;

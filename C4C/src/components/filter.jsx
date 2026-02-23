import React, { useState, useEffect, useRef } from "react";
import { Filter as FilterIcon } from "lucide-react";

const sectors = [
  "All",
  "Health",
  "Education",
  "Food",
  "Animal Welfare",
  "Environment",
  "Social Welfare",
  "Disaster",
];

const locations = [
  "All",
  "Pakistan",
  "Islamabad",
  "Karachi",
  "Lahore",
  "Peshawar",
  "Jhelum",
];

const FilterComponent = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-[#a5668b] hover:scale-105 transition-transform duration-200 px-3 py-2 rounded-md text-sm md:text-base font-medium"
      >
        <FilterIcon className="w-4 h-4" /> Filter
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-2 w-48 flex flex-col space-y-3 z-10">
          <div>
            <label className="font-semibold text-gray-700">Sector</label>
            <select
              className="w-full mt-1 p-2 border rounded-md"
              value={filters.sector}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  sector: e.target.value,
                }))
              }
            >
              {sectors.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-semibold text-gray-700">Location</label>
            <select
              className="w-full mt-1 p-2 border rounded-md"
              value={filters.location}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  location: e.target.value,
                }))
              }
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() =>
              setFilters({ sector: "All", location: "All" })
            }
            className="bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;

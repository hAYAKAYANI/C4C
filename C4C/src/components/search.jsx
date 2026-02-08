import React, { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ngosData from "./SampleData";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1); // for keyboard nav
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  // Click outside closes suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter suggestions
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    const matches = ngosData.filter((ngo) =>
      ngo.name.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(matches.slice(0, 5));
    setActiveIndex(-1);
  }, [query]);

  const handleSelect = (ngo) => {
    setQuery(ngo.name);
    setSuggestions([]);
    navigate(`/sector/${ngo.sector.toLowerCase().replace(" ", "-")}`, {
      state: { selectedNGO: ngo },
    });
  };

  const handleKeyDown = (e) => {
    if (suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      handleSelect(suggestions[activeIndex]);
    }
  };

  const clearInput = () => setQuery("");

  return (
    <div className="relative" ref={wrapperRef}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search here..."
        className="pl-9 pr-7 py-1 mt-1 text-sm border w-40 border-[#a5668b] rounded-full focus:outline-none focus:ring-2 focus:ring-[#a5668b]"
      />
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-[#a5668b] w-5 h-5" />
      {query && (
        <X
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 cursor-pointer"
          onClick={clearInput}
        />
      )}

      {suggestions.length > 0 && (
        <ul className="absolute z-50 mt-1 w-40 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {suggestions.map((ngo, idx) => (
            <li
              key={ngo.id}
              className={`px-4 py-2 cursor-pointer ${
                idx === activeIndex ? "bg-[#a5668b] text-white" : ""
              }`}
              onClick={() => handleSelect(ngo)}
              onMouseEnter={() => setActiveIndex(idx)}
            >
              {ngo.name} — {ngo.sector}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;

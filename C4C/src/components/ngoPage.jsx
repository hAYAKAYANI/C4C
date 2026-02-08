import React, { useState, useEffect } from "react";
import FilterComponent from "./Filter"; // file name stays Filter.jsx
import NGOList from "./NGOList";

const NGOPage = () => {
  const [filters, setFilters] = useState({ sector: "All", location: "All" });
  const [ngos, setNgos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/ngos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch NGOs");
        return res.json();
      })
      .then((data) => setNgos(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="space-y-6">
      <FilterComponent filters={filters} setFilters={setFilters} />
      <NGOList ngos={ngos} filters={filters} error={error} />
    </div>
  );
};

export default NGOPage;

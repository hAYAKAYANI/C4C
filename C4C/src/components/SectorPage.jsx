import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import NGOCard from "./NGOCard";

const SectorPage = ({ filters, setFilters }) => {
  const { sector } = useParams();
  const locationHook = useLocation();
  const selectedNGO = locationHook.state?.selectedNGO;

  const [ngos, setNgos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sectorParam = sector === "all" ? "All" : sector.replace("-", " ");

  // 🔗 Fetch NGOs from backend
  useEffect(() => {
    setLoading(true);
    setError(null);

    const query = new URLSearchParams({
      sector: sectorParam,
      location: filters.location
    }).toString();

    fetch(`http://localhost:5000/api/ngos?${query}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch NGOs");
        return res.json();
      })
      .then((data) => {
        let finalData = data;

        // Put searched NGO on top
        if (selectedNGO) {
          finalData = [
            selectedNGO,
            ...data.filter((n) => n._id !== selectedNGO._id)
          ];
        }

        setNgos(finalData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [sectorParam, filters.location, selectedNGO]);

  // 🌀 LOADING
  if (loading) {
    return (
      <div className="p-6 md:p-12">
        <h1 className="text-3xl font-bold mb-6 capitalize">
          {sectorParam === "All" ? "All NGOs" : `${sectorParam} NGOs`}
        </h1>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#a5668b]"></div>
        </div>
      </div>
    );
  }

  // ❌ ERROR
  if (error) {
    return (
      <div className="p-6 md:p-12">
        <h1 className="text-3xl font-bold mb-6 capitalize">
          {sectorParam === "All" ? "All NGOs" : `${sectorParam} NGOs`}
        </h1>
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {sectorParam === "All" ? "All NGOs" : `${sectorParam} NGOs`}
      </h1>

      {/* Selected NGO Info */}
      {selectedNGO && (
        <p className="mb-4 text-[#a5668b]">
          Showing results for <strong>{selectedNGO.name}</strong>
        </p>
      )}

      {/* Location Filter */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {["All", "Karachi", "Lahore", "Islamabad"].map((loc) => (
          <button
            key={loc}
            className={`px-3 py-1 rounded ${
              filters.location === loc
                ? "bg-[#a5668b] text-white"
                : "bg-gray-200"
            }`}
            onClick={() =>
              setFilters((prev) => ({ ...prev, location: loc }))
            }
          >
            {loc}
          </button>
        ))}
      </div>

      {/* NGO List */}
      {ngos.length === 0 ? (
        <p className="text-gray-500">No NGOs found.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {ngos.map((ngo) => (
            <NGOCard key={ngo._id} ngo={ngo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SectorPage;

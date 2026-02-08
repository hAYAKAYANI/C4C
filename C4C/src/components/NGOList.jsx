import React from "react";
import NGOCard from "./NGOCard";

const NGOList = ({ ngos, filters, error }) => {
  if (error) return <p>{error}</p>;
  if (!ngos.length) return <p>Loading NGOs...</p>;

  const filteredNgos = ngos.filter((ngo) => {
    const sectorMatch =
      filters.sector === "All" || ngo.sector.toLowerCase() === filters.sector.toLowerCase();

    const locationMatch =
      filters.location === "All" ||
      ngo.location.toLowerCase().includes(filters.location.toLowerCase());

    return sectorMatch && locationMatch;
  });

  if (!filteredNgos.length) return <p>No NGOs found 😔</p>;

  return (
    <div className="space-y-4">
      {filteredNgos.map((ngo) => (
        <NGOCard key={ngo._id} ngo={ngo} />
      ))}
    </div>
  );
};

export default NGOList;

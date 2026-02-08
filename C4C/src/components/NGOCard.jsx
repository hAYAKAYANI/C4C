import React from "react";
import Button1 from "./Button1";

const NGOCard = ({ ngo }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-6 md:p-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
      {/* Left Content */}
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-bold text-[#69306d] mb-2">
          {ngo.name}
          {ngo.verified && (
            <span className="ml-2 text-[#ff4c3c] text-base">✔ Verified</span>
          )}
        </h3>

        <p className="text-gray-600 mt-1 mb-4">{ngo.description}</p>

        <div className="mt-2 text-sm md:text-base text-gray-500 flex flex-wrap gap-4">
          <span>📍 {ngo.location}</span>
          <a
            href={ngo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a5668b] underline"
          >
            🌐 Visit Website
          </a>
        </div>
      </div>

      {/* Right Buttons */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-3 mt-4 md:mt-0">
        <Button1 text="Donate Now" link={ngo.website} color="#a5668b" />
        <Button1
          text="Volunteer Now"
          link={ngo.website}
          variant="outline"
          color="#a5668b"
        />
      </div>
    </div>
  );
};

export default NGOCard;

import React from "react";

const CardTwo = ({ icon, sector, count }) => {
  return (
    <div className="w-40  h-40 bg-transparent  p-2 hover:scale-105 transition-transform duration-300 flex flex-row justify-center items-center gap-2">
      <div className="shrink-0 w-12 h-12 rounded-full border-dashed border-2 border-[#a5668b] flex justify-center items-center">
        <div className="text-2xl text-[#a5668b]">
          {icon}
        </div>
      </div>
      <div className="flex flex-col text-left">
        <h3 className="text-md  font-semibold">{sector}</h3>
        <p className="text-[12px] text-gray-400">{count} NGOs</p>
      </div>
    </div>
  );
};

export default CardTwo;

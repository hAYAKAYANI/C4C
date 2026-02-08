import React from "react";

const CardImg = ({ image, text }) => {
  return (
    <div className="group w-72 cursor-pointer">
      
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={text}
          className="w-full h-48 object-cover transition-all duration-300 group-hover:blur-sm group-hover:scale-105"
        />

        {/* Hover Text (shows only on hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40">
          <p className="text-white text-lg font-semibold text-center px-4">
            {text}
          </p>
        </div>
      </div>

      {/* Text Below (hides on hover) */}
      <p
        className="
          mt-3 text-center text-gray-500 font-semibold
          transition-all duration-300
          group-hover:opacity-0 group-hover:invisible
        "
      >
        {text}
      </p>
    </div>
  );
};

export default CardImg;

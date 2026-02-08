
import React, { useState } from "react";

const RSection1 = () => {
  const [scale, setScale] = useState(1);

  const handleKeyDown = (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      setScale(2.5);
    }
  };

  return (
    <div className="flex  justify-center items-center w-full h-full">
      <div className="relative w-64 h-64  bg-transparent flex items-center justify-center">
        
        {/* Heart SVG */}
        <svg
          viewBox="0 0 512 512"
          className="absolute w-full h-full"
          style={{ transform: `scale(${scale})` }}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <path d="M256 464s-192-112-192-272c0-80 56-128 128-128 48 0 80 32 80 32s32-32 80-32c72 0 128 48 128 128 0 160-192 272-192 272z" fill="#ffa69e" />
        </svg>

        {/* Text */}
        <p className="absolute text-amber-50  text-center  font-bold text-2xl leading-snug">
          Make a <br />
          donation <br />
          from the <br />
          heart.
        </p>
      </div>
    </div>
  );
};

export default RSection1;



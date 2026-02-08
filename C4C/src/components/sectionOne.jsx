import React, { useState, useEffect } from "react";
import LSection1 from "./LSection1";

const images = [
  "/src/assets/intro3.png",
  "/src/assets/story1.png",
  "/src/assets/story2.png",
  "/src/assets/mission1.jpeg",
];

const SectionOne = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        w-full relative flex items-center justify-center overflow-hidden
       min-h-[60vh] sm:min-h-[90vh] md:min-h-[calc(100vh-80px)]

      "
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 px-4 md:px-12">
        <LSection1
          h1Color="#f7d6e0"
          pColor="#f7d6e0"
          buttonColor="#ffffff"
        />
      </div>
    </section>
  );
};

export default SectionOne;

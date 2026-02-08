import React from "react";

const About = ({ navigate, close }) => {
  return (
    <button
      onClick={() => {
        navigate("/about");
        close && close();
      }}
      className="text-[#a5668b] hover:scale-105 transition-transform duration-200 px-3 py-2 rounded-md text-sm md:text-base font-medium"
    >
      About
    </button>
  );
};

export default About;

import React from "react";
import Button1 from "./Button1"; 
import { FaHandsHelping, FaSearch, FaShieldAlt, FaHeart } from "react-icons/fa";

const features = [
  {
    icon: <FaSearch />,
    title: "Discover NGOs",
    desc: "Find verified NGOs across Pakistan in one trusted place.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Connect Instantly",
    desc: "Donate, volunteer, or support causes with just a few clicks.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Transparent & Trusted",
    desc: "Clear information that builds confidence and trust.",
  },
  {
    icon: <FaHeart />,
    title: "Create Real Impact",
    desc: "Every action you take helps change lives for the better.",
  },
];

const WhyConnect4Cause = () => {
  return (
    <section className="w-full py-16 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Because Helping Should Be Simple
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Connect4Cause bridges the gap between people who want to help and NGOs
          that need support — all in one trusted platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl text-[#a5668b] mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-14">
          <div className="text-center">
            <h4 className="text-3xl font-bold text-[#a5668b]">350+</h4>
            <p className="text-gray-600 text-sm">NGOs Listed</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-[#a5668b]">6+</h4>
            <p className="text-gray-600 text-sm">Categories</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-[#a5668b]">1</h4>
            <p className="text-gray-600 text-sm">Trusted Platform</p>
          </div>
        </div>

        <p className="mt-10 text-gray-700 italic">
          “No one who wants to help should ever feel lost.”
        </p>

        <div className="mt-8">
          <Button1
            text="Explore NGOs"
            color="#a5668b"
            textColor="#ffffff"
            link="/sector/all"
            variant="outline"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyConnect4Cause;

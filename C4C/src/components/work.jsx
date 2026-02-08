import React from "react";
import { FaSearch, FaClipboardList, FaHandsHelping } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Search NGOs",
    desc: "Search NGOs by cause or location to find the ones that matter to you.",
  },
  {
    icon: <FaClipboardList />,
    title: "Compare & Explore",
    desc: "Compare and explore verified organizations easily and confidently.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Donate or Connect",
    desc: "Donate securely or connect directly to support the cause.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-16 bg-[#f9fafb]">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          How It Works
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl
                         transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl text-[#a5668b] mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import React from "react";
import Button1 from "./button1";
import NgoImage from "../assets/Ngo.png"; 

const HomeSection2 = ({
  buttonColor = "#a5668b",
}) => {
  return (
    <section className="w-full py-19 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-3 md:px-14">

        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Left Image */}
          <div className="w-2/2 md:w-1/3">
            <div className="w-full h-70 md:h-90 rounded-full overflow-hidden">
              <img
                src={NgoImage}
                alt="Connect4Cause NGOs"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">

            <h2 className="text-xl md:text-2xl font-bold text-[#a5668b]">
              WHO WE ARE
            </h2>

            <p className="text-gray-600 text-sm md:text-md  ">
              Connect4Cause brings NGOs, donors, and volunteers together on one powerful platform — making social impact easier, transparent, and accessible for everyone.
            </p>

            <p className="text-gray-600 text-sm md:text-md  ">
              We help individuals discover verified NGOs across various causes
              including education, healthcare, environmental protection, and
              social welfare — all in one place. Whether you want to donate,
              volunteer, or simply learn, Connect4Cause makes meaningful impact
              accessible to everyone.
            </p>

            <div className="flex justify-center md:justify-start">
              <Button1
                text="Explore NGOs"
                 link="/sector/all"
                color={buttonColor}
                variant="outline"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeSection2;

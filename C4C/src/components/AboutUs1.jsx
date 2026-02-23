import React from "react";
import CardImg from "./cardimg";
import education from "../assets/education.png";
import environment from "../assets/environment.png";
import climate from "../assets/climate.png";
import disaster from "../assets/disaster.png";
import social from "../assets/social.png";
import health from "../assets/health.jpg";
import BackButton from "./BackButton";
const AboutUs1 = () => {
  return (
    
    <div className="bg-[#f9f9f9] py-2 ">

      {/* About Us Text */}
      <div className="px-2  text-center ">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-6">
          About Us
        </h1>
    <p className="text-sm md:text-base lg:text-md md:mx-auto px-2 md:px-45 leading-relaxed text-left">
  Connect4Cause is a one-stop platform that brings NGOs across Pakistan
  together in one place. We make it easy to discover organizations by
  cause, understand their impact, and connect with them directly.
  We believe that finding where to help should be simple, transparent,
  and accessible to everyone.
</p>
</div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-10 mt-12">

        <CardImg image={education} text="Empowering minds through quality education." />
        <CardImg image={environment} text="Nature today, future tomorrow." />
        <CardImg image={climate} text="Protecting the planet for future generations." />
        <CardImg image={disaster} text="Rapid support when disaster strikes." />
        <CardImg image={social} text="Supporting lives, strengthening communities." />
        <CardImg image={health} text="Care, healing, and hope for all." />

      </div>

    </div>
  );
};

export default AboutUs1;

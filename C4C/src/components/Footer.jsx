import React from "react";
import ChallengeOfTheDay from "./Challange";

import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaHandHoldingHeart,
  FaMagnifyingGlass,
} from "react-icons/fa6";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
<div className="bg-[#602264] text-white px-4 sm:px-6 md:px-18" >
   {/* ================= SECTION 1 ================= */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">

  {/* Logo + Intro side by side */}
  <img
    src={logo}
    alt="Connect4Cause Logo"
    className="h-14 sm:h-16 md:h-20 object-contain hover:scale-105 transition duration-300"
  />

  <p className="text-center sm:text-left text-base sm:text-lg leading-relaxed text-white/80 hover:text-white transition duration-300">
    Connect4Cause is a centralized platform designed to help people
    easily discover verified NGOs across Pakistan and connect with
    causes that truly make a difference.
  </p>
</div>


      <hr className="border-white/30" />

      {/* ================= SECTION 2 ================= */}
      <div className="max-w-7xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 gap-10">

        {/* OUR IMPACT */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">OUR IMPACT</h2>
          <ul className="space-y-2 text-white/80">
            <li className="hover:text-white transition">🌱 350+ NGOs Listed</li>
            <li className="hover:text-white transition">📂 7+ Cause Categories</li>
            <li className="hover:text-white transition">🏙️ Serving in 30+ Cities</li>
           <li className="hover:text-white transition">🌍 Coverage Across Pakistan</li>

          </ul>
        </div>
<div>
  <ChallengeOfTheDay />
</div>



      </div>

      <hr className="border-white/30" />

      {/* ================= SECTION 3 ================= */}
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">

        {/* Social Media */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Connect With Us</h2>
          <div className="flex justify-center sm:justify-start gap-6 text-2xl">
            <a href="https://instagram.com" target="_blank" className="text-white/70 hover:text-white hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="mailto:connect4cause@gmail.com" className="text-white/70 hover:text-white hover:scale-110 transition">
              <FaEnvelope />
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-white/70 hover:text-white hover:scale-110 transition">
              <FaLinkedin />
            </a>
            <a href="https://x.com" target="_blank" className="text-white/70 hover:text-white hover:scale-110 transition">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Get Involved */}
        <div className="text-center sm:text-right">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 flex justify-center sm:justify-end items-center gap-2">
            <FaHandHoldingHeart /> Get Involved
          </h2>
          <ul className="space-y-2 text-white/80">
            
            <li className="hover:text-white transition cursor-pointer">Become a Volunteer</li>
            <li className="hover:text-white transition cursor-pointer">Partner With Us</li>
            <li className="hover:text-white transition cursor-pointer">Contact Support</li>
          </ul>
        </div>
      </div>
      
</div>
      {/* ================= BOTTOM BAR ================= */}
      <div className="bg-[#69306d] text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} Connect4Cause — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import CardTwo from "./cardtwo";
import {
  FaGraduationCap,
  FaHeart,
  FaHandsHelping,
  FaLeaf,
  FaHouseDamage,
  FaPaw,
  FaUtensils,
} from "react-icons/fa";

const SectionTwo = () => {
  return (
    <div className="w-full pt-6 pb-0 bg-[#f4f4f4d7] relative">
      <h1 className="text-2xl font-bold text-center mb-1 text-[#2f2c2e]">
        NGO Distribution by Sector
      </h1>

      {/* Sliding container */}
      <div className="overflow-hidden group">
        <div className="flex w-max gap-7 animate-slide group-hover:pause">

          {/* Original set */}
          <CardTwo icon={<FaGraduationCap />} sector="Education" count="4,000+" />
          <CardTwo icon={<FaHeart />} sector="Health" count="5,000+" />
          <CardTwo icon={<FaHandsHelping />} sector="Social Welfare" count="3,000+" />
          <CardTwo icon={<FaLeaf />} sector="Environment" count="1,500+" />
          <CardTwo icon={<FaHouseDamage />} sector="Disaster Relief" count="2,000+" />
          <CardTwo icon={<FaPaw />} sector="Animal Welfare" count="1000+" />
          <CardTwo icon={<FaUtensils />} sector="Food Distribution" count="1000+" />


          {/* Duplicate set for smooth infinite scroll */}
          <CardTwo icon={<FaGraduationCap />} sector="Education" count="4,000+" />
          <CardTwo icon={<FaHeart />} sector="Health" count="5,000+" />
          <CardTwo icon={<FaHandsHelping />} sector="Social Welfare" count="3,000+" />
          <CardTwo icon={<FaLeaf />} sector="Environment" count="1,500+" />
          <CardTwo icon={<FaHouseDamage />} sector="Disaster Relief" count="2,000+" />
        <CardTwo icon={<FaPaw />} sector="Animal Welfare" count="1000+" />
          <CardTwo icon={<FaUtensils />} sector="Food Distribution" count="1000+" />


          {/* Another duplicate set */}
          <CardTwo icon={<FaGraduationCap />} sector="Education" count="4,000+" />
          <CardTwo icon={<FaHeart />} sector="Health" count="5,000+" />
          <CardTwo icon={<FaHandsHelping />} sector="Social Welfare" count="3,000+" />
          <CardTwo icon={<FaLeaf />} sector="Environment" count="1,500+" />
          <CardTwo icon={<FaHouseDamage />} sector="Disaster Relief" count="2,000+" />
          <CardTwo icon={<FaPaw />} sector="Animal Welfare" count="1000+" />
          <CardTwo icon={<FaUtensils />} sector="Food Distribution" count="1000+" />

        </div>
      </div>
    </div>
  );
};

export default SectionTwo;

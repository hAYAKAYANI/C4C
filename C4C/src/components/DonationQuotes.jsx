import React, { useState } from "react";

const donationQuotes = [
  {
    type: "Ayat",
    text: "The example of those who spend their wealth in the way of Allah is like a seed of grain that sprouts seven ears; in every ear there are a hundred grains. Allah multiplies for whom He wills.",
    reference: "Surah Al-Baqarah 2:261",
  },
  {
    type: "Ayat",
    text: "And whatever you spend in charity or whatever vow you make, Allah knows it.",
    reference: "Surah Al-Baqarah 2:270",
  },
  {
    type: "Ayat",
    text: "Those who give in charity, men and women, and lend Allah a goodly loan, it will be multiplied for them.",
    reference: "Surah Al-Hadid 57:18",
  },
  {
    type: "Ayat",
    text: "Do not withhold charity from those to whom it is due.",
    reference: "Surah Al-Baqarah 2:267",
  },
  {
    type: "Ayat",
    text: "Kind words and charity are better than heaps of gold.",
    reference: "Surah Al-Baqarah 2:264",
  },
  {
    type: "Ayat",
    text: "Spend in the cause of Allah, and do not throw yourselves into destruction.",
    reference: "Surah Al-Baqarah 2:195",
  },
  {
    type: "Ayat",
    text: "Give charity without delay, for it stands against calamities.",
    reference: "Surah Al-Baqarah 2:271",
  },
  {
    type: "Ayat",
    text: "The believers are those who spend their wealth, secretly and openly.",
    reference: "Surah Al-Baqarah 2:274",
  },
  {
    type: "Hadith",
    text: "The Prophet ﷺ said: 'The best charity is that given when one is in need and does not intend to show off.'",
    reference: "Sahih Bukhari",
  },
  {
    type: "Hadith",
    text: "The Prophet ﷺ said: 'Charity does not decrease wealth.'",
    reference: "Sahih Muslim",
  },
  {
    type: "Hadith",
    text: "The Prophet ﷺ said: 'Give charity without delay, for it stands against calamities.'",
    reference: "Tirmidhi",
  },
];

const DonationQuotes = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? donationQuotes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === donationQuotes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 bg-[#f9f9f9] rounded-xl shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#a5668b]">
        Ayats & Hadith on Charity
      </h2>

      {/* Quote Card */}
      <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300">
        <p className="text-gray-700 italic text-base md:text-lg leading-relaxed mb-4">
          "{donationQuotes[index].text}"
        </p>
        <p className="text-right text-gray-500 text-sm md:text-base">
          — {donationQuotes[index].reference}
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {donationQuotes.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === index ? "bg-[#a5668b]" : "bg-gray-300"
            }`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

      {/* Optional prev/next buttons */}
      <div className="flex justify-between mt-4">
        <button
          className="bg-[#a5668b] text-white px-4 py-2 rounded hover:bg-[#8541a0] transition"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="bg-[#a5668b] text-white px-4 py-2 rounded hover:bg-[#8541a0] transition"
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      <p className="mt-4 text-center text-gray-500 text-sm">
        Swipe or use dots/buttons to see next Ayat or Hadith
      </p>
    </div>
  );
};

export default DonationQuotes;

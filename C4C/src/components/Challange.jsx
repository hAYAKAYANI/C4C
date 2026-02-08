import React, { useState, useEffect } from "react";

const challenges = [
  "Plant a tree in your community",
  "Donate 1kg of food to someone in need",
  "Spend 1 hour volunteering online or offline",
  "Share an awareness post on social media",
  "Collect clothes and donate to a local shelter",
  "Help a neighbor or someone in need today",
  "Write a motivational note for someone and give it to them"
];

// Random starting number of people accepted
const randomAccepted = () => Math.floor(Math.random() * 500) + 10;

const ChallengeOfTheDay = () => {
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [acceptedCount, setAcceptedCount] = useState(randomAccepted());
  const [accepted, setAccepted] = useState(false);

  // Rotate challenge based on day
  useEffect(() => {
    const now = new Date();
    const dayIndex = Math.floor(
      (now.getTime() / (1000 * 60 * 60 * 24)) % challenges.length
    );
    setChallengeIndex(dayIndex);
    setAcceptedCount(randomAccepted());
  }, []);

  const handleAccept = () => {
    setAcceptedCount((prev) => prev + 1);
    setAccepted(true);
    // Optionally, add API call here to track acceptance
  };

  return (
    <div className="bg-[#69306d] p-6 sm:p-8 rounded-lg shadow-inner text-white">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 flex justify-center items-center gap-2">
        💪 Challenge of the Day
      </h2>

      <div className="bg-[#602264] p-4 rounded-lg shadow-md mb-4">
        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
          {challenges[challengeIndex]}
        </p>
      </div>

      {!accepted ? (
        <button
          onClick={handleAccept}
          className="w-full sm:w-auto bg-white/20 text-white py-2 px-4 rounded hover:bg-white/40 transition mb-2"
        >
          Accept Challenge
        </button>
      ) : (
        <p className="text-center text-white/90 text-sm sm:text-base font-semibold">
          {acceptedCount} people have accepted the challenge 🎉
        </p>
      )}
    </div>
  );
};

export default ChallengeOfTheDay;

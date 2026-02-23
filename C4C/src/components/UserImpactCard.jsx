import React, { useEffect, useState } from "react";
import Button1 from "./Button1";
import { FaChevronDown } from "react-icons/fa";

const UserImpactSection = () => {
  const [user, setUser] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const cards = [
    {
      title: "Donate",
      content:
        "Your contribution, no matter how small, can provide food, shelter, education, and hope to those who need it most. Each donation helps a cause flourish and bring meaningful change.",
    },
    {
      title: "Volunteer",
      content:
        "Give your time and skills to support meaningful causes and create lasting impact within communities. Volunteering connects you directly with those in need and strengthens communities.",
    },
    {
      title: "Spread Awareness",
      content:
        "Sharing information can be just as powerful as donating. Awareness builds momentum for change. Inspire others, spark conversations, and help causes reach more people.",
    },
  ];

  return (
    <section className="w-full py-12 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-2">
        {/* LEFT/RIGHT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-14">
          {/* LEFT - Welcome */}
          <div className="p-12 flex flex-col justify-center items-center text-center">
            {user ? (
              <>
                <h2
                  className="text-3xl md:text-4xl font-extrabold mb-6"
                  style={{ color: "#a5668b" }}
                >
                  Welcome back, {user.name}
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-lg">
                  Thank you for being part of Connect4Cause. Every action you take —
                  whether donating, volunteering, or spreading awareness —
                  contributes to building a more compassionate and connected society.
                  Your involvement truly amplifies the impact of this community. Together, we can make
                  meaningful change that touches countless lives and inspires others to act.
                </p>
              </>
            ) : (
              <>
                <h2
                  className="text-3xl md:text-4xl font-extrabold mb-6"
                  style={{ color: "#a5668b" }}
                >
                  Play With Purpose
                </h2>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-lg">
                  Join Connect4Cause to turn simple actions into meaningful impact.
                  When you connect, you become part of a community that believes
                  helping should be simple, transparent, and powerful. Engage with causes,
                  see results, and feel the difference you make every day. Be the change you want
                  to see, and inspire a ripple effect that empowers others.
                </p>
              </>
            )}
          </div>

          {/* RIGHT - Interactive Cards */}
          <div className="space-y-6 p-4">
            {cards.map((item, index) => {
              const isActive = activeCard === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveCard(isActive ? null : index)}
                  className="p-6 cursor-pointer rounded-2xl transition-all duration-500 shadow-md bg-white"
                >
                  <div className="flex justify-between items-center">
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: "#a5668b" }}
                    >
                      {item.title}
                    </h3>
                    <FaChevronDown
                      className={`transition-transform duration-300 text-[#a5668b]`}
                      style={{ transform: isActive ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </div>

                  <p
                    className="text-gray-700 text-sm mt-2 overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: isActive ? "220px" : "0px",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* BUTTONS */}
         <div className="flex justify-center  gap-7">
        <Button1
                text="Let's Donate"
                 link="/sector/all"
                color="#a5668b"
                variant="outline"
              />
           <div className="flex justify-center ">
              <Button1
                text="Let's Volunteer"
                 link="/sector/all"
                color="#a5668b"
                variant="outline"
              />
            </div>
        
        </div>
      </div>
    </section>
  );
};

export default UserImpactSection;
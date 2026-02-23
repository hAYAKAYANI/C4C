import React from "react";
import LSection1 from "./LSection1";

const SectionHome = () => {
  return (
    <section
      className="
        w-full relative flex items-center justify-center shadow-lg
        bg-gradient-to-r from-[#be83a761] via-[#cbfff9] to-[#be83a761]
        h-96 md:min-h-[calc(100vh-80px)]
      "
    >
      <div className="relative z-10 px-4 md:px-12">
        <LSection1
          h1Color="#a5668b"
          pColor="#a5668b"
          buttonColor="#a5668b"
        />
      </div>
    </section>
  );
};

export default SectionHome;

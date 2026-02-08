import React from "react";
import Button1 from "./button1";
import { Link } from "react-router-dom";


const LSection1 = ({
  h1Color = "#000000",
  pColor = "#000000",
  buttonColor = "#ffa69e",
}) => {
  return (
    <div className="space-y-4 max-w-3xl mx-auto md:mx-0 text-center md:text-left">

      <h1
        className="text-4xl sm:text-5xl md:text-8xl font-bold"
        style={{ color: h1Color, fontFamily: "'Dancing Script', cursive" }}
      >
        Connect4Cause
      </h1>

      <p
        className="text-lg sm:text-xl justify-self-center md:text-2xl leading-relaxed"
        style={{ color: pColor, fontFamily: "'Dancing Script', cursive" }}
      >
        Connecting Hearts to Causes That Matter
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-self-center md:justify-start sm:w-auto">

        <div className="w-full sm:w-auto">
          <Button1
            text="Donate Now"
             link="/sector/all"
            color={buttonColor}
            variant="outline"
          />
        </div>

        <div className="w-full sm:w-auto">
          <Button1
            text="Volunteer Now"
             link="/sector/all"
            color={buttonColor}
            variant="outline"
          />
        </div>

      </div>
    </div>
  );
};

export default LSection1;

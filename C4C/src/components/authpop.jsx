import React from "react";
import { FiX } from "react-icons/fi";
import Login from "./login";
import Signup from "./signup";
import Button1 from "./Button1";

const AuthPopup = ({ type, onClose, switchTo }) => {
  return ( 
    <div className="fixed  inset-0  z-50 flex items-center justify-center px-4 sm:px-6">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

      <div className="relative w-full  mt-7 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
        <FiX
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl cursor-pointer hover:scale-110 transition"
        />

        {type === "login" && <Login isModal switchTo={switchTo} />}
        {type === "signup" && <Signup isModal switchTo={switchTo} />}
        {type === "guest" && (
          <div className="p-8 rounded-3xl bg-linear-to-br from-[#69306d] via-[#a66dd4] to-[#ffa69e] shadow-2xl text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
              Guest Mode
            </h2>
            <p className="mb-6">
              You are now browsing as a guest. You can scroll and explore the website.
            </p>
            <Button1
              text="Continue as Guest"
              color="#69306d"
              textColor="#fff"
              onClick={onClose}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPopup;

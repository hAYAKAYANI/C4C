import React from "react";
import { FiX } from "react-icons/fi";
import Login from "./Login";
import Signup from "./Signup";

const AuthPopup = ({ type = "signup", onClose, switchTo }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-lg">
        <FiX
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
        />

        {type === "login" && (
          <Login isModal switchTo={switchTo} onClose={onClose} />
        )}

        {type === "signup" && (
          <Signup isModal switchTo={switchTo} onClose={onClose} />
        )}
      </div>
    </div>
  );
};

export default AuthPopup;
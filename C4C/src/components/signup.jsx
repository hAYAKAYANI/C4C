import React, { useState } from "react";
import Button1 from "./Button1";
import axios from "axios";

const Signup = ({ isModal = false, switchTo, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      const userData = res.data.user;

      if (userData) {
        // Save registered user
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("sessionUser", JSON.stringify(userData));
        localStorage.setItem("token", res.data.token);
      }

      alert(`Welcome ${userData.name} 💜`);

      if (onClose) onClose();
      if (switchTo) switchTo(null);
    } catch (err) {
      alert(err.response?.data?.msg || "Server error");
    }
  };

  return (
<div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#69306d] via-[#a66dd4] to-[#ffa69e] shadow-2xl w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center mb-2">
        Join Connect4Cause 💜
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="w-full p-3 rounded-xl mb-4 outline-none"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-3 rounded-xl mb-4 outline-none"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full p-3 rounded-xl mb-6 outline-none"
        onChange={handleChange}
      />

      <div className="flex flex-col gap-4 items-center">
        <Button1
          text="Sign Up"
          color="#69306d"
          textColor="#ffffff"
          onClick={handleSubmit}
        />

        {isModal && (
          <>
            <p
              onClick={() => switchTo("login")}
              className="text-white underline cursor-pointer"
            >
              Already have an account? Login
            </p>

            <Button1
              text="Continue as Guest"
              color="#69306d"
              textColor="#fff"
              onClick={() => {
                localStorage.removeItem("sessionUser");
                if (onClose) onClose();
                switchTo(null);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;

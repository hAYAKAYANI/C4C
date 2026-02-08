import React, { useState, useEffect } from "react";
import Button1 from "./Button1";
import axios from "axios";

const Login = ({ isModal = false, switchTo }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [user, setUser] = useState(null);

  // Safe check for already logged-in user
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    }
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);

      const userData = res.data.user;
      if (userData) {
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", res.data.token);
        setUser(userData);
      }

      alert(`Welcome back, ${userData.name}`);

      if (isModal && switchTo) switchTo(null);
    } catch (err) {
      alert(err.response?.data?.msg || "Server error");
    }
  };

  // If already logged in, show message instead of form
  if (user) {
    return (
      <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-linear-to-br from-[#69306d] via-[#a66dd4] to-[#ffa69e] shadow-2xl w-full text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">
          Hello {user.name} 💜
        </h2>
        <p className="text-white/90 mb-4">
          You are already logged in!
        </p>
        {isModal && (
          <Button1
            text="Continue"
            color="#69306d"
            textColor="#fff"
            onClick={() => switchTo(null)}
          />
        )}
      </div>
    );
  }

  // Otherwise show login form
  return (
    <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-linear-to-br from-[#69306d] via-[#a66dd4] to-[#ffa69e] shadow-2xl w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center mb-2">
        Welcome Back 💜
      </h2>
      <p className="text-white/90 text-center mb-6 sm:mb-8 text-sm sm:text-base">
        Login to continue supporting causes
      </p>

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-3 sm:p-4 rounded-xl mb-4 outline-none text-sm sm:text-base"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full p-3 sm:p-4 rounded-xl mb-6 outline-none text-sm sm:text-base"
        onChange={handleChange}
      />

      <div className="flex flex-col gap-4 items-center">
        <Button1 text="Login" color="#69306d" textColor="#ffffff" onClick={handleSubmit} />

        {isModal && (
          <>
            <p
              onClick={() => switchTo("signup")}
              className="text-white text-sm sm:text-base underline cursor-pointer"
            >
              Don’t have an account? Sign up
            </p>

            <Button1
              text="Continue as Guest"
              color="#69306d"
              textColor="#fff"
              onClick={() => switchTo("guest")}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

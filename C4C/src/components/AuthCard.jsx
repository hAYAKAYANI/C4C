import React from "react";

const AuthCard = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div
        className="
          w-full
          max-w-sm
          sm:max-w-md
          md:max-w-lg
          lg:max-w-2xl
          xl:max-w-3xl
          rounded-3xl
          p-6 sm:p-8 md:p-10
          bg-gradient-to-br from-[#69306d] via-[#a66dd4] to-[#ffa69e]
          shadow-2xl
        "
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center mb-2">
          {title}
        </h2>

        <p className="text-white/90 text-center mb-6 sm:mb-8 text-sm sm:text-base">
          {subtitle}
        </p>

        {children}
      </div>
    </div>
  );
};

export default AuthCard;

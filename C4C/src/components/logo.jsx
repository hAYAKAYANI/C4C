import React from 'react';
import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <div className="flex items-center justify-start">
      <img src={logo} alt="4 Cause Logo" className="w-20 h-16  sm:w-24 sm:h-20 md:w-28 md:h-24 object-contain" />
    </div>
  );
};

export default Logo;
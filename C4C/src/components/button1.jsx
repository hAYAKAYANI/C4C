import React from "react";

const Button1 = ({
  text,
  link = "#",
  color = "#ffa69e",
  textColor,
  variant = "filled",
  onClick,
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    px-4 py-2 text-sm
    sm:px-5 sm:py-3 sm:text-base
    rounded-full
    transition-all duration-300
    hover:scale-95
    active:scale-90
    cursor-pointer
  `;

  let variantClasses = "";
  let style = {};

  if (variant === "filled") {
    style = {
      backgroundColor: color,
      borderColor: color,
      color: textColor || "#ffffff",
    };
  }

  if (variant === "outline") {
    variantClasses = "border-2";
    style = {
      borderColor: color,
      color: color,
    };
  }

  // Determine if link is external
  const isExternal = link && (link.startsWith("http://") || link.startsWith("https://"));

  return (
    <a
      href={link}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
      style={style}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {text}
    </a>
  );
};

export default Button1;

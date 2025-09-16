import React from "react";

export const Button = ({ label = "Click me", onClick, styling }) => {
  return (
    <button className={`${styling}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

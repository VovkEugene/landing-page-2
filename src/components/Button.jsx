import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`${styles} py-4 px-6 rounded-[10px] outline-none font-poppins font-medium text-[18px] text-primary bg-blue-gradient`}
  >
    Get Started
  </button>
);

export default Button;

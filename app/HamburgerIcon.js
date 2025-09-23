import React from "react";

const HamburgerIcon = ({ open, onClick }) => (
  <button
    className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
    aria-label="Toggle navigation menu"
    onClick={onClick}
    type="button"
  >
    <span
      className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${
        open ? "rotate-45 translate-y-2" : ""
      }`}
    ></span>
    <span
      className={`block w-7 h-1 bg-white rounded transition-all duration-300 my-1 ${
        open ? "opacity-0" : ""
      }`}
    ></span>
    <span
      className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${
        open ? "-rotate-45 -translate-y-2" : ""
      }`}
    ></span>
  </button>
);

export default HamburgerIcon;

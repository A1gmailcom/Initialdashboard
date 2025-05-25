import React from "react";

const BoneIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 10.5a2.5 2.5 0 1 1 3.5-3.5l8 8a2.5 2.5 0 1 1-3.5 3.5l-8-8z" />
  </svg>
);

export default BoneIcon;

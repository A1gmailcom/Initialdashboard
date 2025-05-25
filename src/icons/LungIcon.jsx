import React from "react";

const LungIcon = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 12v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6" />
    <path d="M15 6a3 3 0 1 0-6 0v12a3 3 0 0 1-3 3" />
    <path d="M9 18a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3" />
  </svg>
);

export default LungIcon;

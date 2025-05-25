import React from "react";

const ToothIcon = ({ size = 24, color = "currentColor" }) => (
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
    <path d="M12 2c2 0 4 1 5 4s1 6-1 10c-2 4-3 4-4 4s-2 0-4-4c-2-4-2-7-1-10s3-4 5-4z" />
  </svg>
);

export default ToothIcon;

import React from "react";
import "./HamburgerIcon.css";

const HamburgerIcon = ({ isOpen, toggle }) => (
  <button className="hamburger-icon" onClick={toggle}>
    <div className={`hamburger-line ${isOpen ? "open" : ""}`} />
    <div className={`hamburger-line ${isOpen ? "open" : ""}`} />
    <div className={`hamburger-line ${isOpen ? "open" : ""}`} />
  </button>
);

export default HamburgerIcon;

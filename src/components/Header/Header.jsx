import React from "react";
import { SearchIcon, BellIcon } from "../../icons";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="left-header-group">
        <div className="search-bar">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="notification-icon">
          <BellIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;

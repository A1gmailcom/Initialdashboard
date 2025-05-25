import React, { useEffect, useRef } from "react";
import {
  DashboardIcon,
  HistoryIcon,
  CalendarIcon,
  AppointmentsIcon,
  StatisticsIcon,
  ChatIcon,
  SupportIcon,
  SettingsIcon,
} from "../../icons";
import HamburgerIcon from "../HamburgerIcon";
import "./SideNavbar.css";

const SideNavbar = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef();

  const navItems = [
    {
      section: "General",
      items: [
        { icon: <DashboardIcon />, label: "Dashboard" },
        { icon: <HistoryIcon />, label: "History" },
      ],
    },
    {
      section: "",
      items: [
        { icon: <CalendarIcon />, label: "Calendar" },
        { icon: <AppointmentsIcon />, label: "Appointments" },
        { icon: <StatisticsIcon />, label: "Statistics" },
      ],
    },
    {
      section: "Tools",
      items: [
        { icon: <ChatIcon />, label: "Chat" },
        { icon: <SupportIcon />, label: "Support" },
      ],
    },
    { section: "", items: [{ icon: <SettingsIcon />, label: "Settings" }] },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        if (!event.target.closest(".hamburger-icon")) {
          toggleSidebar();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <>
      <HamburgerIcon isOpen={isOpen} toggle={toggleSidebar} />
      <nav ref={sidebarRef} className={`side-navbar ${isOpen ? "open" : ""}`}>
        <div className="nav-header">
          <h2>Healthcare</h2>
        </div>
        <div className="nav-items">
          {navItems.map((group, groupIndex) => (
            <div key={groupIndex} className="nav-group">
              {group.section && (
                <div className="nav-section">{group.section}</div>
              )}
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex} className="nav-item">
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default SideNavbar;

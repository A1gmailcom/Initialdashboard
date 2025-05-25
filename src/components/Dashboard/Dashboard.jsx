import React from "react";
import Header from "../Header/Header.jsx";
import HealthMetrics from "../HealthMetrics/HealthMetrics.jsx";
import Activity from "../Activity/Activity.jsx";
import AppointmentCalendar from "../AppointmentCalendar/AppointmentCalendar.jsx";
import { ChevronDownIcon } from "../../icons";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-header-line">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="week-selector">
          <span>This Week</span>
          <ChevronDownIcon className="chevron-icon" />
        </div>
      </div>
      <div className="dashboard-content-grid">
        <div className="left-dashboard-stack">
          <HealthMetrics />
          <Activity />
        </div>
        <div className="calendar-section">
          <AppointmentCalendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

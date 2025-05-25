import React from "react";
import "./Activity.css";

const Activity = () => {
  return (
    <div className="activity-container">
      <h2 className="activity-title">Activity</h2>
      <p className="activity-subtitle">3 appointments on this week</p>
      <div className="week-days">
        {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;

import React from "react";
import { LungIcon, ToothIcon, BoneIcon } from "../../icons";
import "./HealthMetrics.css";
import skeletonImage from "../../assets/Images/skeleton.jpg";

const HealthMetrics = () => {
  const metrics = [
    {
      title: "Lungs",
      date: "26 Oct. 2021",
      icon: <LungIcon size={40} />,
    },
    {
      title: "Teeth",
      date: "26 Oct. 2021",
      icon: <ToothIcon size={40} />,
    },
    {
      title: "Bone",
      date: "26 Oct. 2021",
      icon: <BoneIcon size={40} />,
    },
  ];

  return (
    <div className="health-metrics-container">
      <div className="skeleton-image">
        <img src={skeletonImage} alt="Skeleton diagram" />
      </div>
      <div className="health-metrics">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-icon">{metric.icon}</div>
            <div className="metric-info">
              <h3 className="metric-title">{metric.title}</h3>
              {metric.date && <p className="metric-date">{metric.date}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthMetrics;

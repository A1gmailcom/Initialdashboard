import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  UserIcon,
} from "../../icons";
import "./AppointmentCalendar.css";

const AppointmentCalendar = () => {
  const weekDays = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const dates = ["25", "26", "27", "28", "29", "30", "31"];
  const timeSlots = [
    ["10:00", "08:00", "12:00", "10:00", "—", "12:00", "12:00"],
    ["11:00", "09:00", "—", "11:00", "14:00", "14:00", "10:00"],
    ["12:00", "10:00", "13:00", "—", "16:00", "15:00", "11:00"],
  ];

  const [selectedDate, setSelectedDate] = useState("26");
  const [selectedTime, setSelectedTime] = useState("09:00");

  const appointments = [
    {
      title: "🦷 Dentist",
      time: "09:00-11:00",
      doctor: "Dr. Cameron Williamson",
    },
    {
      title: "💪 Physiotherapy Appointment",
      time: "11:00-12:00",
      doctor: "Dr. Kevin Djones",
    },
  ];

  const upcoming = [
    {
      day: "On Thursday",
      events: [
        { title: "Health checkup complete 🧪", time: "11:00 AM" },
        { title: "Ophthalmologist 👁️", time: "14:00 PM" },
      ],
    },
    {
      day: "On Saturday",
      events: [
        { title: "Cardiologist ❤️", time: "12:00 AM" },
        { title: "Neurologist 🧑‍⚕️", time: "16:00 PM" },
      ],
    },
  ];

  return (
    <div className="appointment-calendar">
      <div className="right-header-icons-top">
        <div className="icon-button">
          <UserIcon className="header-icon" />
        </div>
        <div className="icon-button">
          <PlusIcon className="header-icon" />
        </div>
      </div>

      <div className="calendar-header">
        <ChevronLeftIcon className="calendar-nav-icon" />
        <div className="calendar-month">October 2021</div>
        <ChevronRightIcon className="calendar-nav-icon" />
      </div>

      <div className="calendar-grid">
        {weekDays.map((day, i) => (
          <div key={i} className="day-header">
            {day}
          </div>
        ))}

        {dates.map((date, i) => (
          <div
            key={i}
            className={`date-cell ${selectedDate === date ? "selected" : ""}`}
            onClick={() => setSelectedDate(date)}
          >
            {date}
          </div>
        ))}

        {timeSlots.map((row, rowIndex) => (
          <div key={rowIndex} className="time-slot-row">
            {row.map((time, i) => (
              <div
                key={i}
                className={`time-slot ${
                  selectedTime === time ? "selected" : ""
                }`}
                onClick={() => time !== "—" && setSelectedTime(time)}
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="appointments-list">
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment-card">
            <div className="appointment-title">{appointment.title}</div>
            <div className="appointment-time">{appointment.time}</div>
            <div className="appointment-doctor">{appointment.doctor}</div>
          </div>
        ))}
      </div>

      <div className="upcoming-schedule">
        <h3 className="upcoming-title">The Upcoming Schedule</h3>
        {upcoming.map((section, idx) => (
          <div key={idx} className="upcoming-day-group">
            <div className="day-label">{section.day}</div>
            <div className="event-row">
              {section.events.map((event, i) => (
                <div key={i} className="event-card">
                  <div className="event-title">{event.title}</div>
                  <div className="event-time">{event.time}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentCalendar;

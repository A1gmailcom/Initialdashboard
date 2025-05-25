import React, { useState } from "react";
import SideNavbar from "./components/SideNavbar";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app">
      {isSidebarOpen && (
        <div
          className="sidebar-overlay active"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <SideNavbar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <Dashboard />
    </div>
  );
}

export default App;

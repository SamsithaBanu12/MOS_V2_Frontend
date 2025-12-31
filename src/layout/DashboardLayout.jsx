import React from "react";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";
import Sidebar from "../components/Sidebar/SideBar";
import Topbar from "../components/Topbar/Topbar";

export default function DashboardLayout() {
  return (
    <div className="appShell">
      <Sidebar />
      <main className="mainContent">
        <Topbar />
        <Outlet />
      </main>
    </div>
  );
}

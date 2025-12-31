import React, { useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.space.css";
import galaxeye_logo from '../../assets/galaxeye-white.png';

import { PiChartBarHorizontalFill } from "react-icons/pi";
import { FaEye } from "react-icons/fa6";
import { FaSatelliteDish } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import NavSubItem from "./NavSubItem";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const commandOpenByRoute = useMemo(
    () => location.pathname.startsWith("/c2/"),
    [location.pathname]
  );

  const kalpassOpenByRoute = useMemo(
    () => location.pathname.startsWith("/kalpass/"),
    [location.pathname]
  );

  const netraOpenByRoute = useMemo(
    () => location.pathname.startsWith("/netra/"),
    [location.pathname]
  );

  const [collapsed, setCollapsed] = useState(false);
  const [commandOpen, setCommandOpen] = useState(commandOpenByRoute);
  const [kalpassOpen, setKalpassOpen] = useState(kalpassOpenByRoute);
  const [netraOpen, setNetraOpen] = useState(netraOpenByRoute);
  const [isHomeActive, setIsHomeActive] = useState(true);

  React.useEffect(() => {
    if (commandOpenByRoute) {
      setCommandOpen(true);
      setIsHomeActive(false);
    }
    if (kalpassOpenByRoute) {
      setKalpassOpen(true);
      setIsHomeActive(false);
    }
    if (netraOpenByRoute) {
      setNetraOpen(true);
      setIsHomeActive(false);
    }
  }, [commandOpenByRoute, kalpassOpenByRoute, netraOpenByRoute]);

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="brand">
        <div className="brandLeft" onClick={() => setIsHomeActive(true)}>
          <img src={galaxeye_logo} style={{ width: '140px', height: '35px' }} alt='galaxy-logo' className="brandDot" />
        </div>
      </div>
      <nav className="nav">
        <div className={`group ${isHomeActive ? "open" : ""}`}>
          <button
            className="groupTrigger"
            type="button"
            onClick={() => {
              navigate("/");
              setIsHomeActive(true);
            }}
          >
            <div className="left-d-flex">
              <span className="navIcon"><TiHome size={21} /></span>
              <span className="navLabel">Home</span>
            </div>
          </button>
        </div>
        <div className={`group ${commandOpen ? "open" : ""}`}>
          <button
            className="groupTrigger"
            onClick={() => setCommandOpen((v) => !v)}
            aria-expanded={commandOpen}
            type="button"
          >
            <div className="left-d-flex">
              <span className="navIcon"><FaSatelliteDish size={20} /></span>
              <span className="navLabel">C2</span>
            </div>
          </button>
          <div className="submenu">
            <NavSubItem to="/c2/connection" label="Connection Setup" />
            <NavSubItem to="/c2/command-sender" label="Command Sender" />
            <NavSubItem to="/c2/upload" label="Upload" />
            {/* <NavSubItem to="/c2/procedures" label="Procedures" /> */}
            <NavSubItem to="/c2/transmission-history" label="Transmission History" />
          </div>
        </div>
        <div className={`group ${netraOpen ? "open" : ""}`}>
          <button
            className="groupTrigger"
            onClick={() => setNetraOpen((v) => !v)}
            aria-expanded={netraOpen}
            type="button"
          >
            <div className="left-d-flex">
              <span className="navIcon"><FaEye size={21} /></span>
              <span className="navLabel">Netra</span>
            </div>
          </button>
          <div className="submenu">
            {/* <NavSubItem to="/netra/alerts" label="Alerts" /> */}
            <NavSubItem to="/netra/telemetry-screen" label="Telemetry Screen" />
            <NavSubItem to="/netra/ground-track" label="Ground Tracks" />
          </div>
        </div>
        <div className={`group ${kalpassOpen ? "open" : ""}`}>
          <button
            className="groupTrigger"
            onClick={() => setKalpassOpen((v) => !v)}
            aria-expanded={kalpassOpen}
            type="button"
          >
            <div className="left-d-flex">
              <span className="navIcon"><PiChartBarHorizontalFill size={21} /></span>
              <span className="navLabel">Kalpass</span>
            </div>
          </button>
          <div className="submenu">
            <NavSubItem to="/kalpass/order" label="Order Management" />
            <NavSubItem to="/kalpass/staging" label="Staging Area" />
            <NavSubItem to="/kalpass/board" label="On-Board Schedule" />
            <NavSubItem to="/kalpass/master-timeline" label="Master Timeline" />
          </div>
        </div>
      </nav>
    </aside>
  );
}
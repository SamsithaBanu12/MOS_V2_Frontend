import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SideBar.space.css";

import galaxeye_logo from "../../assets/galaxeye-white.png";
import galaxeye_small_logo from "../../assets/glx-small.png";

import { PiChartBarHorizontalFill } from "react-icons/pi";
import { FaBars, FaEye, FaSatelliteDish } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import NavSubItem from "./NavSubItem";
import { useSidebar } from "../../context/SidebarContext";
import { LuUserRound } from "react-icons/lu";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const userDetails = localStorage.getItem('user');
  const user = JSON.parse(userDetails);

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

  const adminOpenByRoute = useMemo(
    () => location.pathname.startsWith("/admin"),
    [location.pathname]
  );
  const { collapsed, setCollapsed } = useSidebar();
  const [commandOpen, setCommandOpen] = useState(commandOpenByRoute);
  const [kalpassOpen, setKalpassOpen] = useState(kalpassOpenByRoute);
  const [netraOpen, setNetraOpen] = useState(netraOpenByRoute);

  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isAdminTabActive, setIsAdminTabActive] = useState(false);

  const closeAllMenus = () => {
    setCommandOpen(false);
    setKalpassOpen(false);
    setNetraOpen(false);
  };

  React.useEffect(() => {
    const isC2 = commandOpenByRoute;
    const isKalpass = kalpassOpenByRoute;
    const isNetra = netraOpenByRoute;
    const isAdmin = adminOpenByRoute;

    setIsHomeActive(!(isC2 || isKalpass || isNetra || isAdmin));
    setIsAdminTabActive(isAdmin);

    if (!collapsed) {
      if (isC2) {
        setCommandOpen(true);
        setKalpassOpen(false);
        setNetraOpen(false);
      } else if (isKalpass) {
        setKalpassOpen(true);
        setCommandOpen(false);
        setNetraOpen(false);
      } else if (isNetra) {
        setNetraOpen(true);
        setCommandOpen(false);
        setKalpassOpen(false);
      } else {
        setCommandOpen(false);
        setKalpassOpen(false);
        setNetraOpen(false);
      }
    }
  }, [
    commandOpenByRoute,
    kalpassOpenByRoute,
    netraOpenByRoute,
    adminOpenByRoute,
    collapsed,
  ]);

  return (
    <>
      {collapsed ? (
        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
          <div className="brand">
            <div className="brandLeft">
              <img
                src={galaxeye_small_logo}
                alt="galaxy-logo"
                style={{ width: "56px", height: "56px", cursor: 'pointer' }}
                className="brandDot-small"
                onClick={() => setCollapsed((prev) => !prev)}
              />
            </div>
          </div>

          <nav className="nav">
            {/* HOME */}
            <div className={`group ${isHomeActive ? "open" : ""}`}>
              <button
                className="groupTrigger-small"
                type="button"
                onClick={() => {
                  navigate("/");
                  setIsHomeActive(true);
                  closeAllMenus();
                }}
              >
                <div className="left-d-flex">
                  <span className="navIcon">
                    <TiHome size={29} />
                  </span>
                </div>
              </button>
            </div>

            {/* C2 */}
            <div className={`group ${commandOpen ? "open" : ""}`}>
              <button
                className="groupTrigger-small"
                onClick={() => {
                  setCommandOpen((v) => !v);
                  setKalpassOpen(false);
                  setNetraOpen(false);
                  setIsHomeActive(false);
                  setIsAdminTabActive(false);
                }}
                aria-expanded={commandOpen}
                type="button"
              >
                <div className="left-d-flex">
                  <span className="navIcon">
                    <FaSatelliteDish size={25} />
                  </span>
                </div>
              </button>

              <div className="submenu-small">
                <div className="submenu-title">C2</div>

                <NavSubItem
                  to="/c2/connection-setup"
                  label="Connection Setup"
                  onClick={closeAllMenus}
                />
                <NavSubItem
                  to="/c2/command-sender"
                  label="Command Sender"
                  onClick={closeAllMenus}
                />
                <NavSubItem
                  to="/c2/upload"
                  label="Upload"
                  onClick={closeAllMenus}
                />
                <NavSubItem
                  to="/c2/transmission-history"
                  label="Transmission History"
                  onClick={closeAllMenus}
                />
              </div>
            </div>

            {/* NETRA */}
            <div className={`group ${netraOpen ? "open" : ""}`}>
              <button
                className="groupTrigger-small"
                onClick={() => {
                  setNetraOpen((v) => !v);
                  setCommandOpen(false);
                  setKalpassOpen(false);
                  setIsHomeActive(false);
                  setIsAdminTabActive(false);
                }}
                aria-expanded={netraOpen}
                type="button"
              >
                <div className="left-d-flex">
                  <span className="navIcon">
                    <FaEye size={25} />
                  </span>
                </div>
              </button>

              <div className="submenu-small">
                <div className="submenu-title">Netra</div>

                <NavSubItem
                  to="/netra/telemetry-screen"
                  label="Telemetry Screen"
                  onClick={closeAllMenus}
                />
                <NavSubItem
                  to="/netra/ground-track"
                  label="Ground Tracks"
                  onClick={closeAllMenus}
                />
              </div>
            </div>

            {/* KALPASS */}
            {/* <div className={`group ${kalpassOpen ? "open" : ""}`}>
              <button
                className="groupTrigger-small"
                onClick={() => {
                  setKalpassOpen((v) => !v);
                  setCommandOpen(false);
                  setNetraOpen(false);
                  setIsHomeActive(false);
                  setIsAdminTabActive(false);
                }}
                aria-expanded={kalpassOpen}
                type="button"
              >
                <div className="left-d-flex">
                  <span className="navIcon">
                    <PiChartBarHorizontalFill size={26} />
                  </span>
                </div>
              </button>

              <div className="submenu-small">
                <div className="submenu-title">Kalpass</div>

                <NavSubItem
                  to="/kalpass/order"
                  label="Order Management"
                  onClick={closeAllMenus}
                />
                <NavSubItem
                  to="/kalpass/staging"
                  label="Staging Area"
                  onClick={closeAllMenus}
                />
                <NavSubItem
                  to="/kalpass/board"
                  label="On-Board Schedule"
                  onClick={closeAllMenus}
                />
                <NavSubItem
                  to="/kalpass/master-timeline"
                  label="Master Timeline"
                  onClick={closeAllMenus}
                />
              </div>
            </div> */}
            {user?.role === "ADMIN" && <div className={`group ${isAdminTabActive ? "open" : ""}`}>
              <button
                className="groupTrigger-small"
                type="button"
                onClick={() => {
                  navigate("/admin");
                  setIsAdminTabActive(true);
                  setIsHomeActive(false);
                  closeAllMenus();
                }}
              >
                <div className="left-d-flex">
                  <span className="navIcon">
                    <LuUserRound size={29} />
                  </span>
                </div>
              </button>
            </div>}
          </nav>
        </aside>
      ) : (
        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
          <div className="brand">
            <div className="brandLeft" onClick={() => setIsHomeActive(true)}>
              <img
                src={galaxeye_logo}
                style={{ width: "140px", height: "35px" }}
                alt="galaxy-logo"
                className="brandDot"
              />
              <div
                className="bar-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  setCollapsed((prev) => !prev);
                  closeAllMenus();
                }}
              >
                <FaBars size={23} />
              </div>
            </div>
          </div>

          <nav className="nav">
            {/* HOME */}
            <div className={`group ${isHomeActive ? "open" : ""}`}>
              <button
                className="groupTrigger"
                type="button"
                onClick={() => {
                  navigate("/");
                  setIsHomeActive(true);
                  closeAllMenus();
                }}
              >
                <div className="left-d-flex">
                  <span className="navIcon">
                    <TiHome size={21} />
                  </span>
                  <span className="navLabel">Home</span>
                </div>
              </button>
            </div>

            {/* C2 */}
            <div className={`group ${commandOpen ? "open" : ""}`}>
              <button
                className="groupTrigger"
                onClick={() => {
                  setCommandOpen((v) => !v);
                  setKalpassOpen(false);
                  setNetraOpen(false);
                  setIsHomeActive(false);
                  setIsAdminTabActive(false);
                }}
                aria-expanded={commandOpen}
                type="button"
              >
                <div className="left-d-flex">
                  <span className="navIcon">
                    <FaSatelliteDish size={20} />
                  </span>
                  <span className="navLabel">C2</span>
                </div>
              </button>

              <div className="submenu">
                <NavSubItem
                  to="/c2/connection-setup"
                  label="Connection Setup"
                />
                <NavSubItem
                  to="/c2/command-sender"
                  label="Command Sender"
                />
                <NavSubItem
                  to="/c2/upload"
                  label="Upload"
                />
                <NavSubItem
                  to="/c2/transmission-history"
                  label="Transmission History"
                />
              </div>
            </div>

            {/* NETRA */}
            <div className={`group ${netraOpen ? "open" : ""}`}>
              <button
                className="groupTrigger"
                onClick={() => {
                  setNetraOpen((v) => !v);
                  setCommandOpen(false);
                  setKalpassOpen(false);
                  setIsHomeActive(false);
                  setIsAdminTabActive(false);
                }}
                aria-expanded={netraOpen}
                type="button"
              >
                <div className="left-d-flex">
                  <span className="navIcon">
                    <FaEye size={21} />
                  </span>
                  <span className="navLabel">Netra</span>
                </div>
              </button>

              <div className="submenu">
                <NavSubItem
                  to="/netra/telemetry-screen"
                  label="Telemetry Screen"
                />
                <NavSubItem
                  to="/netra/ground-track"
                  label="Ground Tracks"
                />
              </div>
            </div>

            {/* KALPASS */}
            {/* <div className={`group ${kalpassOpen ? "open" : ""}`}>
              <button
                className="groupTrigger"
                onClick={() => {
                  setKalpassOpen((v) => !v);
                  setCommandOpen(false);
                  setNetraOpen(false);
                  setIsHomeActive(false);
                  setIsAdminTabActive(false);
                }}
                aria-expanded={kalpassOpen}
                type="button"
              >
                <div className="left-d-flex">
                  <span className="navIcon">
                    <PiChartBarHorizontalFill size={21} />
                  </span>
                  <span className="navLabel">Kalpass</span>
                </div>
              </button>

              <div className="submenu">
                <NavSubItem
                  to="/kalpass/order"
                  label="Order Management"
                />
                <NavSubItem
                  to="/kalpass/staging"
                  label="Staging Area"
                />
                <NavSubItem
                  to="/kalpass/board"
                  label="On-Board Schedule"
                />
                <NavSubItem
                  to="/kalpass/master-timeline"
                  label="Master Timeline"
                />
              </div>
            </div> */}
            {user?.role === "ADMIN" && <div className={`group ${isAdminTabActive ? "open" : ""}`}>
              <button
                className="groupTrigger"
                type="button"
                onClick={() => {
                  navigate("/admin");
                  setIsAdminTabActive(true);
                  setIsHomeActive(false);
                  setCommandOpen(false);
                  setKalpassOpen(false);
                  setNetraOpen(false);
                }}
              >
                <div className="left-d-flex">
                  <span className="navIcon">
                    <LuUserRound size={21} />
                  </span>
                  <span className="navLabel">Admin</span>
                </div>
              </button>
            </div>}
          </nav>
        </aside>
      )}
    </>
  );
}

import { NavLink } from "react-router";

export default function NavSubItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `subItem ${isActive ? "active" : ""}`}
    >
      <span className="bullet" />
      <span className="subLabel">{label}</span>
    </NavLink>
  );
}

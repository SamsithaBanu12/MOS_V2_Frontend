import { NavLink } from "react-router-dom";

export default function NavSubItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `subItem ${isActive ? "active" : ""}`}
      onClick={() => {
        onClick?.();
      }}
    >
      {label}
    </NavLink>
  );
}

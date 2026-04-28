import { NavLink } from "react-router-dom";
export default function NavBarItem({ path, children }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? "text-black" : "hover:text-black transition cursor-pointer"
      }
    >
      {children}
    </NavLink>
  );
}

import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar flex gap-4 items-center justify-end">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active font-bold uppercase" : "font-bold uppercase"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/Carrito"
        className={({ isActive }) =>
          isActive ? "active font-bold uppercase" : "font-bold uppercase"
        }
      >
        Carrito
      </NavLink>
    </nav>
  );
}

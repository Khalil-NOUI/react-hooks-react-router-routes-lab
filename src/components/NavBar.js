import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home </NavLink>
      <NavLink to="/Movie"> Movies </NavLink>
      <NavLink to="/Directors"> Directors </NavLink>
      <NavLink to="/Actors"> Actors </NavLink>
    </nav>
    );
}

export default NavBar;
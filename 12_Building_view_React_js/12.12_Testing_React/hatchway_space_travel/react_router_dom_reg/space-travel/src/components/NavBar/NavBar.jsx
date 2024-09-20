import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/spacecrafts">Spacecrafts</NavLink>
      <NavLink to="/planets">Planets</NavLink>
    </nav>
  );
};

export default NavBar;

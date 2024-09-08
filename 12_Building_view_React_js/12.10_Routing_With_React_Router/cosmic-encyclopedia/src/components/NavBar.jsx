import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = ({ planets }) => {
  return (
    <nav className="container">
      <Link className="link" to="/">
        Home
      </Link>
      {planets.map((planet) => (
        <Link className="link" key={planet.id} to={`/content/${planet.title}`}>
          {planet.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;

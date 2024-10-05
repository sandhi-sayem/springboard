import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const navLinks = [
    { to: "/", text: "🌎 Home" },
    { to: "/spacecrafts", text: "🚀 Spacecrafts" },
    { to: "/planets", text: "🪐 Planets" },
  ];

  return (
    <nav className={styles.navbar}>
      {navLinks.map((navLink) => (
        <NavLink
          key={navLink.text}
          to={navLink.to}
          className={({ isActive }) =>
            `${styles["nav-links"]} ${
              isActive ? styles["nav-link-active"] : ""
            }`
          }
        >
          {navLink.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;

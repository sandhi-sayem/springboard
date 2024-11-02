import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinks = [
    { to: "/home", text: "Home" },
    { to: "/profile", text: "Profile" },
    { to: "/friends", text: "Friends" },
    { to: "/groups", text: "Groups" },
    { to: "/signup", text: "Signup" },
    { to: "/login", text: "Login" },
  ];

  return (
    <nav className="flex justify-between">
      {navLinks.map((navLink) => (
        <NavLink key={navLink.text} to={navLink.to}>
          {navLink.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;

import { useNavigate } from "react-router-dom";

import "./NavBackButton.css";

const NavBackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="button" onClick={() => navigate(-1)}>
      Go Back
    </button>
  );
};

export default NavBackButton;

import { useNavigate } from "react-router-dom";

const BuildSpacecraftButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/spacecraft/create")}>
      BuildSpacecraftButton
    </button>
  );
};

export default BuildSpacecraftButton;

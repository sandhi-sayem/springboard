import { Outlet } from "react-router-dom";
import BuildSpacecraftButton from "../components/BuildSpacecraftButton";

const SpacecraftsLayout = () => {
  return (
    <div>
      <div>
        <BuildSpacecraftButton />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SpacecraftsLayout;

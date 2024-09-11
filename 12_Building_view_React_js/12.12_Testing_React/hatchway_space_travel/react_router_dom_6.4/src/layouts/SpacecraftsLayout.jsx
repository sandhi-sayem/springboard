import { Outlet, useNavigation } from "react-router-dom";
import "./SpacecraftsLayout.css";

const SpacecraftsLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <div>
        <button>Build a Spacecraft</button>
      </div>

      <div className={navigation.state === "loading" ? "loader" : ""}>
        {console.log(navigation.state)}
        <Outlet />
      </div>
    </div>
  );
};
export default SpacecraftsLayout;

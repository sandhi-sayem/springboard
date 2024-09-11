import { useLoaderData, useNavigation } from "react-router-dom";
import Spacecraft from "./Spacecraft";
// import "./Spacecrafts.css";

const Spacecrafts = () => {
  const spacecrafts = useLoaderData();
  // const navigation = useNavigation();
  return (
    <div>
      {/* <div className={navigation.state === "loading" ? "loader" : ""}> */}
      <div>
        {spacecrafts.map((spacecraft) => (
          <div key={spacecraft.id}>
            <p>id: {spacecraft.id}</p>
            <p>name: {spacecraft.name}</p>
            <p>capacity: {spacecraft.capacity}</p>
            <p>description: {spacecraft.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Spacecrafts;

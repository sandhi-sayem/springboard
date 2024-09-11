import { default as space } from "../services/SpaceTravelApi";

const zzPlanets = () => {
  const displayPlanets = async () => {
    const planets = await space.getPlanets();
    return planets;
  };
  displayPlanets().then((planets) => console.log(planets));
  return <div>Planets</div>;
};
export default zzPlanets;

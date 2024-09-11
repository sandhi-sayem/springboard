import { useParams } from "react-router-dom";

const Spacecraft = () => {
  const { id } = useParams();
  return <div>Spacecraft: {id}</div>;
};
export default Spacecraft;

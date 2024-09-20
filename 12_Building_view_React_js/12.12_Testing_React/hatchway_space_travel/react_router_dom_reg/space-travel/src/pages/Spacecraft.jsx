import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import NavigateGoBack from "../components/NavigateGoBack";
import Spinner from "../components/Spinner/Spinner";

const Spacecraft = () => {
  const { id } = useParams();
  const [spacecraft, setSpacecraft] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSpacecraftById = async () => {
      try {
        const res = await SpaceTravelApi.getSpacecraftById({ id });
        setSpacecraft(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getSpacecraftById();
  }, []);

  return (
    <div>
      <div>
        <NavigateGoBack />
      </div>
      <Spinner isLoading={isLoading} />
      {!isLoading && (
        <div>
          <p>id: {spacecraft.id}</p>
          <p>name: {spacecraft.name}</p>
          <p>capacity: {spacecraft.capacity}</p>
          <p>description: {spacecraft.description}</p>
          <p>currentLocation: {spacecraft.currentLocation}</p>
          {spacecraft.pictureUrl ? (
            <img
              src={spacecraft.pictureUrl}
              alt={`image of spacecraft ${spacecraft.name}`}
            />
          ) : (
            <p>🚀</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Spacecraft;

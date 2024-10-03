import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import NavigateGoBack from "../components/NavigateGoBack";
import { useSpinner } from "../hooks/useSpinner";

const Spacecraft = () => {
  const { id } = useParams();
  const [spacecraft, setSpacecraft] = useState();
  const { isLoading, showSpinner, hideSpinner } = useSpinner();

  useEffect(() => {
    const getSpacecraftById = async () => {
      try {
        showSpinner();
        const res = await SpaceTravelApi.getSpacecraftById({ id });
        setSpacecraft(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        hideSpinner();
      }
    };

    getSpacecraftById();
  }, []);

  return (
    spacecraft && (
      <div>
        <div>
          <NavigateGoBack />
        </div>
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
      </div>
    )
  );
};

export default Spacecraft;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import BuildSpacecraftButton from "../components/BuildSpacecraftButton";
import DestroySpacecraft from "../components/DestroySpacecraft";
import { useSpinner } from "../hooks/useSpinner";

const Spacecrafts = () => {
  const [spacecrafts, setSpacecrafts] = useState([]);
  const navigate = useNavigate();
  const { isLoading, showSpinner, hideSpinner } = useSpinner();

  const getSpacecrafts = async () => {
    const { data: spacecrafts, isError } =
      await SpaceTravelApi.getSpacecrafts();
    if (!isError) setSpacecrafts(spacecrafts);
  };

  useEffect(() => {
    const execGetSpacecrafts = async () => {
      try {
        showSpinner();
        await getSpacecrafts();
      } catch (err) {
        console.log(err);
      } finally {
        hideSpinner();
        console.log("spacecrafts loading complete");
      }
    };

    execGetSpacecrafts();
  }, []);

  const removeSpacecraft = (id) => {
    setSpacecrafts((prevSpacecrafts) =>
      prevSpacecrafts.filter((spacecraft) => spacecraft.id !== id)
    );
  };

  return (
    <div>
      <div>
        <BuildSpacecraftButton />
      </div>
      <div>
        {spacecrafts.map((spacecraft) => (
          <div key={spacecraft.id}>
            <p>id: {spacecraft.id}</p>
            <p>name: {spacecraft.name}</p>
            <p>capacity: {spacecraft.capacity}</p>
            {spacecraft.pictureUrl ? (
              <img
                src={spacecraft.pictureUrl}
                alt={`image of spacecraft ${spacecraft.name}`}
              />
            ) : (
              <p>🚀</p>
            )}
            <p>currentLocaction: {spacecraft.currentLocation}</p>
            {console.log(spacecraft)}
            <button onClick={() => navigate(`/spacecraft/${spacecraft.id}`)}>
              Show Spacecraft
            </button>
            <DestroySpacecraft
              id={spacecraft.id}
              onDestroySpacecraft={removeSpacecraft}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spacecrafts;

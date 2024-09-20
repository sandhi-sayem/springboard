import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import BuildSpacecraftButton from "../components/BuildSpacecraftButton";
import Spinner from "../components/Spinner/Spinner";
import DestroySpacecraft from "../components/DestroySpacecraft";

const Spacecrafts = () => {
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getSpacecrafts = async () => {
      setIsLoading(true);
      try {
        const res = await SpaceTravelApi.getSpacecrafts();
        setSpacecrafts(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
        console.log("spacecrafts loading complete");
      }
    };

    getSpacecrafts();
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
      <Spinner isLoading={isLoading} />
      <div>
        {spacecrafts.map((spacecraft) => (
          <div key={spacecraft.id}>
            <p>id: {spacecraft.id}</p>
            <p>name: {spacecraft.name}</p>
            <p>capacity: {spacecraft.capacity}</p>
            {/* <p>description: {spacecraft.description}</p> */}
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

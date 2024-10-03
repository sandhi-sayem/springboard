import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLoading from "../../hooks/useLoading";
import SpaceTravelApi from "../../services/SpaceTravelApi";

const Spacecraft = () => {
  const { id } = useParams();
  const [spacecraft, setSpacecraft] = useState();
  const [notFound, setNotFound] = useState(null);
  const { isLoading, showLoading, hideLoading } = useLoading();
  const navigate = useNavigate();

  useEffect(() => {
    const getSpacecraft = async () => {
      try {
        showLoading();
        const { data: spacecraft, isError } =
          await SpaceTravelApi.getSpacecraftById({ id });

        if (!isError && spacecraft) setSpacecraft(spacecraft);
        else {
          setNotFound(`Spacecraft with id # ${id} doesn't exist.`);
          console.log(`Couldn't set spacecraft. Error: ${spacecraft}`);
        }
      } catch (error) {
        console.log(
          `API for fetching single spacecraft failed. Error: ${error}`
        );
      } finally {
        hideLoading();
      }
    };

    getSpacecraft();
  }, []);

  return (
    <>
      {notFound}
      {spacecraft && (
        <div>
          <div>
            <button onClick={() => navigate(-1)}>Back 👈</button>
          </div>
          <div>
            {spacecraft.pictureUrl ? (
              <img
                src={spacecraft.pictureUrl}
                alt={`image of spacecraft ${spacecraft.name}`}
              />
            ) : (
              <span>🚀</span>
            )}
          </div>
          <div>
            <div>
              <div>name: {spacecraft.name}</div>
              <div>capacity: {spacecraft.capacity}</div>
            </div>
            <div>
              <div>Description:</div>
              <div>{spacecraft.description}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Spacecraft;

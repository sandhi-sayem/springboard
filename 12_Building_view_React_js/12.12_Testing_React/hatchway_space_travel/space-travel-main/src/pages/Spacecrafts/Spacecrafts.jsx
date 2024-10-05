import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLoading from "../../hooks/useLoading";
import SpaceTravelApi from "../../services/SpaceTravelApi";
import styles from "./Spacecrafts.module.css";

const Spacecrafts = () => {
  const [spacecrafts, setSpacecrafts] = useState([]);
  const navigate = useNavigate();
  const { isLoading, showLoading, hideLoading } = useLoading();

  const getSpacecrafts = async () => {
    try {
      const { data: spacecrafts, isError } =
        await SpaceTravelApi.getSpacecrafts();

      !isError
        ? setSpacecrafts(spacecrafts)
        : console.log(`Couldn't set spacecrafts. Error: ${spacecrafts}`);
    } catch (error) {
      console.log(`API for fetching spacecrafts failed. Error: ${error}`);
    }
  };

  useEffect(() => {
    const executeGetSpacecrafts = async () => {
      try {
        showLoading();
        await getSpacecrafts();
      } catch (error) {
        console.log(`useEffect for spacecrafts failed.`);
      } finally {
        hideLoading();
      }
    };

    executeGetSpacecrafts();
  }, []);

  const destroySpacecraft = async (id) => {
    try {
      showLoading();
      const { data, isError } = await SpaceTravelApi.destroySpacecraftById({
        id,
      });

      if (!isError && !data) await getSpacecrafts();
      else
        console.log(`Couldn't destroy spacecraft id # ${id}. Error: ${data}`);
    } catch (error) {
      console.log(`API for destroying spacecraft failed. Error: ${error}`);
    } finally {
      hideLoading();
    }
  };

  return (
    <div>
      {!isLoading && (
        <button onClick={() => navigate("/spacecraft/build")}>
          🏗️ Build a Spacecraft
        </button>
      )}
      <div>
        {spacecrafts.map((spacecraft) => (
          <div key={spacecraft.id} className={styles.spacecraft}>
            <div
              onClick={() => navigate(`/spacecraft/${spacecraft.id}`)}
              className={styles["spacecraft-image-container"]}
            >
              {spacecraft.pictureUrl ? (
                <img
                  src={spacecraft.pictureUrl}
                  alt={`image of spacecraft ${spacecraft.name}`}
                  className={styles["spacecraft-image"]}
                />
              ) : (
                <span className={styles["spacecraft-image-default"]}>🚀</span>
              )}
            </div>
            <div className={styles["spacecraft-information-container"]}>
              <div className={styles["spacecraft-information"]}>
                <span>name: {spacecraft.name}</span>
              </div>
              <div className={styles["spacecraft-information"]}>
                <span>capacity: {spacecraft.capacity}</span>
              </div>
            </div>
            <div>
              <button onClick={() => destroySpacecraft(spacecraft.id)}>
                💥 Destroy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Spacecrafts;

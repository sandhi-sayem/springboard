import { useEffect, useState } from "react";
import useLoading from "../../hooks/useLoading";
import SpaceTravelApi from "../../services/SpaceTravelApi";
import styles from "./Planets.module.css";

const Planets = () => {
  const [planetInfo, setPlanetInfo] = useState([]);
  const { isLoading, showLoading, hideLoading } = useLoading();
  const [clickedPlanetId, setClickedPlanetId] = useState();
  const [clickedSpacecraftId, setClickedSpacecraftId] = useState();

  const matchPlanetsWithSpacecrafts = async () => {
    try {
      const { data: planets, isError: planetError } =
        await SpaceTravelApi.getPlanets();
      const { data: spacecrafts, isError: spacecraftError } =
        await SpaceTravelApi.getSpacecrafts();

      if (!planetError && !spacecraftError) {
        for (const planet of planets) {
          planet.spacecrafts = [];

          for (const spacecraft of spacecrafts) {
            if (spacecraft.currentLocation === planet.id)
              planet.spacecrafts.push(spacecraft);
          }
        }

        setPlanetInfo(planets);
      } else {
        console.log(
          `Failed to get planets and spacecrafts. \nPlanet error: ${planetError} \nSpacecraft error: ${spacecraftError}`
        );
      }
    } catch (error) {
      console.log(
        `API to fetch planets and spacecrafts failed. Error: ${error}`
      );
    }
  };

  useEffect(() => {
    const execMatchPlanetsWithSpacecrafts = async () => {
      try {
        showLoading();
        await matchPlanetsWithSpacecrafts();
      } catch (error) {
        console.log(`execMatchPlanetsWithSpacecrafts failed.`);
      } finally {
        hideLoading();
      }
    };

    execMatchPlanetsWithSpacecrafts();
  }, []);

  const handleSpacecraftClick = async (spacecraftId, planetId) => {
    if (Number.isInteger(clickedPlanetId) && clickedPlanetId !== planetId) {
      setClickedSpacecraftId(spacecraftId);

      try {
        showLoading();
        const { data, isError } = await SpaceTravelApi.sendSpacecraftToPlanet({
          spacecraftId,
          targetPlanetId: clickedPlanetId,
        });

        if (!isError) {
          await matchPlanetsWithSpacecrafts();
          setClickedPlanetId(null);
          setClickedSpacecraftId(null);
        } else
          console.log(
            `Not able to send spacecraft to target planet. Error: ${data}`
          );
      } catch (error) {
        console.log(
          `API to send spacecraft to target planet failed. Error: ${error}`
        );
      } finally {
        hideLoading();
      }
    }
  };

  return (
    <>
      {planetInfo.map((planet, index) => (
        <div key={index} className={styles.planets}>
          <div
            onClick={() => setClickedPlanetId(planet.id)}
            className={`${styles.planet} ${
              clickedPlanetId === planet.id && styles["planet-clicked"]
            }`}
          >
            <div className={styles["planet-image-container"]}>
              <img
                src={planet.pictureUrl}
                alt={`image of planet: ${planet.name}`}
                className={styles["planet-image"]}
              />
            </div>
            <div className={styles["planet-information"]}>
              <div>{planet.name}</div>
              <div>{planet.currentPopulation}</div>
            </div>
          </div>
          <div className={styles.spacecrafts}>
            {planet.spacecrafts.map((spacecraft, index) => (
              <div
                key={index}
                onClick={() => handleSpacecraftClick(spacecraft.id, planet.id)}
                className={`${styles.spacecraft} ${
                  clickedSpacecraftId === spacecraft.id &&
                  styles["spacecraft-clicked"]
                }`}
              >
                <div className={styles["spacecraft-image-container"]}>
                  {spacecraft.pictureUrl ? (
                    <img
                      src={spacecraft.pictureUrl}
                      alt={`image of spacecraft: ${spacecraft.name}`}
                      className={styles["spacecraft-image"]}
                    />
                  ) : (
                    <span className={styles["spacecraft-image-default"]}>
                      🚀
                    </span>
                  )}
                </div>
                <div className={styles["spacecraft-information"]}>
                  <div>{spacecraft.name}</div>
                  <div>{spacecraft.capacity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
export default Planets;

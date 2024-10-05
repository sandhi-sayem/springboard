import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLoading from "../../hooks/useLoading";
import SpaceTravelApi from "../../services/SpaceTravelApi";
import styles from "./Spacecraft.module.css";

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
          console.log(`Couldn't find spacecraft. Error: ${spacecraft}`);
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
      {!isLoading && <button onClick={() => navigate(-1)}>Back 👈</button>}
      {notFound && (
        <div className={styles["spacecraft-not-exist"]}>{notFound}</div>
      )}
      {spacecraft && (
        <div className={styles.spacecraft}>
          <div className={styles["spacecraft-image-container"]}>
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
              <div className={styles["spacecraft-information-title"]}>
                Name: {spacecraft.name}
              </div>
              <div className={styles["spacecraft-information-title"]}>
                Capacity: {spacecraft.capacity}
              </div>
            </div>
            <div className={styles["spacecraft-information"]}>
              <div className={styles["spacecraft-information-title"]}>
                Description:
              </div>
              <div className={styles["spacecraft-information-text"]}>
                {spacecraft.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Spacecraft;

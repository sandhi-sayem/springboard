import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLoading from "../../hooks/useLoading";
import SpaceTravelApi from "../../services/SpaceTravelApi";
import styles from "./BuildSpacecraft.module.css";

const BuildSpacecraft = () => {
  const INITIAL_DATA = {
    name: "",
    capacity: "",
    description: "",
    pictureUrl: "",
  };

  const [formData, setFormData] = useState(INITIAL_DATA);
  const [formErrors, setFormErrors] = useState([]);
  const { isLoading, showLoading, hideLoading } = useLoading();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const validateForm = () => {
    const { name, capacity, description, pictureUrl } = formData;

    setFormErrors([]);
    let errorFlag = false;

    if (!name.trim()) {
      errorFlag = true;
      setFormErrors((prevErrors) => [...prevErrors, "Name is required!"]);
    }

    if (!capacity) {
      errorFlag = true;
      setFormErrors((prevErrors) => [...prevErrors, "Capacity is required!"]);
    } else if (isNaN(capacity)) {
      errorFlag = true;
      setFormErrors((prevErrors) => [
        ...prevErrors,
        "Enter a valid nubmer for capacity",
      ]);
    }

    if (!description.trim()) {
      errorFlag = true;
      setFormErrors((prevErrors) => [
        ...prevErrors,
        "Description is required!",
      ]);
    }

    return errorFlag;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      try {
        showLoading();
        const { data, isError } = await SpaceTravelApi.buildSpacecraft({
          ...formData,
        });
        !isError
          ? setFormData(INITIAL_DATA)
          : console.log(`Couldn't create spacecrafts. Error: ${data}`);
      } catch (error) {
        console.log(`API for creating spacecrafts failed. Error: ${error}`);
      } finally {
        hideLoading();
      }
    }
  };

  return (
    <>
      <button onClick={() => navigate(-1)}>Back 👈</button>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className={styles["form-input-container"]}>
              <div className={styles["form-input"]}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles["form-input"]}>
                <input
                  type="number"
                  id="capacity"
                  name="capacity"
                  value={formData.capacity}
                  placeholder="capacity"
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles["form-input"]}>
                <textarea
                  type="textarea"
                  id="description"
                  name="description"
                  value={formData.description}
                  placeholder="description"
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className={styles["form-input"]}>
                <input
                  type="text"
                  id="pictureUrl"
                  name="pictureUrl"
                  value={formData.pictureUrl}
                  placeholder="pictureUrl"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className={styles["form-post-validation-container"]}>
              <div className={styles["form-error-container"]}>
                {formErrors.map((error, index) => (
                  <div key={index} className={styles["form-error-text"]}>
                    {error}
                  </div>
                ))}
              </div>
              <div>
                <button type="submit" onClick={handleSubmit}>
                  Build 🏗️
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default BuildSpacecraft;

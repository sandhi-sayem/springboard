import { useState } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";
import NavigateGoBack from "../components/NavigateGoBack";
import Spinner from "../components/Spinner/Spinner";

const BuildSpacecraft = () => {
  const INITIAL_DATA = {
    name: "",
    capacity: "",
    description: "",
    pictureUrl: "",
  };

  const [formData, setFormData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const validateForm = () => {
    const newError = {};

    if (!formData.name.trim()) newError.name = true;
    if (isNaN(formData.capacity)) newError.capacity = true;
    if (!formData.description) newError.description = true;

    setErrors(newError);

    return Object.keys(newError).length === 0;
  };

  const getResponse = async () => {
    try {
      const res = await SpaceTravelApi.buildSpacecraft({ ...formData });
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (validateForm()) {
      console.log(formData);

      getResponse()
        .then((data) => {
          console.log(data);
          setFormData(INITIAL_DATA);
          setErrors({});
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div>
      <div>
        <NavigateGoBack />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleInputChange}
            />
            <input
              type="number"
              id="capacity"
              name="capacity"
              value={formData.capacity}
              placeholder="capacity"
              onChange={handleInputChange}
            />
            <textarea
              type="textarea"
              id="description"
              name="description"
              value={formData.description}
              placeholder="description"
              onChange={handleInputChange}
            ></textarea>
            <input
              type="text"
              id="pictureUrl"
              name="pictureUrl"
              value={formData.pictureUrl}
              placeholder="pictureUrl"
              onChange={handleInputChange}
            />
          </div>
          <button>Build</button>
        </form>
      </div>
    </div>
  );
};

export default BuildSpacecraft;

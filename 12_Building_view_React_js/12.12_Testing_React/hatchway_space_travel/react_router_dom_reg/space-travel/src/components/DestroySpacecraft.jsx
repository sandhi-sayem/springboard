import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpaceTravelApi from "../services/SpaceTravelApi";
import Spinner from "./Spinner/Spinner";

const DestroySpacecraft = ({ id, onDestroySpacecraft }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleDestroySpacecraft = () => {
    setIsLoading(true);
    const getDeleteResponse = async () => {
      try {
        const res = await SpaceTravelApi.destroySpacecraftById({ id });
        return res;
      } catch (err) {
        console.log(err);
      }
    };

    getDeleteResponse()
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .finally(() => {
        onDestroySpacecraft(id);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <button onClick={handleDestroySpacecraft}>Destroy: {id}</button>
      <Spinner isLoading={isLoading} />
    </div>
  );
};
export default DestroySpacecraft;

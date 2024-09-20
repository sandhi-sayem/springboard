import { useEffect, useRef, useState } from "react";
import SpaceTravelApi from "../../services/SpaceTravelApi";
import Spinner from "../../components/Spinner/Spinner";

import "./Planets.css";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [sendSpacecraft, setSendSpacecraft] = useState({});
  const [count, setCount] = useState(0);
  const [planetLoading, setPlanetLoading] = useState(false);
  const [sendLoading, setSendLoading] = useState(false);
  const planetRef = useRef(-1);
  const spacecraftRef = useRef(-1);

  useEffect(() => {
    const getPlanets = async () => {
      // setIsLoading(true);
      setPlanetLoading(true);
      try {
        const res = await SpaceTravelApi.getPlanets();
        const scRes = await SpaceTravelApi.getSpacecrafts();
        setPlanets(res.data);
        setSpacecrafts(scRes.data);
      } catch (err) {
        console.log(err);
      } finally {
        // setIsLoading(false);
        setPlanetLoading(false);
        console.log("loading planets");
      }
    };

    getPlanets();
  }, [count]);

  const displayPlanetId = (id, name) => {
    planetRef.current = id;
    // console.log(`Planet id: ${id}, name: ${name}`);
  };

  const handleClick = async (spacecraftId) => {
    if (planetRef.current === -1) {
      console.log(`planetRef: ${planetRef.current}`);
      return null;
    }

    // setIsLoading(true);
    setSendLoading(true);
    try {
      const res = await SpaceTravelApi.sendSpacecraftToPlanet({
        spacecraftId,
        targetPlanetId: planetRef.current,
      });

      setSendSpacecraft(res);
      console.log("sending spacecraft");
      if (res.isError) console.log(res);
      else setCount(count + 1); //spacecraftRef.current = planetRef.current;
    } catch (err) {
      console.log(err);
    } finally {
      // setIsLoading(false);
      setSendLoading(false);
    }
  };

  return (
    <div>
      {/* <Spinner isLoading={isLoading} /> */}
      {planetLoading && <div>Planets are loading ...</div>}
      {sendLoading && <div>Sending spacecraft ...</div>}
      <div>
        {planets.map((planet) => (
          <div key={planet.id}>
            <p>id: {planet.id}</p>
            <p>name: {planet.name}</p>
            <p>population: {planet.currentPopulation}</p>
            <img
              src={planet.pictureUrl}
              alt={`image of planet ${planet.name}`}
              onClick={() => displayPlanetId(planet.id, planet.name)}
            />
            {spacecrafts.map((spacecraft) =>
              spacecraft.currentLocation === planet.id ? (
                <div
                  key={spacecraft.id}
                  // onClick={() =>
                  //   updateSpacecraftLocation(
                  //     spacecraft.id,
                  //     spacecraft.name,
                  //     spacecraft.currentLocaction
                  //   )
                  // }
                  onClick={() => handleClick(spacecraft.id)}
                >
                  name: {spacecraft.name}
                </div>
              ) : null
            )}
          </div>
        ))}
      </div>
      {sendLoading && console.log(sendSpacecraft)}
    </div>
  );
};

export default Planets;

// const updateSpacecraftLocation = (id, name, currentLocaction) => {
//   console.log(
//     `Spacecraft id: ${id}, name: ${name}, currentLocation: ${currentLocaction}`
//   );
//   console.log(`planetRef: ${planetRef.current}`);
//   if (planetRef.current === -1 || currentLocaction === planetRef.current)
//     return null;
//   setSpacecrafts((prevData) =>
//     prevData.map((spacecraft) =>
//       spacecraft.id === id
//         ? { ...spacecraft, currentLocaction: planetRef.current }
//         : spacecraft
//     )
//   );
// };

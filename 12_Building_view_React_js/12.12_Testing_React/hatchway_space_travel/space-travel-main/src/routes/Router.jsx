import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import BuildSpacecraft from "../pages/BuildSpacecraft/BuildSpacecraft";
import Homepage from "../pages/Homepage/Homepage";
import Planets from "../pages/Planets/Planets";
import Spacecraft from "../pages/Spacecraft/Spacecraft";
import Spacecrafts from "../pages/Spacecrafts/Spacecrafts";
import RootLayout from "../layouts/RootLayout";

const Router = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="spacecrafts" element={<Spacecrafts />} />
        <Route path="spacecraft/build" element={<BuildSpacecraft />} />
        <Route path="spacecraft/:id" element={<Spacecraft />} />
        <Route path="planets" element={<Planets />} />
        <Route path="*" element={<Homepage />} />
      </Route>
    )
  );
};
export default Router;

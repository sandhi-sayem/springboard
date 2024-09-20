import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Homepage";
import Spacecrafts from "../pages/Spacecrafts";
import BuildSpacecraft from "../pages/BuildSpacecraft";
import Spacecraft from "../pages/Spacecraft";
import Planets from "../pages/Planets/Planets";

const Router = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="spacecrafts" element={<Spacecrafts />}></Route>
        <Route path="spacecraft/create" element={<BuildSpacecraft />}></Route>
        <Route path="spacecraft/:id" element={<Spacecraft />}></Route>
        <Route path="planets" element={<Planets />}></Route>
        <Route path="*" element={<Homepage />}></Route>
      </Route>
    )
  );
};
export default Router;

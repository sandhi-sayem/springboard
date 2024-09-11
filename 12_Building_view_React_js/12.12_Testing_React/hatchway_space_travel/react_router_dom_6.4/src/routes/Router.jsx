import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Homepage from "../pages/Homepage";
import Spacecrafts from "../pages/Spacecrafts";
import Spacecraft from "../pages/Spacecraft";
import RootLayout from "../layouts/RootLayout";
import BuildSpacecraft from "../components/BuildSpacecraft";
import Planets from "../pages/Planets";
import {
  spacecraftsLoader,
  planetsLoader,
  spacraftInfoLoader,
} from "../loaders/ApiDataLoader";
import SpacecraftsLayout from "../layouts/SpacecraftsLayout";

const Router = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="spacecrafts" element={<SpacecraftsLayout />}>
          <Route
            index
            element={<Spacecrafts />}
            loader={spacecraftsLoader}
          ></Route>
          <Route path="spacecraft/create" element={<BuildSpacecraft />}></Route>
          <Route path="spacecraft/:id" element={<Spacecraft />}></Route>
        </Route>
        <Route path="planets" element={<Planets />}></Route>
        <Route path="*" element={<Homepage />}></Route>
      </Route>
    )
  );
};
export default Router;

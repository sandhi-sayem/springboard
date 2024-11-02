import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Friends from "../pages/Friends/Friends";
import Groups from "../pages/Groups/Groups";
import Welcome from "../pages/Welcome/Welcome";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import RootLayout from "../layouts/RootLayout/RootLayout";
import FriendsLayout from "../layouts/FriendsLayout/FriendsLayout";
import GroupsLayout from "../layouts/GroupsLayout/GroupsLayout";
import Friend from "../pages/Friend/Friend";
import Group from "../pages/Group/Group";

const Router = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Welcome />} />
        <Route path="home" element={<Home />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="friends" element={<FriendsLayout />}>
          <Route index element={<Friends />} />
          <Route path="/friends/friend/:id" element={<Friend />} />
        </Route>
        <Route path="groups" element={<GroupsLayout />}>
          <Route index element={<Groups />} />
          <Route path="/groups/group/:id" element={<Group />} />
        </Route>

        <Route path="*" element={<Welcome />} />
      </Route>
    )
  );
};
export default Router;

import { Outlet } from "react-router-dom";

const FriendsLayout = () => {
  return (
    <>
      <section>Seach and Add friend</section>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default FriendsLayout;

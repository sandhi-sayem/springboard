import { Outlet } from "react-router-dom";

const GroupsLayout = () => {
  return (
    <>
      <section>Search and Add group</section>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default GroupsLayout;

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { useSpinner } from "../hooks/useSpinner";
import Spinner from "../components/Spinner/Spinner";

const RootLayout = () => {
  const { isLoading } = useSpinner();
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>

      {isLoading && <Spinner />}
    </>
  );
};

export default RootLayout;

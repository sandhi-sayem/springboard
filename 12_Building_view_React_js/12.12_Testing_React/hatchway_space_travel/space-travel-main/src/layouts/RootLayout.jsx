import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import styles from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <>
      <header className={styles["root-header"]}>
        <NavBar />
      </header>

      <main className={styles["root-main"]}>
        <Outlet />
      </main>

      <footer className={styles["root-footer"]}>
        <Footer />
      </footer>
    </>
  );
};
export default RootLayout;

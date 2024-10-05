import { RouterProvider } from "react-router-dom";
import styles from "./App.module.css";
import Router from "./routes/Router";

function App() {
  return (
    <div className={styles.root}>
      <RouterProvider router={Router()} />
    </div>
  );
}

export default App;

import planets from "./local-json/planets.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ContentPage from "./pages/ContentPage";
import NavBar from "./components/NavBar";
import NavBackButton from "./components/NavBackButton";

function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <header>
          <NavBar planets={planets} />
        </header>
        <main>
          <Routes>
            <Route index element={<HomePage />}></Route>
            {planets.map((planet) => (
              <Route
                path={`/content/${planet.title}`}
                key={planet.id}
                element={<ContentPage planet={planet} />}
              ></Route>
            ))}
            <Route path="*" element={<HomePage />}></Route>
          </Routes>

          <NavBackButton />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

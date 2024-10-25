import { Fragment } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import AuthPage from "./pages/Auth";
import BookingsPage from "./pages/Bookings";
import EventsPage from "./pages/Events";
import MainNavigation from "./components/Navigation/MainNavigation";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <MainNavigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/bookings" element={<BookingsPage />} />
          </Routes>
        </main>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

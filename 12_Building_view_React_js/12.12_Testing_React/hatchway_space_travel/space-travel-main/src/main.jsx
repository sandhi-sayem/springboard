import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App.jsx";
import { LoadingProvider } from "./contexts/LoadingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </React.StrictMode>
);

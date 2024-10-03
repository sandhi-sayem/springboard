import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App.jsx";
import { SpinnerProvider } from "./context/SpinnerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpinnerProvider>
      <App />
    </SpinnerProvider>
  </React.StrictMode>
);

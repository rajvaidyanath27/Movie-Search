import React from "react";
import ReactDOM from "react-dom/client"; // Fixed import
import './index.css'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./context"; // Corrected import

const root = ReactDOM.createRoot(document.getElementById("root")); // Fixed spacing

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

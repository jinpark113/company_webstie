import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import axios from "axios";

// Ensure baseURL is just the origin (no trailing slash)
const apiBase = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/+$/, "");
axios.defaults.baseURL = apiBase;
// Do NOT enable withCredentials globally. Set it only where needed.
console.log("API BASE =", axios.defaults.baseURL);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

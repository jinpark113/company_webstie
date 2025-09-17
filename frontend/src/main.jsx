import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL; // .env 값
axios.defaults.withCredentials = true; // 쿠키 쓰면 유지
console.log("API BASE =", axios.defaults.baseURL); // 확인용(나중에 지워도 됨)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

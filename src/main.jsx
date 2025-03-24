import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./index.css"; // ✅ This ensures Tailwind styles are applied globally

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

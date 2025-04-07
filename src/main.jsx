import { StrictMode } from "react"; // Helps catch bugs in development
import { createRoot } from "react-dom/client";
import { backendURL } from "./config";
import App from "./App.jsx";
import { CrisisSelectorProvider } from "./context/CrisisSelectorContext"; // 🧠 Import your provider
import "./index.css"; // ✅ Tailwind styles

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CrisisSelectorProvider backendURL={backendURL}>
      <App />
    </CrisisSelectorProvider>
  </StrictMode>
);

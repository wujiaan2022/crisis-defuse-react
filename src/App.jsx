import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header_simple from "./components/layout/Header_simple";

import Hero from "./components/layout/Hero";
import CrisisSelector from "./components/features/CrisisSelector";
import Footer from "./components/layout/Footer";

import "./index.css"; // Tailwind styles

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header_simple />
        <Hero />
        <CrisisSelector />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

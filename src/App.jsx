import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Header_simple from "./components/Header_simple";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import CrisisSelector from "./components/CrisisSelector";
import Footer from "./components/Footer";

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

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header_simple from "./components/layout/Header_simple";

import Hero from "./components/layout/Hero";
import CrisisSelector from "./components/features/CrisisSelector";
import RecitationTip from "./components/layout/RecitationTip";
import Footer from "./components/layout/Footer";

import "./index.css"; // Tailwind styles

import TopicList from "./pages/Topic/TopicList";
import TopicArticle from "./pages/Topic/TopicArticle";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header_simple />
        <Hero />
        <CrisisSelector />
        <RecitationTip />
        <Routes>
          <Route path="/topics" element={<TopicList />} />
          <Route path="/topic/:slug" element={<TopicArticle />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

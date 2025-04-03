import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TopicList from "./pages/Topic/TopicList";
import TopicArticle from "./pages/Topic/TopicArticle";

// ⬇️ Add these:
import AllScripturesPage from "./pages/Scriptures/AllScripturesPage";
import ScripturePage from "./pages/Scriptures/ScripturePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<TopicList />} />
        <Route path="/topic/:slug" element={<TopicArticle />} />

        {/* ⬇️ NEW: All Scriptures list */}
        <Route path="/scriptures" element={<AllScripturesPage />} />

        {/* ⬇️ NEW: Single Scripture view by ID or slug */}
        <Route path="/scriptures/:id" element={<ScripturePage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TopicList from "./pages/Topic/TopicList";
import TopicArticle from "./pages/Topic/TopicArticle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<TopicList />} />
        <Route path="/topic/:slug" element={<TopicArticle />} />
      </Routes>
    </Router>
  );
}

export default App;

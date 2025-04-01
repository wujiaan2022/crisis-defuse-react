import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { backendURL } from "../../config";

const TopicList = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch(`${backendURL}/topics`);
        const data = await response.json();
        setTopics(data);
      } catch (error) {
        console.error("Error fetching topics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto text-yellow-900">
      <h2 className="text-2xl font-bold text-center mb-6">🔥 Hot Topics of the Day</h2>

      {loading ? (
        <p className="text-center text-yellow-600">Loading topics...</p>
      ) : (
        <ul className="space-y-4">
          {topics.map((topic) => (
            <li key={topic.slug}>
              <Link
                to={`/topic/${topic.slug}`}
                className="block p-4 bg-yellow-50 hover:bg-yellow-100 border border-yellow-200 rounded-lg shadow transition font-medium"
              >
                📖 {topic.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="text-center mt-6">
        <Link
          to="/"
          className="inline-block mt-2 text-sm text-yellow-700 underline hover:text-yellow-500"
        >
          ⬅️ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default TopicList;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { backendURL } from "../../config";

const AllScripturesPage = () => {
  const [scriptures, setScriptures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScriptures = async () => {
      try {
        const response = await fetch(`${backendURL}/scriptures`);
        const data = await response.json();
        setScriptures(data);
      } catch (error) {
        console.error("Error fetching scriptures:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchScriptures();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto text-yellow-900">
      <h2 className="text-2xl font-bold text-center mb-6">
        📜 All Available Scriptures
      </h2>

      {loading ? (
        <p className="text-center text-yellow-600">Loading scriptures...</p>
      ) : scriptures.length === 0 ? (
        <p className="text-center text-yellow-600">No scriptures found.</p>
      ) : (
        <ul className="space-y-4">
          {scriptures.map((scripture) => (
            <li key={scripture.id}>
              <Link
                to={`/scriptures/${scripture.id}`}
                className="block p-4 bg-yellow-50 hover:bg-yellow-100 border border-yellow-200 rounded-lg shadow transition font-medium"
              >
                <div className="text-lg font-semibold mb-1">📖 {scripture.name}</div>
                <div className="text-sm italic text-yellow-700">{scripture.title}</div>
                <div className="text-sm mt-1 text-yellow-800">
                  {scripture.summary}
                </div>
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

export default AllScripturesPage;

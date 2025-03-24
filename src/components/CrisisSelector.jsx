import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const crises = [
  "Health Issues",
  "Depression & Emotional Struggles",
  "Sudden & Unforeseen Misfortune",
  "Relationship & Social Conflicts",
  "Career Struggles & Setbacks",
  "Parenting Stress & Challenges",
];

const CrisisSelector = () => {
  const [selectedCrises, setSelectedCrises] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleCrisis = (crisis) => {
    setSelectedCrises((prev) =>
      prev.includes(crisis)
        ? prev.filter((c) => c !== crisis)
        : [...prev, crisis]
    );
  };

  const fetchScriptures = async () => {
    if (selectedCrises.length === 0) {
      setAnswers([]);
      return;
    }

    setLoading(true);
    try {
      const query = selectedCrises
        .map((c) => `crises=${encodeURIComponent(c)}`)
        .join("&");
      const response = await fetch(
        `http://localhost:5000/scriptures/crisis-selection?${query}`
      );

      const data = await response.json(); // assuming your Flask returns JSON
      console.log("📦 Backend response:", data); // 💡 See what's returned
      setAnswers(data); // ✅ FIXED: Use entire response object
    } catch (error) {
      console.error("Error fetching scriptures:", error);
      setAnswers(["Something went wrong. Please try again."]);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 text-yellow-900 rounded-lg">
      {/* <h3 className="hidden sm:block text-lg font-semibold text-center">
        To begin, click the buttons below to select or deselect your <br />{" "}
        concerns and choose the areas of life you'd like to improve.
      </h3> */}

      <h3 className="sm:hidden text-lg font-semibold text-center">
        To begin, click the buttons below to select or deselect your concerns
        and choose the areas of life you'd like to improve.
      </h3>

      {/* ✅ Use a grid system to control the number of columns based on screen size */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {crises.map((crisis) => (
          <button
            key={crisis}
            onClick={() => toggleCrisis(crisis)}
            className={`px-4 py-2 rounded-lg shadow-md transition text-center ${
              selectedCrises.includes(crisis) ? "bg-yellow-200" : "bg-yellow-50"
            }`}
          >
            {crisis}
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-10">
        <p className="text-lg font-medium text-center">
          Selected: {selectedCrises.join(", ") || "None"}
        </p>
        {/* <Link
          to=""
          className="bg-yellow-100 text-yellow-1000 text-center font-bold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition flex items-center justify-center"
        >
          show answer
        </Link> */}

        <button
          onClick={fetchScriptures}
          className="bg-yellow-100 text-yellow-1000 text-center font-bold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition flex items-center justify-center"
        >
          {loading ? "Loading..." : "Show Answer"}
        </button>

        {Object.keys(answers).length > 0 && (
          <div className="mt-6 w-full max-w-3xl mx-auto space-y-6">
            {Object.entries(answers).map(([crisis, sections]) => (
              <div
                key={crisis}
                className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 shadow"
              >
                <h4 className="text-xl font-bold text-yellow-900 mb-2">
                  📌 {crisis}
                </h4>

                {/* Foundation */}
                <div className="mb-3">
                  <h5 className="font-semibold text-yellow-800">
                    🌱 Foundation
                  </h5>
                  {sections.foundation.length > 0 ? (
                    <ul className="list-disc list-inside text-yellow-800">
                      {sections.foundation.map((s, i) => (
                        <li key={i}>{s.name}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm italic text-yellow-600">None</p>
                  )}
                </div>

                {/* Main */}
                <div className="mb-3">
                  <h5 className="font-semibold text-yellow-800">🎯 Main</h5>
                  {sections.main.length > 0 ? (
                    <ul className="list-disc list-inside text-yellow-800">
                      {sections.main.map((s, i) => (
                        <li key={i}>{s.name}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm italic text-yellow-600">None</p>
                  )}
                </div>

                {/* Help */}
                <div>
                  <h5 className="font-semibold text-yellow-800">✨ Help</h5>
                  {sections.help.length > 0 ? (
                    <ul className="list-disc list-inside text-yellow-800">
                      {sections.help.map((s, i) => (
                        <li key={i}>{s.name}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm italic text-yellow-600">None</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default CrisisSelector;

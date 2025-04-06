import { useState } from "react";
import { backendURL } from "../../config";
import { useNavigate } from "react-router-dom";

import { useFetchScripturesByCrisis } from "../../hooks";

import CrisisAnswerBlock from "../common/CrisisAnswerBlock";

const crises = [
  "Health Issues",
  "Depression & Emotional Struggles",
  "Sudden & Unforeseen Misfortune",
  "Relationship & Social Conflicts",
  "Career Struggles & Setbacks",
  "Parenting Stress & Challenges",
];

const CrisisSelector = () => {
  const [collapsed, setCollapsed] = useState({});

  const navigate = useNavigate(); // ✅ Added

  const {
    answers,
    setAnswers,
    loadingCrisis,
    setLoadingCrisis,
    fetchScripturesSetAnswers,
  } = useFetchScripturesByCrisis(backendURL);

  const toggleCollapse = (crisis) => {
    setCollapsed((prev) => ({
      ...prev,
      [crisis]: !prev[crisis],
    }));
  };

  const resetAll = () => {
    setAnswers({});
    setCollapsed({});
    setLoadingCrisis("");
  };

  // ✅ Replace old click handler
  const handleClickScripture = (scripture) => {
    navigate(`/scriptures/${scripture.id}`);
  };

  return (
    <div className="p-4 text-yellow-900 rounded-lg">
      <div className="text-lg font-semibold text-center mb-4">
        <p>🌟 Whatever you're going through — You can change it!</p>
        <p>
          💖 You are Not alone, you are Not helpless, you are Not hopeless! 🌈
        </p>
      </div>

      {/* Crisis buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {crises.map((crisis) => (
          <button
            key={crisis}
            onClick={() => fetchScripturesSetAnswers(crisis)}
            className={`cursor-pointer px-4 py-2 rounded-lg shadow-md transition text-center ${
              answers[crisis]
                ? "bg-yellow-300"
                : "bg-yellow-50 hover:bg-yellow-100"
            }`}
          >
            {loadingCrisis === crisis ? "Loading..." : crisis}
          </button>
        ))}
      </div>

      {/* Results */}
      {Object.entries(answers).map(([crisis, sections]) => (
        <div
          key={crisis}
          className="mt-6 bg-yellow-50 border border-yellow-300 rounded-lg p-4 w-full max-w-3xl mx-auto shadow"
        >
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-xl font-bold text-yellow-900">📌 {crisis}</h4>
            <button
              onClick={() => toggleCollapse(crisis)}
              className="cursor-pointer text-sm text-yellow-800 underline hover:text-yellow-600"
            >
              {collapsed[crisis] ? "Expand" : "Collapse"}
            </button>
          </div>

          {!collapsed[crisis] && (
            <div>
              <CrisisAnswerBlock
                title="Foundation"
                icon="🌱"
                items={sections.foundation}
                onItemClick={handleClickScripture}
              />
              <CrisisAnswerBlock
                title="Main"
                icon="🎯"
                items={sections.main}
                onItemClick={handleClickScripture}
              />
              <CrisisAnswerBlock
                title="Help"
                icon="✨"
                items={sections.help}
                onItemClick={handleClickScripture}
              />
            </div>
          )}
        </div>
      ))}

      {/* Reset Button */}
      {Object.keys(answers).length > 0 && (
        <div className="text-center mt-6">
          <button
            onClick={resetAll}
            className="cursor-pointer bg-yellow-100 hover:bg-yellow-200 text-yellow-900 font-semibold px-6 py-2 rounded-full shadow"
          >
            🔄 Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default CrisisSelector;

// src/hooks/useFetchScripturesByCrisis.js
import { useState } from "react";

const useFetchScripturesByCrisis = (backendURL) => {
  const [loadingCrisis, setLoadingCrisis] = useState("");
  const [answers, setAnswers] = useState({});

  const fetchScripturesSetAnswers = async (crisis) => {
    // Toggle logic: if the crisis already exists, remove it
    if (answers[crisis]) {
      setAnswers((prev) => {
        const updated = { ...prev };
        delete updated[crisis];
        return updated;
      });
      return; // Skip the fetch — just removed it
    }

    // Otherwise, fetch as normal
    setLoadingCrisis(crisis);
    try {
      const query = `crises=${encodeURIComponent(crisis)}`;
      const response = await fetch(
        `${backendURL}/scriptures/crisis-selection?${query}`
      );
      const data = await response.json();

      setAnswers((prev) => ({
        ...prev,
        [crisis]: data[crisis],
      }));
    } catch (error) {
      console.error("Error fetching scriptures:", error);
    }
    setLoadingCrisis("");
  };

  return {
    answers,
    setAnswers,
    loadingCrisis,
    setLoadingCrisis,
    fetchScripturesSetAnswers,
  };
};

export default useFetchScripturesByCrisis;

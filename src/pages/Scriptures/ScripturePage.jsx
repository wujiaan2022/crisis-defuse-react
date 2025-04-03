import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { backendURL } from "../../config";
import ScriptureView from "./ScriptureView";

const ScripturePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [scripture, setScripture] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScripture = async () => {
      try {
        const response = await fetch(`${backendURL}/scriptures/${id}`);
        const data = await response.json();

        const audioURL = data.audio ? `${backendURL}/${data.audio}` : null;
        const videoURL = data.video ? `${backendURL}/${data.video}` : null;

        setScripture({
          ...data,
          audio: audioURL,
          video: videoURL,
        });
      } catch (error) {
        console.error("Error fetching scripture:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchScripture();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-yellow-700">
        Loading scripture...
      </div>
    );
  }

  if (!scripture) {
    return (
      <div className="text-center mt-10 text-red-700">Scripture not found.</div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 text-yellow-900">
      {/* Go Back Button */}
      <div className="sticky top-0 bg-white/90 backdrop-blur z-20 p-2">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-yellow-700 underline hover:text-yellow-600"
        >
          ⬅️ Go Back
        </button>
      </div>

      {/* Scripture View */}
      <ScriptureView scripture={scripture} />
    </div>
  );
};

export default ScripturePage;

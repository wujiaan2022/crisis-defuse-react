import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { backendURL } from "../../config";

import ReactMarkdown from "react-markdown";

const TopicArticle = () => {
  const { slug } = useParams();
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const response = await fetch(`${backendURL}/topics/${slug}`);
        const data = await response.json();
        setTopic(data);
      } catch (error) {
        console.error("Error fetching topic:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopic();
  }, [slug]);

  if (loading) {
    return <p className="p-6 text-center text-yellow-600">Loading topic...</p>;
  }

  if (!topic) {
    return <div className="p-6 text-center text-red-600">Topic not found.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto text-yellow-900">
      <h2 className="text-2xl font-bold mb-4">{topic?.title || "Topic"}</h2>
      <ReactMarkdown>{topic?.content || "No content found."}</ReactMarkdown>
      <Link
        to="/topics"
        className="inline-block mt-2 text-sm text-yellow-700 underline hover:text-yellow-500"
      >
        ⬅️ Back to All Topics
      </Link>
    </div>

    // <div className="p-6 max-w-3xl mx-auto text-yellow-900">
    //   <h2 className="text-2xl font-bold mb-4">{topic.title}</h2>
    //   <ReactMarkdown className="prose prose-sm sm:prose lg:prose-lg text-yellow-900">
    //     {topic.content}
    //   </ReactMarkdown>
    //   <div className="text-center mt-6">
    //     <Link
    //       to="/topics"
    //       className="inline-block mt-2 text-sm text-yellow-700 underline hover:text-yellow-500"
    //     >
    //       ⬅️ Back to All Topics
    //     </Link>
    //   </div>
    // </div>
  );
};

export default TopicArticle;

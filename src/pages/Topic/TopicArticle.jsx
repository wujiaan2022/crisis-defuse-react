import { useParams } from "react-router-dom";

const topicContent = {
  "meditation-warning": {
    title: "Why is meditation dangerous for ordinary people?",
    content: `Sitting meditation may seem peaceful, but without pure thoughts and deep mental discipline, ordinary people risk connecting with underground spirits rather than receiving heavenly energy...`,
  },
  "recitation-safety": {
    title: "The safest way to change your destiny: Recitation",
    content: `Reciting Buddhist scriptures is safe, free, and deeply effective. Unlike meditation, it does not require a pure or controlled mind to begin. Even in your hardest moments, you can begin...`,
  },
  "karmic-creditors": {
    title: "Understanding karmic debt and spiritual creditors",
    content: `When someone owes karma from past lives, spirits may seek repayment through emotional, physical, or life obstacles. Recitation helps repay these spiritual debts...`,
  },
};

const TopicArticle = () => {
  const { slug } = useParams();
  const topic = topicContent[slug];

  if (!topic) {
    return <div className="p-6 text-center text-red-600">Topic not found.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto text-yellow-900">
      <h2 className="text-2xl font-bold mb-4">{topic.title}</h2>
      <p className="leading-relaxed whitespace-pre-line">{topic.content}</p>
    </div>
  );
};

export default TopicArticle;

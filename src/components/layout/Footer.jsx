import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-800 text-yellow-100 text-center p-4 mt-8 text-sm md:text-base">
    <p className="font-medium">
      🌟 Stay tuned for our daily hot topic on <strong>Why & How</strong> 🌿
    </p>

    <Link
      to="/topic/meditation-warning"
      className="mt-1 underline hover:text-yellow-300 block"
    >
      🔍 Today's Topic: <span className="italic">Why is meditation dangerous for ordinary people?</span>
    </Link>

    {/* ✨ Subtle All Topics Button */}
    <Link
      to="/topics"
      className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-900 text-xs md:text-sm rounded-full shadow hover:bg-yellow-200 transition"
    >
      📚 Read All Topics
    </Link>
  </footer>
);

export default Footer;

import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-800 text-yellow-100 text-center p-4 mt-8 text-sm md:text-base">
    <p className="font-medium">
      🌟 Stay tuned for our daily hot topic on <strong>Why & How</strong> 🌿
    </p>
    <Link
      to="/topics"
      className="mt-1 underline hover:text-yellow-300 block"
    >
      🔍 Today's Topic: <span className="italic">Why is meditation dangerous for ordinary people?</span>
    </Link>
  </footer>
);

export default Footer;

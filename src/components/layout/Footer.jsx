import { Link } from "react-router-dom";
import headerBg from "../../assets/Rainbow2.jpg";

const Footer = () => (
  <footer
    className="p-4 md:px-8 text-red-950 flex justify-between items-center bg-cover bg-center bg-no-repeat shadow-md"
    style={{ backgroundImage: `url(${headerBg})` }}
  >
    <p className="font-medium">
    🙏🏻 Stay tuned for our daily hot topic on <strong>Why & How</strong> 🌿
    </p>

    <Link
      to="/topic/meditation-warning"
      className="mt-1 hover:text-blue-900 block"
    >
      🔍 Today's Topic:{" "}
      <span className="italic">
        Why is meditation dangerous for ordinary people?
      </span>
    </Link>

    {/* ✨ Subtle All Topics Button */}
    <Link to="/topics" className="mt-1 hover:text-yellow-300 block">
      📚 Read All Topics
    </Link>
  </footer>
);

export default Footer;

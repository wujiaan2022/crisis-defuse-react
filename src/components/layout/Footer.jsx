import { Link } from "react-router-dom";
import headerBg from "../../assets/Rainbow2.jpg";

const Footer = () => (
  <footer
    className="p-4 md:px-8 flex flex-col text-center md:flex-row md:justify-between items-center gap-4 bg-cover bg-center bg-no-repeat shadow-md text-red-950"
    style={{ backgroundImage: `url(${headerBg})` }}
  >
    <p className="font-medium">🙏🏻 Stay tuned for our daily hot topics 🌿</p>

    <Link
      to="/topic/meditation-warning"
      className="mt-1 hover:text-purple-900 block"
    >
      🔍 Today's Topic:{" "}
      <span className="italic">
        Why is meditation dangerous for ordinary people?
      </span>
    </Link>

    {/* ✨ Subtle All Topics Button */}
    <Link to="/topics" className="mt-1 hover:text-purple-900 block">
      📚 Read All Topics
    </Link>
  </footer>
);

export default Footer;

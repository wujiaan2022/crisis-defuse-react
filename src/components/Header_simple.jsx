import { Link } from "react-router-dom";
import headerBg from "../assets/Rainbow2.jpg"; // ✅ Import the image

const Header_simple = () => {
  return (
    <header
      className="p-2 text-red-900 flex justify-between items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <h2 className="text-xl font-bold">
        Crisis Defuse
      </h2>
      <nav className="space-x-4">
        <Link to="" className="hover:underline">
          Contact
        </Link>
        <Link to="" className="hover:underline">
          Login
        </Link>
        <Link to="" className="hover:underline">
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header_simple;

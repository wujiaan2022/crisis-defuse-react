import { Link } from "react-router-dom";
import headerBg from "../../assets/header3.jpg"; // ✅ Import the image

const Header = () => (
  <header
    className="bg-cover bg-center bg-no-repeat
               text-yellow-900 p-6 text-center
               flex flex-col items-center"
    style={{ backgroundImage: `url(${headerBg})` }} // ✅ Set background image dynamically
  >
    <h2
      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center
      mx-auto justify-center w-[90%] lg:w-full break-words"
    >
      Defuse Life’s Crises
      {/* ✅ Text appears as one line on `sm` and larger */}
      <div className="hidden sm:block lg:inline text-center">
        &mdash;Find Peace Without Spending a Penny!
      </div>
      {/* ✅ On extra small screens (`default` behavior), break into two lines */}
      <div className="block sm:hidden text-center justify-center">
        Find Peace Without
      </div>
      <div className="block sm:hidden text-center justify-center">
        Spending a Penny!
      </div>
    </h2>

    <nav
      className="hidden md:flex flex-col md:flex-row justify-center items-center
                 mt-4 gap-2 md:gap-12 p-2 rounded-lg"
    >
      <Link to="" className="hover:underline">
        About Guan Yin <br /> Bodhisattva
      </Link>
      <Link to="" className="hover:underline">
        Buddhist Scriptures <br /> (Ebook & Audio)
      </Link>
      <Link to="" className="hover:underline">
        Performing <br /> Recitation
      </Link>
    </nav>

    <nav
      className="flex flex-col md:hidden justify-center items-center
                 mt-4 gap-2 md:gap-12 p-2 rounded-lg"
    >
      <Link to="" className="hover:underline">
        About Guan Yin Bodhisattva
      </Link>
      <Link to="" className="hover:underline">
        Buddhist Scriptures (Ebook & Audio)
      </Link>
      <Link to="" className="hover:underline">
        Performing Recitation
      </Link>
    </nav>
  </header>
);

export default Header;

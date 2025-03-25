import { Link } from "react-router-dom";
import introBg from "../assets/intro2.png"; // ✅ Background image
import happyFamily from "../assets/happy1.png"; // ✅ Family image

const Intro = () => (
  <div
    className="relative bg-cover bg-center text-center p-5 md:p-12 text-yellow-900 min-h-[500px]"
    style={{ backgroundImage: `url(${introBg})` }}
  >
    {/* ✅ Semi-transparent white overlay */}
    <div
      className="absolute inset-0"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }} // ✅ White with true transparency
    ></div>

    {/* ✅ Responsive Grid Layout */}
    <div className="relative mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4">
      {/* ✅ Highlight Text (Spans 3 cols) */}
      <h2 className="col-span-1 md:col-span-4 lg:col-span-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        The unbelievable power from the recitation of Buddhist scriptures can
        transform your fate and destiny!
      </h2>

      {/* ✅ Image now spans full height (Left Side) */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 flex justify-center">
        <img
          src={happyFamily}
          alt="Happy Family"
          className="rounded-lg shadow-md w-full h-full object-cover max-h-[400px]"
        />
      </div>

      {/* ✅ Scrollable Paragraph Box (Right Side) */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-white bg-opacity-10 p-4 rounded-lg shadow-md h-[180px] md:h-[300px] overflow-y-auto text-left">
        <p>
          Buddhist Scriptures (Sutras) can connect us with the energy of the
          Buddhas and Bodhisattvas, tap into its power to help us solve both our
          day-to-day issues and issues with regards to life and death. In fact,
          we can count on ourselves to change our destiny by focusing on
          performing recitation and cultivating the mind and behaviour, through
          the power of Buddhas and Bodhisattvas. Buddhist scriptures state that
          ‘the karmic reward from performing recitation is unimaginable’ and can
          ‘result in an unimaginable amount of meritorious blessings’. That
          said, recitation of Buddhist scriptures is a speedy way of accruing
          meritorious blessings that will eliminate karmic obstacles.
        </p>
      </div>

      {/* ✅ Learn More Button (Now under text box, aligned right) */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1 flex justify-center items-center md:justify-end">
        <Link
          to=""
          className="bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

export default Intro;

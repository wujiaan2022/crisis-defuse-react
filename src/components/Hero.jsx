import { Link } from "react-router-dom";
import introBg from "../assets/intro1.jpg"; // ✅ Background image
import happyFamily from "../assets/happy1.png"; // ✅ Family image

const Hero = () => (
  <div
    className="relative bg-cover bg-center text-center p-5 text-yellow-900 min-h-[500px]"
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
      <h2 className="mt-0 mb-5 col-span-1 md:col-span-4 lg:col-span-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-950 font-bold text-left tracking-wider">
        Happiness is not far away!
      </h2>

      {/* ✅ Image now spans full height (Left Side) */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 flex justify-center">
        <img
          src={happyFamily}
          alt="Happy Family"
          className="rounded-lg shadow-md w-full h-full object-cover max-h-[400px]"
        />
      </div>

      <p className="col-span-1 md:col-span-2 lg:col-span-1 text-lg md:text-xl font-medium md:font-semibold leading-relaxed text-left space-y-5 tracking-wider">
        <p className="text-black font-bold tracking-wide">
          The incredible power of Buddhist scripture recitation can transform
          your fate and destiny.
        </p>

        <p className="text-black font-bold tracking-wide">
          Unlock the Power of Scriptures & Rewrite Your Fate!
        </p>

        <p className="text-black font-bold tracking-wide">
          Don’t wait—start today, start now!
        </p>
        <p className="text-red-950 tracking-wide">
          To begin, click the buttons below to select or deselect your concerns
          and choose the areas of life you'd like to improve.
        </p>
      </p>
    </div>
  </div>
);

export default Hero;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../auth/AuthModal";
import headerBg from "../../assets/Rainbow2.jpg";

const Header = () => {
  const [modalType, setModalType] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setUserName(null);
  };

  const handleOpen = (type) => {
    setModalType(type);
  };

  const handleClose = () => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName); // 👈 Update Header
    setModalType(null); // 👈 Close the modal
  };

  return (
    <>
      <header
        className="p-4 md:px-8 text-red-950 flex justify-between items-center bg-cover bg-center bg-no-repeat shadow-md"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        {/* Logo / App Name */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide drop-shadow-md">
          Crisis Defuse
        </h1>

        {/* Navigation / User Section */}
        <nav className="flex items-center gap-6 text-base">
          <button
            onClick={() =>
              window.open(
                "https://wa.me/4915566355818?text=Hello%2C%20I%20need%20help%20with%20chanting",
                "_blank"
              )
            }
            className="text-green-800 hover:underline cursor-pointer"
          >
            WhatsApp
          </button>

          {userName ? (
            <>
              <span className="font-semibold">Hello, {userName}</span>
              <button
                onClick={handleLogout}
                className="cursor-pointer text-sm bg-yellow-600 hover:bg-yellow-500 text-white px-3 py-1 rounded shadow"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleOpen("login")}
                className="cursor-pointer hover:underline"
              >
                Login
              </button>
              <button
                onClick={() => handleOpen("register")}
                className="cursor-pointer hover:underline"
              >
                Register
              </button>
            </>
          )}
        </nav>
      </header>

      {modalType && <AuthModal type={modalType} onClose={handleClose} />}
    </>
  );
};

export default Header;

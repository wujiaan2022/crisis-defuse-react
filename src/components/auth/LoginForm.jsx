import { useState } from "react";

import { backendURL } from "../../config";

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${backendURL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Save token & name in localStorage
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("userName", data.name);

        // ✅ Show success message
        setSuccessMessage(`Welcome back, ${data.name}!`);

        // ✅ Auto-close modal after 2.5 seconds
        setTimeout(() => {
          onClose();
        }, 2500);
      } else {
        alert(data.description || "Login failed");
      }
    } catch (err) {
      alert("Server error. Try again.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      {successMessage && (
        <div className="bg-green-100 text-green-800 p-3 rounded text-sm text-center font-medium">
          {successMessage}
        </div>
      )}

      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          type="email"
          className="w-full border border-yellow-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Password</label>
        <input
          type="password"
          className="w-full border border-yellow-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;

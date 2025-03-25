import { useState } from "react";

const RegisterForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Store token and name like login
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("userName", data.name);

        // ✅ Show success message
        setSuccessMessage("Registration successful! Welcome, " + data.name);

        // ✅ Auto-close modal after 2.5 seconds
        setTimeout(() => {
          onClose();
        }, 2500);
      } else {
        alert(data.description || "Error during registration");
      }
    } catch (err) {
      alert("Server error. Try again.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {successMessage && (
        <div className="bg-green-100 text-green-800 p-3 rounded text-sm text-center font-medium">
          {successMessage}
        </div>
      )}

      <div>
        <label className="block font-medium mb-1">Name</label>
        <input
          name="name"
          className="w-full border border-yellow-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          name="email"
          type="email"
          className="w-full border border-yellow-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Password</label>
        <input
          name="password"
          type="password"
          className="w-full border border-yellow-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-2 rounded"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

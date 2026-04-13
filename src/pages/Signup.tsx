import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg">
      <form
        onSubmit={handleSignup}
        className="bg-white p-10 rounded-2xl shadow-xl flex flex-col gap-5 w-[400px]"
      >
        <h2 className="text-2xl font-bold text-center text-black">Sign Up</h2>

        <input
          type="text"
          placeholder="Username"
          className="p-4 text-black bg-gray-100 rounded-lg text-lg"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 text-black bg-gray-100 rounded-lg text-lg"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-green-500 text-white p-3 rounded-lg text-lg hover:bg-green-600">
          Sign Up
        </button>

        <p
          className="text-center text-blue-500 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </p>
      </form>
    </div>
  );
}
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "jobseeker") navigate("/jobseeker-dashboard");
    else navigate("/employer-dashboard");
  };

  const handleSignup = () => navigate("/signup");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login as {role}</h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="border px-4 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-4 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <button onClick={handleSignup} className="text-blue-600 hover:underline">
            Signup
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;

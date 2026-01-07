import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role"); // role from home
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // TODO: call backend API to create user
    if (role === "jobseeker") navigate("/jobseeker-dashboard");
    else navigate("/employer-dashboard");
  };

  return (
    <div className="signup">
      <h2>Signup as {role}</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;

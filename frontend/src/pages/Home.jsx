import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleRole = (role) => {
    localStorage.setItem("role", role); // store role temporarily
    navigate("/login");
  };

  return (
    <div className="home">
      <h1>Welcome to JobNest</h1>
      <p>Select your role to continue:</p>
      <button onClick={() => handleRole("jobseeker")}>Job Seeker</button>
      <button onClick={() => handleRole("employer")}>Employer</button>
    </div>
  );
}

export default Home;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import JobSeekerDashboard from "./pages/JobSeekerDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobseeker-dashboard" element={<JobSeekerDashboard />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

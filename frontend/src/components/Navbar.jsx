import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav className="bg-white border-b border-gray-300 p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-gray-800">
        JobNest
      </Link>

      {/* Buttons */}
      <div className="flex gap-3">
        {/* Login Button */}
        <Link
          to="/login"
          className="px-5 py-2.5 border-2 border-black rounded-full text-black hover:bg-gray-100 transition"
        >
          Login
        </Link>

        {/* Signup Button */}
        <Link
          to="/signup"
          className="px-5 py-2.5 border-2 border-blue-300 rounded-full bg-blue-200 text-blue-800 hover:bg-blue-300 transition"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

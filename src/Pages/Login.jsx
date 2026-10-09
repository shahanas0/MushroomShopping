import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username && !password) {
      setError("Please enter username and password");
      return;
    }

    if (!username) {
      setError("Please enter username");
      return;
    }

    if (!password) {
      setError("Please enter password");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    alert("Login successful!");
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-5">



      <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex w-full max-w-5xl p-10">

        {/* Image */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnk6ZGPAAn80mG64M0rfITlgrSwQBXSh1DWHq9JnbbAw&s=10"
            alt="Mushroom"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Login Form */}
        <div className="w-full md:w-1/2 p-10">

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>

          <p className="text-gray-500 mb-8">
            Login to your mushroom shop account
          </p>

          <form onSubmit={handleLogin} className="font-bold">

            {/* Username */}
            <div className="mb-5">


              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-700 placeholder-gray-500 placeholder:font-normal"
              />
            </div>

            {/* Password */}
            <div className="mb-5">


              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-700 placeholder-gray-500 placeholder:font-normal"
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm mb-4">
                {error}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-700 text-white py-4 border rounded-lg font-semibold hover:bg-white hover:text-orange-700 hover:border-2 border-orange-700 cursor-pointer transition"
            >
              Login
            </button>

          </form>

          <p className="text-center text-gray-500 mt-6">
            Don't have an account?
            <span className="text-orange-700 font-semibold ml-1 cursor-pointer hover:underline">
              <Link to={"/register"}>Register</Link>
            </span>
          </p>
          <div className="text-center mt-6">
            <Link to={"/"}>
              <p className="text-orange-700 font-bold text-xl animate-pulse"> ⬅ Back</p>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
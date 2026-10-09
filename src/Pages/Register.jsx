import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [profileImage, setProfileImage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!profileImage || !username || !password || !phone || !email) {
      setError("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (phone.length < 10) {
      setError("Enter a valid phone number");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    setError("");
    alert("Registration successful!");
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-5">

      <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex w-full max-w-6xl">

        {/* Register Form */}
        <div className="w-full md:w-1/2 p-10">

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Create Account
          </h1>

          <p className="text-gray-500 mb-7">
            Register to start shopping
          </p>

          <form onSubmit={handleRegister} className="font-bold">

            <input
              type="text"
              placeholder="Profile Image URL"
              value={profileImage}
              onChange={(e) => setProfileImage(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 mb-4 outline-none focus:border-orange-700 placeholder-gray-500 placeholder:font-normal"
            />

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 mb-4 outline-none focus:border-orange-700 placeholder-gray-500 placeholder:font-normal"
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 mb-4 outline-none focus:border-orange-700 placeholder-gray-500 placeholder:font-normal"
            />

            <input
              type="tel"
              placeholder="Enter Phone No"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 mb-4 outline-none focus:border-orange-700 placeholder-gray-500 placeholder:font-normal"
            />

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 mb-4 outline-none focus:border-orange-700 placeholder-gray-500 placeholder:font-normal"
            />

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm mb-4">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-orange-700 text-white py-4 border rounded-lg font-semibold hover:bg-white hover:text-orange-700 hover:border-2 border-orange-700 cursor-pointer transition"
            >
              Register
            </button>

          </form>

          <p className="text-center text-gray-500 mt-5">
            Already have an account?
            <span className="text-orange-700 font-semibold ml-1 cursor-pointer hover:underline">
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
          <div className="text-center mt-6">
            <Link to={"/"}>
              <p className="text-orange-700 font-bold text-xl animate-pulse"> ⬅ Back</p>
            </Link>
          </div>

        </div>

        {/* Image */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSqcvCAhnKiUTRUlDLOzpOrlvIqYoAp2grnertqVyOFA&s=10"
            alt="Mushroom"
            className="w-full h-full object-cover "
          />
        </div>

      </div>
    </div>
  );
};

export default Register;
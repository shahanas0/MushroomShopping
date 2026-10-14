
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
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-3 py-4 sm:px-5 lg:h-screen lg:w-full lg:p-0 lg:overflow-hidden">

      <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row w-full max-w-6xl lg:h-full lg:max-w-none lg:rounded-none">

        {/* Register Form */}
        <div className="w-full md:w-1/2 p-5 sm:p-7 md:p-6 lg:flex lg:flex-col lg:justify-center lg:p-5 xl:p-8">

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
            Create Account
          </h1>

          <p className="text-gray-500 mb-4 sm:mb-5">
            Register to start shopping
          </p>

          <form onSubmit={handleRegister} className="font-bold">

            <input
              type="text"
              placeholder="Profile Image URL"
              value={profileImage}
              onChange={(e) => setProfileImage(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-3 py-2.5 mb-3 outline-none focus:border-orange-700 placeholder-gray-500 placeholder:font-normal"
            />

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-3 py-2.5 mb-3 outline-none focus:border-orange-700 placeholder-gray-500 placeholder:font-normal"
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-3 py-2.5 mb-3 outline-none focus:border-orange-700 placeholder-gray-500 placeholder:font-normal"
            />

            <input
              type="tel"
              placeholder="Enter Phone No"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-3 py-2.5 mb-3 outline-none focus:border-orange-700 placeholder-gray-500 placeholder:font-normal"
            />

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-3 py-2.5 mb-3 outline-none focus:border-orange-700 placeholder-gray-500 placeholder:font-normal"
            />

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm mb-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-orange-700 text-white py-3 border rounded-lg font-semibold hover:bg-white hover:text-orange-700 hover:border-2 border-orange-700 cursor-pointer transition"
            >
              Register
            </button>

          </form>

          <p className="text-center text-gray-500 mt-3 text-sm sm:text-base">
            Already have an account?
            <span className="text-orange-700 font-semibold ml-1 cursor-pointer hover:underline">
              <Link to={"/login"}>Login</Link>
            </span>
          </p>

          <div className="text-center mt-3">
            <Link to={"/"}>
              <p className="text-orange-700 font-bold text-lg sm:text-xl animate-pulse">
                ⬅ Back
              </p>
            </Link>
          </div>

        </div>

        {/* Image */}
        <div className="hidden md:block w-full md:w-1/2 lg:h-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSqcvCAhnKiUTRUlDLOzpOrlvIqYoAp2grnertqVyOFA&s=10"
            alt="Mushroom"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Register;



import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim() && !password) {
      setError("Please enter username and password");
      return;
    }

    if (!username.trim()) {
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
    <div className="flex min-h-screen items-center justify-center bg-orange-50 px-3 py-4 sm:px-6 md:py-8 lg:h-screen lg:w-full lg:overflow-hidden lg:p-0">

      <div className="flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:flex-row lg:h-full lg:max-w-none lg:rounded-none">

        <div className="hidden w-full md:block md:w-1/2 lg:h-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnk6ZGPAAn80mG64M0rfITlgrSwQBXSh1DWHq9JnbbAw&s=10"
            alt="Mushroom"
            className="h-full min-h-0 w-full object-cover"
          />
        </div>

        <div className="w-full p-5 sm:p-7 md:w-1/2 md:p-6 lg:flex lg:flex-col lg:justify-center lg:p-8 xl:px-14">

          <h1 className="mb-1 text-2xl font-bold text-gray-800 sm:text-3xl">
            Welcome Back
          </h1>

          <p className="mb-4 text-sm text-gray-500 sm:mb-6 sm:text-base">
            Login to your mushroom shop account
          </p>

          <form onSubmit={handleLogin}>

            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="username"
                className="mb-1 block text-sm font-semibold text-gray-700"
              >
                Username
              </label>

              <input
                id="username"
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
                autoComplete="username"
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2.5 outline-none transition focus:border-orange-700 placeholder:font-normal"
              />
            </div>

            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-semibold text-gray-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                autoComplete="current-password"
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2.5 outline-none transition focus:border-orange-700 placeholder:font-normal"
              />
            </div>

            {error && (
              <p role="alert" className="mb-3 text-sm text-red-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg border-2 border-orange-700 bg-orange-700 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-orange-700 sm:py-3"
            >
              Login
            </button>

          </form>

          <p className="mt-4 text-center text-sm text-gray-500 sm:mt-5 sm:text-base">
            Don't have an account?
            <Link
              to="/register"
              className="ml-1 font-semibold text-orange-700 hover:underline"
            >
              Register
            </Link>
          </p>

          <div className="mt-4 text-center sm:mt-5">
            <Link
              to="/"
              className="inline-block text-lg font-bold text-orange-700 transition hover:-translate-x-1 sm:text-xl"
            >
              ⬅ Back
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;


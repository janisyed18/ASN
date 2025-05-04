// src/pages/staff/StaffLogin.js

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const DUMMY_STAFF = {
  staff1: "pass123",
  staff2: "pass123",
};

export default function StaffLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (DUMMY_STAFF[username] === password) {
      // clear and redirect into portal
      setError("");
      navigate("/staff/attendance");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-8 rounded-lg shadow"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Staff Login</h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="username">
            Username
          </label>
          <div className="relative">
            <UserIcon className="w-5 h-5 absolute left-3 top-1/2 -mt-2 text-gray-400" />
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="pl-10 w-full border rounded-lg py-2 focus:ring-2 focus:ring-indigo-400"
              placeholder="staff1"
              autoFocus
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <LockClosedIcon className="w-5 h-5 absolute left-3 top-1/2 -mt-2 text-gray-400" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 w-full border rounded-lg py-2 focus:ring-2 focus:ring-indigo-400"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Log In
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Use <code>staff1</code> / <code>pass123</code> or <code>staff2</code>{" "}
          / <code>pass123</code>
        </p>

        <p className="mt-2 text-center text-sm">
          <Link to="/" className="text-indigo-600 hover:underline">
            ← Back to Home
          </Link>
        </p>
      </form>
    </div>
  );
}

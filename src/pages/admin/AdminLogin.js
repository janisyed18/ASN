import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AtSymbolIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Dummy admin credentials:
  const DUMMY = { email: "admin@asn.edu", password: "admin123" };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (
        form.email.trim().toLowerCase() === DUMMY.email &&
        form.password === DUMMY.password
      ) {
        navigate("/admin/dashboard");
      } else {
        setError("Invalid admin email or password");
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block relative">
            <AtSymbolIcon className="w-5 h-5 text-gray-400 absolute top-3 left-3" />
            <input
              type="email"
              name="email"
              placeholder="admin@asn.edu"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </label>

          <label className="block relative">
            <LockClosedIcon className="w-5 h-5 text-gray-400 absolute top-3 left-3" />
            <input
              type="password"
              name="password"
              placeholder="admin123"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center bg-primary text-white py-3 rounded-lg font-medium hover:bg-secondary transition disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

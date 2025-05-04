// src/pages/student/Feedback.js
import React, { useState } from "react";

export default function Feedback() {
  const [form, setForm] = useState({ subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = () => {
    if (!form.subject || !form.message) {
      setStatus("Please fill both fields.");
      return;
    }
    // TODO: call API
    setStatus("Thank you! Your feedback has been submitted.");
    setForm({ subject: "", message: "" });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Feedback / Grievance</h1>

      {status && (
        <div
          className={`p-4 rounded ${
            status.startsWith("Thank")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <label className="block">
          <span className="text-gray-700">Subject</span>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Message</span>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
          />
        </label>

        <button
          onClick={submit}
          className="mt-2 bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
}

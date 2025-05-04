// src/pages/staff/CreateEvent.js
import React, { useState } from "react";

export default function CreateEvent() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    description: "",
  });

  const handle = (field, val) => setForm((f) => ({ ...f, [field]: val }));

  const submit = () => {
    // TODO: send `form` to backend
    alert("Event created:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Create Event / Fest</h2>

      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => handle("title", e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Event title"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => handle("date", e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => handle("description", e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Brief description"
          />
        </div>
      </div>

      <button
        onClick={submit}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
      >
        Create Event
      </button>
    </div>
  );
}

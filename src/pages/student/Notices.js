// src/pages/student/Notices.js
import React, { useState, useEffect } from "react";

const SAMPLE = [
  {
    date: "2025-03-31",
    title: "Summer Break",
    body: "College closed April 10–20 for summer holidays.",
  },
  {
    date: "2025-03-14",
    title: "Lab Inauguration",
    body: "New CS lab inaugurated March 20 at 10 AM.",
  },
  {
    date: "2025-02-27",
    title: "Guest Lecture",
    body: "Lecture on Quantum Mechanics by Prof X on March 5.",
  },
];

export default function Notices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // TODO: fetch from API
    setNotices(SAMPLE);
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-6">Notices</h1>
      {notices.map((n) => (
        <div
          key={n.date}
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <p className="text-gray-500 mb-1">
            {new Date(n.date).toLocaleDateString()}
          </p>
          <h2 className="text-lg font-semibold mb-2">{n.title}</h2>
          <p className="text-gray-700">{n.body}</p>
        </div>
      ))}
    </div>
  );
}

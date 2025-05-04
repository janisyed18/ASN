// src/pages/student/Timetable.js
import React, { useState, useEffect } from "react";

const SAMPLE = [
  { day: "Monday", slots: ["Math", "Physics", "Chemistry"] },
  { day: "Tuesday", slots: ["English", "Computer Sci", "Lab"] },
  { day: "Wednesday", slots: ["Biology", "Maths", "Physics"] },
  { day: "Thursday", slots: ["Chemistry", "English", "Computer Sci"] },
  { day: "Friday", slots: ["Lab", "Biology", "Maths"] },
];

export default function Timetable() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    // TODO: fetch from API
    setTable(SAMPLE);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Timetable</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Day / Time</th>
              <th className="px-6 py-3 text-left">9:00–10:00</th>
              <th className="px-6 py-3 text-left">10:15–11:15</th>
              <th className="px-6 py-3 text-left">11:30–12:30</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {table.map((row) => (
              <tr key={row.day} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-semibold">{row.day}</td>
                {row.slots.map((cls, idx) => (
                  <td key={idx} className="px-6 py-4">
                    <span className="inline-block bg-primary/20 text-primary px-2 py-1 rounded-full text-sm font-medium">
                      {cls}
                    </span>
                  </td>
                ))}
                {row.slots.length < 3 &&
                  Array.from({ length: 3 - row.slots.length }).map((_, k) => (
                    <td key={`empty-${k}`} className="px-6 py-4 text-gray-300">
                      —
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// src/pages/student/Attendance.js
import React, { useState, useEffect } from "react";

const SAMPLE = [
  { subject: "Mathematics", present: 45, total: 50 },
  { subject: "Physics", present: 40, total: 50 },
  { subject: "Chemistry", present: 48, total: 50 },
  { subject: "English", present: 50, total: 50 },
];

export default function Attendance() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: fetch from API
    setData(SAMPLE);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Attendance Summary</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Subject</th>
              <th className="px-6 py-3 text-left">Present</th>
              <th className="px-6 py-3 text-left">Total</th>
              <th className="px-6 py-3 text-left">% Attendance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row) => {
              const pct = ((row.present / row.total) * 100).toFixed(1);
              return (
                <tr key={row.subject} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">{row.subject}</td>
                  <td className="px-6 py-4">{row.present}</td>
                  <td className="px-6 py-4">{row.total}</td>
                  <td className="px-6 py-4 text-green-600 font-medium">
                    {pct}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

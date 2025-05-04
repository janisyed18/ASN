// src/pages/student/Results.js
import React, { useState, useEffect } from "react";

const SAMPLE = [
  { subject: "Mathematics", marks: 92, grade: "A" },
  { subject: "Physics", marks: 85, grade: "A-" },
  { subject: "Chemistry", marks: 88, grade: "A" },
  { subject: "English", marks: 79, grade: "B+" },
];

export default function Results() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: fetch from API
    setData(SAMPLE);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Results &amp; Grades</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Subject</th>
              <th className="px-6 py-3 text-left">Marks</th>
              <th className="px-6 py-3 text-left">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((r) => (
              <tr key={r.subject} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">{r.subject}</td>
                <td className="px-6 py-4">{r.marks}</td>
                <td className="px-6 py-4 font-semibold">{r.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

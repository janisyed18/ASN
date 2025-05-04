// src/pages/staff/MarkAttendance.js

import React, { useState, useEffect, useMemo } from "react";
import { CalendarIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function MarkAttendance() {
  const STUDENTS = useMemo(
    () => ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace"],
    []
  );

  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [search, setSearch] = useState("");
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    const initMap = {};
    STUDENTS.forEach((s) => (initMap[s] = false));
    setAttendance(initMap);
  }, [STUDENTS]);

  const filtered = useMemo(
    () =>
      STUDENTS.filter((s) =>
        s.toLowerCase().includes(search.trim().toLowerCase())
      ),
    [search, STUDENTS]
  );

  const toggleOne = (name, value) =>
    setAttendance((a) => ({ ...a, [name]: value }));

  const allChecked = filtered.every((s) => attendance[s]);
  const toggleAll = (value) => {
    setAttendance((a) => {
      const copy = { ...a };
      filtered.forEach((s) => (copy[s] = value));
      return copy;
    });
  };

  const presentCount = filtered.filter((s) => attendance[s]).length;
  const totalCount = filtered.length;

  const handleExport = () => {
    const rows = [
      ["Date", date],
      [],
      ["Student", "Present"],
      ...filtered.map((s) => [s, attendance[s] ? "Yes" : "No"]),
    ];
    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `attendance_${date}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Toolbar */}
      <div className="sticky top-20 bg-white z-10 shadow p-4 md:flex md:items-center md:justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-6 w-6 text-indigo-600" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-3 py-1 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="relative flex-1 max-w-xs">
          <input
            type="text"
            placeholder="Search students…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-3 py-1 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => toggleAll(!allChecked)}
            className="inline-flex items-center space-x-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            <span>{allChecked ? "Unselect All" : "Select All"}</span>
          </button>

          <button
            onClick={handleExport}
            className="inline-flex items-center space-x-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            <span>Export CSV</span>
          </button>

          <div className="text-gray-700">
            Present:{" "}
            <span className="font-semibold text-indigo-600">
              {presentCount}
            </span>{" "}
            / {totalCount}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto p-4">
        <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
          <thead className="bg-indigo-600 text-white sticky top-0">
            <tr>
              <th className="px-6 py-3 text-left">Student</th>
              <th className="px-6 py-3 text-center">Present</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((name) => (
              <tr key={name} className="border-b hover:bg-indigo-50 transition">
                <td className="px-6 py-3">{name}</td>
                <td className="px-6 py-3 text-center">
                  <input
                    type="checkbox"
                    checked={attendance[name]}
                    onChange={(e) => toggleOne(name, e.target.checked)}
                    className="h-5 w-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-400"
                  />
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={2}
                  className="p-4 text-center text-gray-500 italic"
                >
                  No students match “{search}”
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Save */}
      <div className="px-4 pb-6">
        <button
          onClick={() =>
            alert(
              `Saved attendance for ${date}\n\n` +
                JSON.stringify(attendance, null, 2)
            )
          }
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Save Attendance
        </button>
      </div>
    </div>
  );
}

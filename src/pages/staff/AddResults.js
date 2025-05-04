// src/pages/staff/AddResults.js

import React, { useState, useMemo } from "react";
import Select from "react-select";
import { FaBook } from "react-icons/fa";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const studentOptions = [
  { value: "alice", label: "Alice Johnson" },
  { value: "bob", label: "Bob Smith" },
  { value: "charlie", label: "Charlie Lee" },
  // …add your real student list here
];

const subjects = ["Mathematics", "Physics", "Chemistry", "English"];

// simple grade mapping
function getGrade(score) {
  if (score >= 90) return "A+";
  if (score >= 80) return "A";
  if (score >= 70) return "B+";
  if (score >= 60) return "B";
  if (score >= 50) return "C";
  return "F";
}

export default function AddResults() {
  const [student, setStudent] = useState(null);
  const [marks, setMarks] = useState(
    subjects.reduce((acc, s) => ({ ...acc, [s]: "" }), {})
  );
  const [submitted, setSubmitted] = useState(false);

  // handle input change
  const onChangeMark = (subject, value) => {
    const num = value === "" ? "" : Math.max(0, Math.min(100, Number(value)));
    setMarks((m) => ({ ...m, [subject]: num }));
    setSubmitted(false);
  };

  // is form valid?
  const allFilled = useMemo(
    () =>
      student &&
      subjects.every((s) => marks[s] !== "" && !isNaN(Number(marks[s]))),
    [student, marks]
  );

  // overall average
  const average =
    allFilled &&
    (
      subjects.reduce((sum, s) => sum + Number(marks[s]), 0) / subjects.length
    ).toFixed(1);

  const handleSubmit = () => {
    // TODO: POST to backend
    console.log("Submitted:", student, marks);
    setSubmitted(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Card container */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 px-6 py-4 flex items-center">
            <FaBook className="h-6 w-6 text-white mr-3" />
            <h1 className="text-white text-2xl font-semibold">
              Add Student Results
            </h1>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6">
            {/* Student selector */}
            <div>
              <label className="block text-gray-700 mb-2">Select student</label>
              <Select
                options={studentOptions}
                value={student}
                onChange={(opt) => {
                  setStudent(opt);
                  setSubmitted(false);
                }}
                placeholder="Search & select..."
                className="react-select-container"
                classNamePrefix="react-select"
                isClearable
              />
            </div>

            {/* Results table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg table-auto">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Subject</th>
                    <th className="px-4 py-3 text-left">Marks (%)</th>
                    <th className="px-4 py-3 text-left">Progress</th>
                    <th className="px-4 py-3 text-left">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subj) => {
                    const val = marks[subj];
                    const pct = val === "" ? 0 : Number(val);
                    return (
                      <tr
                        key={subj}
                        className="border-b last:border-0 hover:bg-gray-50"
                      >
                        <td className="px-4 py-3">{subj}</td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={val}
                            onChange={(e) => onChangeMark(subj, e.target.value)}
                            className="w-20 border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
                            <div
                              className="h-full bg-indigo-600 transition-width duration-300"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          {val === "" ? "—" : getGrade(pct)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Summary & Submit */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                {allFilled && (
                  <div className="text-lg text-gray-800">
                    Average:{" "}
                    <span className="font-semibold text-indigo-600">
                      {average}%
                    </span>{" "}
                    <CheckCircleIcon className="inline h-5 w-5 text-green-500 -mt-1" />
                  </div>
                )}
                {submitted && (
                  <div className="text-green-600 font-medium">
                    Results successfully submitted!
                  </div>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={!allFilled}
                className={`px-6 py-2 rounded-lg text-white font-medium transition ${
                  allFilled
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Submit Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

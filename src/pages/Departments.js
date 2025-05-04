// src/pages/Departments.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  BeakerIcon,
  PaintBrushIcon,
  BriefcaseIcon,
  CpuChipIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";

const DEPARTMENTS = [
  {
    id: "science",
    name: "Department of Science",
    description: "Physics, Chemistry, Mathematics & Biology programs.",
    icon: <BeakerIcon className="w-12 h-12 text-primary" />,
  },
  {
    id: "arts",
    name: "Department of Arts",
    description: "English, History, Political Science & more.",
    icon: <PaintBrushIcon className="w-12 h-12 text-primary" />,
  },
  {
    id: "commerce",
    name: "Department of Commerce",
    description: "Accounting, Finance & Business Management.",
    icon: <BriefcaseIcon className="w-12 h-12 text-primary" />,
  },
  {
    id: "cs",
    name: "Department of Computer Science",
    description: "Software Engineering, AI, Data Science programs.",
    icon: <CpuChipIcon className="w-12 h-12 text-primary" />,
  },
  {
    id: "languages",
    name: "Department of Languages",
    description: "Hindi, Telugu, Sanskrit & Foreign Languages.",
    icon: <LanguageIcon className="w-12 h-12 text-primary" />,
  },
];

export default function Departments() {
  const [search, setSearch] = useState("");

  const filtered = DEPARTMENTS.filter((d) => {
    const term = search.toLowerCase();
    return (
      d.name.toLowerCase().includes(term) ||
      d.description.toLowerCase().includes(term)
    );
  });

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 space-y-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center">Our Departments</h2>

        {/* Search */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search departments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl transform hover:-translate-y-1 transition"
            >
              {dept.icon}
              <h3 className="text-2xl font-semibold mt-4">{dept.name}</h3>
              <p className="text-gray-600 mt-2 flex-grow">{dept.description}</p>
              <div className="mt-4 flex gap-2">
                <Link
                  to={`/courses?category=${encodeURIComponent(
                    dept.name.split(" of ")[1]
                  )}`}
                  className="flex-1 text-center bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition"
                >
                  View Programs
                </Link>
                <Link
                  to={`/faculty?dept=${encodeURIComponent(
                    dept.name.split(" of ")[1]
                  )}`}
                  className="flex-1 text-center border-2 border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition"
                >
                  View Faculty
                </Link>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No departments found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

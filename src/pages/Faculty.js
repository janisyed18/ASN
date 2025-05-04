// src/pages/Faculty.js

import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  EnvelopeIcon,
  PhoneIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

const DEPARTMENTS = [
  "All",
  "Science",
  "Arts",
  "Commerce",
  "Computer Science",
  "Languages",
];

const FACULTY = [
  {
    id: 1,
    name: "Dr. S. Ramesh",
    department: "Science",
    title: "Associate Professor",
    photo: "/faculty/ramesh.jpg",
    email: "ramesh@asncollege.edu",
    phone: "+91-9876543210",
  },
  {
    id: 2,
    name: "Ms. Kavitha N.",
    department: "Arts",
    title: "Assistant Professor",
    photo: "/faculty/kavitha.jpg",
    email: "kavitha@asncollege.edu",
    phone: "+91-9123456780",
  },
  {
    id: 3,
    name: "Dr. P. Srinivas",
    department: "Commerce",
    title: "Professor & HOD",
    photo: "/faculty/srinivas.jpg",
    email: "srinivas@asncollege.edu",
    phone: "+91-9988776655",
  },
  {
    id: 4,
    name: "Mr. Arun Patel",
    department: "Computer Science",
    title: "Lecturer",
    photo: "/faculty/arun.jpg",
    email: "arun@asncollege.edu",
    phone: "+91-9876501234",
  },
  {
    id: 5,
    name: "Dr. Nandini R.",
    department: "Science",
    title: "Associate Professor",
    photo: "/faculty/nandini.jpg",
    email: "nandini@asncollege.edu",
    phone: "+91-9012345678",
  },
  // …add more as needed
];

export default function Faculty() {
  const [deptFilter, setDeptFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = FACULTY.filter((f) => {
    const matchesDept = deptFilter === "All" || f.department === deptFilter;
    const term = search.toLowerCase();
    const matchesSearch =
      f.name.toLowerCase().includes(term) ||
      f.title.toLowerCase().includes(term);
    return matchesDept && matchesSearch;
  });

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 space-y-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center">Our Faculty</h2>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Department Pills */}
          <nav className="flex flex-wrap gap-2">
            {DEPARTMENTS.map((d) => (
              <button
                key={d}
                onClick={() => setDeptFilter(d)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${
                    deptFilter === d
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }
                `}
              >
                {d}
              </button>
            ))}
          </nav>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search faculty..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((f) => (
            <div
              key={f.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition"
            >
              {/* Photo */}
              <div className="h-56 bg-gray-100 relative group">
                <img
                  src={f.photo}
                  alt={f.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <a
                    href={`mailto:${f.email}`}
                    className="mx-2 text-white bg-primary rounded-full p-2 hover:bg-secondary transition"
                  >
                    <EnvelopeIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={`tel:${f.phone}`}
                    className="mx-2 text-white bg-primary rounded-full p-2 hover:bg-secondary transition"
                  >
                    <PhoneIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* Info */}
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold">{f.name}</h3>
                <p className="text-gray-600">{f.title}</p>
                <p className="text-gray-500 mb-4">{f.department}</p>
                {/* View Profile */}
                <button
                  onClick={() => window.scrollTo(0, 0)}
                  className="mt-auto inline-flex items-center justify-center gap-1 bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition"
                >
                  View Profile
                  <ArrowUpIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No faculty match your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

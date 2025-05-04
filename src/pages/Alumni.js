// src/pages/Alumni.js

import React, { useState } from "react";
import {
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const alumniData = [
  {
    name: "Priya Sharma",
    batch: 2018,
    role: "Software Engineer",
    company: "Google",
    image: "/images/alumni1.jpg",
    linkedIn: "https://linkedin.com/in/priyasharma",
  },
  {
    name: "Ravi Kumar",
    batch: 2017,
    role: "Data Analyst",
    company: "Amazon",
    image: "/images/alumni2.jpg",
    linkedIn: "https://linkedin.com/in/ravikumar",
  },
  {
    name: "Anjali Rao",
    batch: 2019,
    role: "UX Designer",
    company: "Adobe",
    image: "/images/alumni3.jpg",
    linkedIn: "https://linkedin.com/in/anjalirao",
  },
  // Add more alumni as needed
];

const Alumni = () => {
  const [query, setQuery] = useState("");

  const filtered = alumniData.filter(
    (alum) =>
      alum.name.toLowerCase().includes(query.toLowerCase()) ||
      alum.company.toLowerCase().includes(query.toLowerCase()) ||
      alum.role.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Our Alumni</h1>
          <p className="text-gray-600 mt-2">
            Celebrating our successful graduates
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-md mx-auto mb-12 relative">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute top-3 left-3" />
          <input
            type="text"
            placeholder="Search by name, company, role..."
            className="w-full pl-10 pr-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Alumni Grid */}
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {filtered.length ? (
            filtered.map((alum, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group"
              >
                <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={alum.image}
                    alt={alum.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {alum.name}
                </h3>
                <p className="text-sm text-gray-500">Batch of {alum.batch}</p>
                <p className="mt-1 text-sm text-gray-700">
                  {alum.role}, {alum.company}
                </p>
                {alum.linkedIn && (
                  <a
                    href={alum.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-sm text-primary hover:underline"
                  >
                    View LinkedIn →
                  </a>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No matching alumni found.
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-xl font-medium text-gray-800 mb-2">
            Are you an ASN alumnus?
          </h2>
          <p className="text-gray-500 mb-4">
            We’d love to feature you! Submit your story to inspire future
            students.
          </p>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition">
            Share Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alumni;

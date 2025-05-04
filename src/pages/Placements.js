// src/pages/Placements.js

import React from "react";

const recruiters = ["Google", "Amazon", "Microsoft", "TCS", "Infosys"];
const successStories = [
  {
    name: "Rahul Verma",
    year: 2023,
    role: "SDE",
    company: "Google",
    image: "/images/rahul.jpg",
  },
  {
    name: "Sneha Reddy",
    year: 2023,
    role: "Data Scientist",
    company: "Amazon",
    image: "/images/sneha.jpg",
  },
  {
    name: "Amit Patel",
    year: 2023,
    role: "UX Designer",
    company: "Microsoft",
    image: "/images/amit.jpg",
  },
];

const Placements = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Placement Stats */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Placement Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-primary">92%</h3>
              <p className="text-sm text-gray-600 mt-2">2024 Placement Rate</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-primary">₹6.5 LPA</h3>
              <p className="text-sm text-gray-600 mt-2">Average Package</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-primary">₹15 LPA</h3>
              <p className="text-sm text-gray-600 mt-2">Highest Package</p>
            </div>
          </div>
        </section>

        {/* Recruiters */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Top Recruiters
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {recruiters.map((company, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl w-28 h-28 flex items-center justify-center transition"
              >
                <img
                  src={`/images/logos/${company.toLowerCase()}.png`}
                  alt={company}
                  className="h-12 grayscale hover:grayscale-0 transition duration-300"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((alum, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="w-full h-48 overflow-hidden rounded-lg mb-4 bg-gray-100">
                  <img
                    src={alum.image}
                    alt={alum.name}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {alum.name}
                </h3>
                <p className="text-sm text-gray-500">Batch of {alum.year}</p>
                <p className="text-sm text-gray-700 mt-1">
                  {alum.role}, {alum.company}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Placements;

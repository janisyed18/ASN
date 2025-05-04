// src/pages/Home.js

import React from "react";
import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  GlobeAltIcon,
  UsersIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

// Preview slice of courses (could fetch dynamically)
const PREVIEW_COURSES = [
  {
    id: 1,
    title: "B.Sc in Physics",
    icon: <AcademicCapIcon className="w-10 h-10 text-primary" />,
  },
  {
    id: 2,
    title: "B.A in English",
    icon: <BuildingLibraryIcon className="w-10 h-10 text-primary" />,
  },
  {
    id: 3,
    title: "BCA in Computer Applications",
    icon: <GlobeAltIcon className="w-10 h-10 text-primary" />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <header className="relative bg-gradient-to-r from-purple-700 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Welcome to ASN Degree College
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your future starts here—explore our programs, campus, and community.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/courses"
              className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Explore Programs
            </Link>
            <Link
              to="/admissions"
              className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <UsersIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Vibrant Community</h3>
              <p className="text-gray-600">
                Join a diverse student body and thriving campus life.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <AcademicCapIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Quality Education</h3>
              <p className="text-gray-600">
                Rigorous curricula designed by experienced faculty.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <BuildingLibraryIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Modern Facilities</h3>
              <p className="text-gray-600">
                State‑of‑the‑art labs, library, and study spaces.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <GlobeAltIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Global Outlook</h3>
              <p className="text-gray-600">
                Exchange programs and industry partnerships worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div>
              <p className="text-5xl font-extrabold text-primary">5,000+</p>
              <p className="mt-2 text-gray-600">Students Enrolled</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-primary">10,000+</p>
              <p className="mt-2 text-gray-600">Alumni Network</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-primary">20+</p>
              <p className="mt-2 text-gray-600">Academic Departments</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-primary">50+</p>
              <p className="mt-2 text-gray-600">Annual Events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Programs</h2>
            <Link
              to="/courses"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              View All <ChevronRightIcon className="w-5 h-5 ml-1" />
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PREVIEW_COURSES.map((c) => (
              <Link
                key={c.id}
                to={`/courses/${c.id}`}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center gap-4"
              >
                {c.icon}
                <h3 className="text-xl font-semibold">{c.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to begin your journey?
          </h2>
          <p className="text-lg mb-6">
            Apply today and join the ASN Degree College community.
          </p>
          <Link
            to="/admissions"
            className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Start Your Application
          </Link>
        </div>
      </section>
    </div>
  );
}

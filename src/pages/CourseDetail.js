// src/pages/CourseDetail.js

import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  AcademicCapIcon,
  CalendarDaysIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

// You can move this array to a shared file if you like
const COURSES = [
  {
    id: 1,
    title: "B.Sc in Physics",
    category: "Science",
    description: "Mechanics, electricity, magnetism & modern physics.",
    icon: <AcademicCapIcon className="w-16 h-16 text-primary" />,
  },
  {
    id: 2,
    title: "B.Sc in Chemistry",
    category: "Science",
    description: "Physical, organic & inorganic chemistry fundamentals.",
    icon: <AcademicCapIcon className="w-16 h-16 text-primary" />,
  },
  {
    id: 3,
    title: "B.Sc in Mathematics",
    category: "Science",
    description: "Algebra, calculus, statistics and applied math.",
    icon: <BuildingLibraryIcon className="w-16 h-16 text-primary" />,
  },
  {
    id: 4,
    title: "B.A in English",
    category: "Arts",
    description: "Literature, linguistics, and critical theory.",
    icon: <BuildingLibraryIcon className="w-16 h-16 text-primary" />,
  },
  {
    id: 5,
    title: "B.A in History",
    category: "Arts",
    description: "World and regional history from ancient to modern.",
    icon: <BuildingLibraryIcon className="w-16 h-16 text-primary" />,
  },
  {
    id: 6,
    title: "B.Com in Accounting",
    category: "Commerce",
    description: "Financial accounting, business law, and taxation.",
    icon: <BuildingLibraryIcon className="w-16 h-16 text-primary" />,
  },
  {
    id: 7,
    title: "BCA in Computer Applications",
    category: "IT",
    description: "Programming, databases, web development & networking.",
    icon: <AcademicCapIcon className="w-16 h-16 text-primary" />,
  },
  {
    id: 8,
    title: "B.Sc in Computer Science",
    category: "IT",
    description: "Algorithms, data structures, AI & machine learning.",
    icon: <AcademicCapIcon className="w-16 h-16 text-primary" />,
  },
];

export default function CourseDetail() {
  const { id } = useParams();
  const course = COURSES.find((c) => c.id === parseInt(id, 10));

  if (!course) {
    return (
      <div className="pt-24 container mx-auto px-4">
        <p className="text-center text-red-600">Course not found.</p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center gap-6">
          {course.icon}
          <h1 className="text-3xl font-bold">{course.title}</h1>
        </div>

        {/* Overview & Details */}
        <div className="grid gap-8 md:grid-cols-3">
          <section className="bg-white rounded-xl shadow p-6 space-y-4">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="text-gray-700">{course.description}</p>
          </section>

          <section className="bg-white rounded-xl shadow p-6 space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <AcademicCapIcon className="w-6 h-6 text-primary" />
              Curriculum
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Core courses in {course.category}</li>
              <li>Elective seminars & labs</li>
              <li>Project / research component</li>
              <li>Industry internship option</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl shadow p-6 space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <CalendarDaysIcon className="w-6 h-6 text-primary" />
              Duration & Schedule
            </h2>
            <p className="text-gray-700">3 years (6 semesters)</p>
            <p className="text-gray-700">Full‑time, on‑campus</p>
          </section>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-xl shadow p-6 flex items-start gap-6">
          <BuildingLibraryIcon className="w-8 h-8 text-primary mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Resources</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Modern labs & equipment</li>
              <li>Digital library access</li>
              <li>Online learning portal</li>
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={`/faculty?dept=${encodeURIComponent(course.category)}`}
            className="flex-1 text-center bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition"
          >
            View {course.category} Faculty
          </Link>
          <Link
            to={`/admissions?course=${encodeURIComponent(course.title)}`}
            className="flex-1 text-center border-2 border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  BeakerIcon,
  BookOpenIcon,
  TableCellsIcon,
  CpuChipIcon,
  ComputerDesktopIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/outline";

const CATEGORIES = ["All", "Science", "Arts", "Commerce", "IT"];

const COURSES = [
  {
    id: 1,
    title: "B.Sc in Physics",
    category: "Science",
    description: "Mechanics, electricity, magnetism & modern physics.",
    icon: <BeakerIcon className="w-12 h-12 text-primary" />,
  },
  {
    id: 2,
    title: "B.Sc in Chemistry",
    category: "Science",
    description: "Physical, organic & inorganic chemistry fundamentals.",
    icon: <BeakerIcon className="w-12 h-12 text-primary" />,
  },
  {
    id: 3,
    title: "B.Sc in Mathematics",
    category: "Science",
    description: "Algebra, calculus, statistics and applied math.",
    icon: <TableCellsIcon className="w-12 h-12 text-primary" />,
  },
  {
    id: 4,
    title: "B.A in English",
    category: "Arts",
    description: "Literature, linguistics, and critical theory.",
    icon: <BookOpenIcon className="w-12 h-12 text-primary" />,
  },
  {
    id: 5,
    title: "B.A in History",
    category: "Arts",
    description: "World and regional history from ancient to modern.",
    icon: <BookOpenIcon className="w-12 h-12 text-primary" />,
  },
  {
    id: 6,
    title: "B.Com in Accounting",
    category: "Commerce",
    description: "Financial accounting, business law, and taxation.",
    icon: <CurrencyRupeeIcon className="w-12 h-12 text-primary" />,
  },
  {
    id: 7,
    title: "B.Com in Finance",
    category: "Commerce",
    description: "Corporate finance, investment, and risk management.",
    icon: <CurrencyRupeeIcon className="w-12 h-12 text-primary" />,
  },
  {
    id: 8,
    title: "BCA in Computer Applications",
    category: "IT",
    description: "Programming, databases, web development & networking.",
    icon: <ComputerDesktopIcon className="w-12 h-12 text-primary" />,
  },
  {
    id: 9,
    title: "B.Sc in Computer Science",
    category: "IT",
    description: "Algorithms, data structures, AI & machine learning.",
    icon: <CpuChipIcon className="w-12 h-12 text-primary" />,
  },
];

export default function Courses() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = COURSES.filter((c) => {
    const byCat = category === "All" || c.category === category;
    const bySearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    return byCat && bySearch;
  });

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 space-y-8">
        <h2 className="text-4xl font-bold text-center">Our Programs</h2>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <nav className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${
                    category === cat
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                {cat}
              </button>
            ))}
          </nav>
          <div className="relative w-full sm:w-64">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl transform hover:-translate-y-1 transition"
            >
              {c.icon}
              <h3 className="text-xl font-semibold mt-4">{c.title}</h3>
              <p className="text-gray-600 mt-2 flex-grow">{c.description}</p>
              <Link
                to={`/courses/${c.id}`}
                className="mt-4 inline-block px-4 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition text-center"
              >
                Learn More
              </Link>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No courses found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

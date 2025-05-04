// src/pages/student/StudentPortal.js
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  UserCircleIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { to: "profile", label: "Profile", Icon: UserCircleIcon },
  { to: "timetable", label: "Timetable", Icon: CalendarIcon },
  { to: "attendance", label: "Attendance", Icon: ClipboardDocumentListIcon },
  { to: "results", label: "Results", Icon: ChartBarIcon },
  { to: "notices", label: "Notices", Icon: BellIcon },
  { to: "feedback", label: "Feedback", Icon: ChatBubbleLeftEllipsisIcon },
  { to: "settings", label: "Settings", Icon: CogIcon },
];

export default function StudentPortal() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: clear auth tokens / context here
    navigate("/", { replace: true });
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="flex flex-col w-64 bg-white shadow-lg">
        <div className="flex-1 overflow-y-auto">
          <nav className="mt-8 space-y-1">
            {navItems.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={`/student/${to}`}
                className={({ isActive }) =>
                  [
                    "flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition",
                    isActive &&
                      "bg-gray-100 border-r-4 border-indigo-600 text-indigo-600 font-medium",
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                <Icon className="h-5 w-5" />
                <span className="ml-3">{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Logout button pinned to bottom */}
        <div className="border-t border-gray-200 p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-md transition"
          >
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            <span className="ml-3 font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Content area */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-8">
          {/* This is where nested routes render */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

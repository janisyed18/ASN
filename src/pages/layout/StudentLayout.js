// src/layouts/StudentLayout.js
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  UserCircleIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
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

export default function StudentLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: clear auth, tokens, etc.
    navigate("/", { replace: true });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside className="flex flex-col w-64 bg-white shadow-lg">
        <div className="flex-1 overflow-y-auto pt-8">
          <nav className="space-y-1">
            {navItems.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={`/student/${to}`}
                className={({ isActive }) =>
                  `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition ${
                    isActive
                      ? "bg-gray-100 border-r-4 border-primary text-primary font-medium"
                      : ""
                  }`
                }
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <span className="ml-3">{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Logout footer */}
        <div className="border-t border-gray-200 p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-md transition"
          >
            <ArrowLeftOnRectangleIcon className="h-5 w-5 flex-shrink-0" />
            <span className="ml-3 font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-8">{children}</div>
      </div>
    </div>
  );
}

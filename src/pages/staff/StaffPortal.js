// src/pages/staff/StaffPortal.js
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  CalendarDaysIcon,
  DocumentTextIcon,
  FolderPlusIcon,
  ChartBarIcon,
  GiftIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const STAFF_NAV = [
  { label: "Mark Attendance", path: "attendance", icon: CalendarDaysIcon },
  { label: "Add Results", path: "results", icon: DocumentTextIcon },
  { label: "Upload Materials", path: "materials", icon: FolderPlusIcon },
  { label: "View Performance", path: "performance", icon: ChartBarIcon },
  { label: "Create Event", path: "event", icon: GiftIcon },
  { label: "Send Email", path: "email", icon: EnvelopeIcon },
];

export default function StaffPortal() {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <nav className="w-64 bg-white border-r">
        <h2 className="px-6 py-4 text-xl font-bold">Staff Dashboard</h2>
        <ul>
          {STAFF_NAV.map(({ label, path, icon: Icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center px-6 py-3 hover:bg-indigo-50 ${
                    isActive
                      ? "bg-indigo-100 font-semibold text-indigo-700"
                      : "text-gray-700"
                  }`
                }
              >
                <Icon className="h-5 w-5 mr-3" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}

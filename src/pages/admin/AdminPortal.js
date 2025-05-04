import React from "react";
import { Link } from "react-router-dom";

export default function AdminPortal() {
  return (
    <div className="pt-24 p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-gray-700 mb-6">
        (Placeholder—admin features to be implemented.)
      </p>
      <div className="space-x-4">
        <Link to="/admin/dashboard" className="btn">
          Manage Courses
        </Link>
        <Link to="/admin/dashboard" className="btn">
          Approve Admissions
        </Link>
        <Link to="/admin/dashboard" className="btn">
          Publish Results
        </Link>
        <Link to="/admin/dashboard" className="btn">
          Export Reports
        </Link>
        <Link to="/admin/dashboard" className="btn">
          Manage Events
        </Link>
      </div>
    </div>
  );
}

// src/App.js

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Public pages
import Home from "./pages/Home";
import Admissions from "./pages/Admissions";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Departments from "./pages/Departments";
import Events from "./pages/Events";
import Placements from "./pages/Placements";
import Alumni from "./pages/Alumni";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";

// Student‑portal pages
import StudentLogin from "./pages/student/StudentLogin";
import StudentLayout from "./pages/student/StudentPortal";
import Profile from "./pages/student/Profile";
import Timetable from "./pages/student/Timetable";
import Attendance from "./pages/student/Attendance";
import Results from "./pages/student/Results";
import Notices from "./pages/student/Notices";
import Feedback from "./pages/student/Feedback";
import Settings from "./pages/student/Settings";

// Staff‑portal pages & login
import StaffLogin from "./pages/staff/StaffLogin";
import StaffPortal from "./pages/staff/StaffPortal";
import MarkAttendance from "./pages/staff/MarkAttendance";
import AddResults from "./pages/staff/AddResults";
import UploadMaterials from "./pages/staff/UploadMaterials";
import ViewPerformance from "./pages/staff/ViewPerformance";
import CreateEvent from "./pages/staff/CreateEvent";

// Admin‑portal pages & login (still dummy)
import AdminLogin from "./pages/admin/AdminLogin";
import AdminPortal from "./pages/admin/AdminPortal";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="flex-grow bg-gray-50 pt-20">
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/events" element={<Events />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/contact" element={<Contact />} />

          {/* Student */}
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="results" element={<Results />} />
            <Route path="notices" element={<Notices />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Staff */}
          <Route path="/staff/login" element={<StaffLogin />} />
          <Route path="/staff/dashboard" element={<StaffPortal />}>
            <Route index element={<Navigate to="attendance" replace />} />
            <Route path="attendance" element={<MarkAttendance />} />
            <Route path="results" element={<AddResults />} />
            <Route path="materials" element={<UploadMaterials />} />
            <Route path="performance" element={<ViewPerformance />} />
            <Route path="event" element={<CreateEvent />} />
          </Route>

          {/* Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminPortal />} />

          {/* Catch‑all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loginRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close login dropdown on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (loginRef.current && !loginRef.current.contains(e.target)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Admissions", to: "/admissions" },
    { name: "Courses", to: "/courses" },
    { name: "Departments", to: "/departments" },
    { name: "Events", to: "/events" },
    { name: "Placements", to: "/placements" },
    { name: "Alumni", to: "/alumni" },
    { name: "Faculty", to: "/faculty" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition ${
        scrolled ? "bg-white shadow-lg" : "bg-white/50 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-8 md:h-10 mr-2 object-contain"
          />
          <span className="text-xl md:text-2xl font-bold text-primary">
            ASN Degree College
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative px-1 py-2 font-medium transition ${
                  isActive
                    ? "text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : "text-gray-700 hover:text-primary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Search, Apply & Login */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
          </button>
          <Link
            to="/admissions"
            className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-secondary transition"
          >
            Apply Now
          </Link>

          {/* Login Dropdown */}
          <div className="relative" ref={loginRef}>
            <button
              onClick={() => setLoginOpen((o) => !o)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <UserCircleIcon className="w-6 h-6 text-gray-800" />
            </button>
            {loginOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                <button
                  onClick={() => {
                    setLoginOpen(false);
                    navigate("/student/login");
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Student Login
                </button>
                <button
                  onClick={() => {
                    setLoginOpen(false);
                    navigate("/staff/login");
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Staff Login
                </button>
                <button
                  onClick={() => {
                    setLoginOpen(false);
                    navigate("/admin/login");
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Admin Login
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <XMarkIcon className="w-6 h-6 text-gray-800" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-medium ${
                    isActive
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/admissions"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 bg-primary text-white text-center px-4 py-2 rounded-full font-medium hover:bg-secondary transition"
            >
              Apply Now
            </Link>
            <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
              <Link
                to="/student/login"
                onClick={() => setMobileOpen(false)}
                className="block text-gray-700 hover:text-primary"
              >
                Student Login
              </Link>
              <Link
                to="/staff/login"
                onClick={() => setMobileOpen(false)}
                className="block text-gray-700 hover:text-primary"
              >
                Staff Login
              </Link>
              <Link
                to="/admin/login"
                onClick={() => setMobileOpen(false)}
                className="block text-gray-700 hover:text-primary"
              >
                Admin Login
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

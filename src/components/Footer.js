// src/components/Footer.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // integrate real newsletter endpoint here
    alert(`Subscribed ${email}!`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            ASN Degree College is a premier institution in Tenali, offering a
            wide range of degree programs and a vibrant campus life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:text-white">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-white">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/departments" className="hover:text-white">
                Departments
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Contact Info
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPinIcon className="w-6 h-6 text-primary mr-3" />
              <span>
                6JVX+59Q, Prakasam Rd,
                <br />
                near Chaakali Cheruvu,
                <br />
                Tenali, Andhra Pradesh 522201
              </span>
            </li>
            <li className="flex items-center">
              <PhoneIcon className="w-6 h-6 text-primary mr-3" />
              <span>+91‑12345‑67890</span>
            </li>
            <li className="flex items-center">
              <EnvelopeIcon className="w-6 h-6 text-primary mr-3" />
              <span>info@asncollege.edu</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get our latest news and updates.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-secondary transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        © 2025 ASN Degree College. All rights reserved.
      </div>
    </footer>
  );
}

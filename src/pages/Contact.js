// src/pages/Contact.js

import React, { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import api from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, msg: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: "" });
    try {
      await api.post("/contact", form);
      setStatus({ loading: false, msg: "Message sent — we’ll be in touch!" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({ loading: false, msg: "Failed to send. Please try again." });
    }
  };

  const inputCls =
    "w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50";

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-20 space-y-12">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center">Contact Us</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
              <MapPinIcon className="w-8 h-8 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Our Address</h3>
                <p className="text-gray-700">
                  6JVX+59Q, Prakasam Rd,
                  <br />
                  near Chaakali Cheruvu,
                  <br />
                  Ganganamma Peta,
                  <br />
                  Ramalingeswara Pet,
                  <br />
                  Tenali, Andhra Pradesh 522201,
                  <br />
                  India
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
              <PhoneIcon className="w-8 h-8 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-gray-700">
                  +91‑12345‑67890
                  <br />
                  +91‑09876‑54321
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
              <EnvelopeIcon className="w-8 h-8 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-700">
                  info@asncollege.edu
                  <br />
                  admissions@asncollege.edu
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
              <ClockIcon className="w-8 h-8 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Office Hours</h3>
                <p className="text-gray-700">
                  Mon – Fri: 9:00 AM – 5:00 PM
                  <br />
                  Sat: 10:00 AM – 2:00 PM
                </p>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a
                href="https://facebook.com/YourCollegePage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition"
              >
                <ShareIcon className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/YourCollegePage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition"
              >
                <ShareIcon className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/YourCollegePage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition"
              >
                <ShareIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            {status.msg && (
              <div
                className={`mb-6 p-4 rounded ${
                  status.msg.includes("Failed")
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {status.msg}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg p-8 space-y-4"
            >
              <label className="block">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputCls}
                />
              </label>
              <label className="block">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputCls}
                />
              </label>
              <label className="block">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className={inputCls}
                />
              </label>
              <label className="block">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={inputCls}
                />
              </label>
              <button
                type="submit"
                disabled={status.loading}
                className="w-full flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition"
              >
                <span>{status.loading ? "Sending…" : "Send Message"}</span>
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <iframe
            title="ASN Degree College Location"
            src="https://maps.google.com/maps?q=6JVX+59Q,Prakasam+Rd,near+Chaakali+Cheruvu,Ganganamma+Peta,Ramalingeswara+Pet,Tenali,Andhra+Pradesh+522201,India&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

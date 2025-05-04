// src/pages/Events.js

import React, { useState } from "react";
import { CalendarDaysIcon, PhotoIcon } from "@heroicons/react/24/outline";

const EVENTS = [
  {
    id: 1,
    title: "Annual Science Fest",
    date: "2025-06-12",
    description: "Showcase of student science projects and guest lectures.",
    image: "/events/science-fest.jpg", // put real images in public/events/
  },
  {
    id: 2,
    title: "Cultural Day",
    date: "2025-07-05",
    description: "Dance, music, and drama performances by our students.",
    image: "/events/cultural-day.jpg",
  },
  {
    id: 3,
    title: "Alumni Reunion",
    date: "2025-08-20",
    description: "Meet & greet with alumni, networking sessions, and dinner.",
    image: "/events/alumni-reunion.jpg",
  },
  // ...add more events as desired
];

const GALLERY = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  // ...add more gallery images
];

export default function Events() {
  const [tab, setTab] = useState("Upcoming");
  const today = new Date();

  const upcoming = EVENTS.filter((e) => new Date(e.date) >= today);
  const past = EVENTS.filter((e) => new Date(e.date) < today);
  const display = tab === "Upcoming" ? upcoming : past;

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-20 space-y-12">
        {/* Tabs */}
        <div className="flex justify-center space-x-4">
          {["Upcoming", "Past"].map((label) => (
            <button
              key={label}
              onClick={() => setTab(label)}
              className={`px-6 py-2 rounded-full font-medium transition
                ${
                  tab === label
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {label} Events
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-8">{tab} Events</h2>
          {display.length === 0 ? (
            <p className="text-center text-gray-500">
              No {tab.toLowerCase()} events.
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {display.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition"
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-primary/90 text-white rounded-full px-3 py-1 flex items-center space-x-1 text-sm">
                      <CalendarDaysIcon className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col">
                    <h3 className="text-2xl font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 flex-grow">
                      {event.description}
                    </p>
                    <button className="mt-4 self-start bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition">
                      RSVP
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-8">Event Gallery</h2>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {GALLERY.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition"
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                  <PhotoIcon className="w-10 h-10 text-white" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

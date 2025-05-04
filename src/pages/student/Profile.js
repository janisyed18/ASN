// src/pages/student/Profile.js
import React, { useState, useEffect } from "react";

export default function Profile() {
  // Dummy user data
  const dummy = {
    name: "John Doe",
    roll: "STD12345",
    program: "B.Sc Computer Science",
    year: "3rd Year",
    email: "student@asn.edu",
    phone: "9876543210",
    dob: "2003-05-15",
    gender: "Male",
    address: "Tenali, Andhra Pradesh",
    avatar: "", // leave blank to use initials
  };

  const [user, setUser] = useState(dummy);

  // generate initials fallback avatar
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">My Profile</h1>

      {/* Top Card */}
      <div className="flex items-center p-6 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
        <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden flex-shrink-0">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-2xl font-bold bg-white/20">
              {initials}
            </div>
          )}
        </div>
        <div className="ml-6">
          <h2 className="text-3xl font-semibold">{user.name}</h2>
          <p>
            Roll No: <span className="font-medium">{user.roll}</span>
          </p>
          <p>
            Program: <span className="font-medium">{user.program}</span>
          </p>
          <p>
            Year: <span className="font-medium">{user.year}</span>
          </p>
        </div>
      </div>

      {/* Details Card */}
      <div className="bg-white p-6 rounded-lg shadow grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600">Email</p>
          <p className="font-medium">{user.email}</p>
        </div>
        <div>
          <p className="text-gray-600">Phone</p>
          <p className="font-medium">{user.phone}</p>
        </div>
        <div>
          <p className="text-gray-600">Date of Birth</p>
          <p className="font-medium">{user.dob}</p>
        </div>
        <div>
          <p className="text-gray-600">Gender</p>
          <p className="font-medium">{user.gender}</p>
        </div>
        <div className="sm:col-span-2">
          <p className="text-gray-600">Address</p>
          <p className="font-medium">{user.address}</p>
        </div>
      </div>

      {/* Download ID Button */}
      <button
        className="px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
        onClick={() => alert("Download ID card (stub)")}
      >
        Download ID Card
      </button>
    </div>
  );
}

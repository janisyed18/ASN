// src/pages/Admissions.js

import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../services/api";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const STEPS = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Family Info" },
  { id: 3, title: "Academic Info" },
  { id: 4, title: "Documents" },
];

export default function Admissions() {
  const location = useLocation();
  const fileInputRef = useRef(null);

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    fatherName: "",
    motherName: "",
    address: "",
    course: "",
    year: "",
    previousQualification: "",
  });
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState({ loading: false, msg: "" });

  // Pre-fill course from ?course= and jump to Academic Info
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const c = params.get("course");
    if (c) {
      setForm((f) => ({ ...f, course: c }));
      setStep(3);
    }
  }, [location.search]);

  const inputCls =
    "mt-1 w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    setFiles((fs) => [...fs, ...Array.from(e.dataTransfer.files)]);
  };

  const removeFile = (idx) => setFiles((fs) => fs.filter((_, i) => i !== idx));

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: "" });
    try {
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      files.forEach((f) => data.append("documents", f));
      await api.post("/admissions", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setStatus({ loading: false, msg: "Submitted successfully!" });
      setForm({
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        email: "",
        phone: "",
        fatherName: "",
        motherName: "",
        address: "",
        course: "",
        year: "",
        previousQualification: "",
      });
      setFiles([]);
      setStep(1);
    } catch {
      setStatus({ loading: false, msg: "Submission failed." });
    }
  };

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Progress */}
        <ul className="flex justify-between mb-8">
          {STEPS.map((s) => (
            <li key={s.id} className="flex-1 text-center">
              <button
                type="button"
                onClick={() => setStep(s.id)}
                className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center mb-1 ${
                  step === s.id
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300 transition"
                }`}
              >
                {s.id}
              </button>
              <p className="text-sm">{s.title}</p>
            </li>
          ))}
        </ul>

        {status.msg && (
          <div
            className={`mb-6 p-3 rounded ${
              status.msg.includes("failed")
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {status.msg}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8 space-y-6"
        >
          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-gray-700">First Name</span>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className={inputCls}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Last Name</span>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className={inputCls}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Date of Birth</span>
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  required
                  className={inputCls}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Gender</span>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                  className={inputCls}
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block md:col-span-2">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputCls}
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-gray-700">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className={inputCls}
                />
              </label>
            </div>
          )}

          {/* Step 2: Family Info */}
          {step === 2 && (
            <div className="space-y-4">
              <label className="block">
                <span className="text-gray-700">Father’s Name</span>
                <input
                  name="fatherName"
                  value={form.fatherName}
                  onChange={handleChange}
                  required
                  className={inputCls}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Mother’s Name</span>
                <input
                  name="motherName"
                  value={form.motherName}
                  onChange={handleChange}
                  required
                  className={inputCls}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Address</span>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows="3"
                  required
                  className={inputCls}
                />
              </label>
            </div>
          )}

          {/* Step 3: Academic Info */}
          {step === 3 && (
            <div className="space-y-4">
              <label className="block md:w-1/2">
                <span className="text-gray-700">Course</span>
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                  className={inputCls}
                >
                  <option value="">Select</option>
                  <option>B.Sc</option>
                  <option>B.A</option>
                  <option>B.Com</option>
                  <option>M.Sc</option>
                </select>
              </label>
              <label className="block md:w-1/2">
                <span className="text-gray-700">Year</span>
                <select
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  required
                  className={inputCls}
                >
                  <option value="">Select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Previous Qualification</span>
                <input
                  name="previousQualification"
                  value={form.previousQualification}
                  onChange={handleChange}
                  className={inputCls}
                />
              </label>
            </div>
          )}

          {/* Step 4: Documents */}
          {step === 4 && (
            <div className="space-y-4">
              <span className="text-gray-700 font-medium">
                Upload Documents
              </span>
              <div
                onClick={() => fileInputRef.current.click()}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition"
              >
                <input
                  type="file"
                  multiple
                  ref={fileInputRef}
                  className="
hidden"
                  onChange={handleFileChange}
                />
                <p className="text-gray-500 mb-1">📂 Drag & drop files here</p>
                <p className="text-sm text-gray-400">
                  or click to browse (PDF, JPG, DOC up to 10MB each)
                </p>
              </div>
              {files.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {files.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center bg-gray-100 rounded-full px-3 py-1"
                    >
                      <span className="truncate max-w-xs">{f.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <button
                type="button"
                onClick={back}
                className="flex items-center text-gray-600 hover:text-primary transition"
              >
                <ArrowLeftIcon className="w-5 h-5 mr-1" /> Back
              </button>
            ) : (
              <div />
            )}
            {step < STEPS.length ? (
              <button
                type="button"
                onClick={next}
                className="flex items-center bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition"
              >
                Next <ArrowRightIcon className="w-5 h-5 ml-1" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={status.loading}
                className="bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition"
              >
                {status.loading ? "Submitting…" : "Submit Application"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

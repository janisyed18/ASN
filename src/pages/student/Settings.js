import React, { useState, useEffect } from "react";

const STORAGE_KEY = "studentSettings";
const defaultNotifs = { email: true, sms: false };
const defaultPrefs = { theme: "light" };

export default function Settings() {
  // load user and settings
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const [account, setAccount] = useState({
    name: storedUser.name || "",
    email: storedUser.email || "",
    phone: storedUser.phone || "",
    address: storedUser.address || "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [notifs, setNotifs] = useState(defaultNotifs);
  const [prefs, setPrefs] = useState(defaultPrefs);
  const [message, setMessage] = useState("");

  // load saved toggles
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    if (saved.notifs) setNotifs(saved.notifs);
    if (saved.prefs) setPrefs(saved.prefs);
  }, []);

  // helper to persist toggles
  const persist = (key, data) => {
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    all[key] = data;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  };

  // handlers
  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccount((a) => ({ ...a, [name]: value }));
  };

  const saveAccount = () => {
    // TODO: call API to update profile
    localStorage.setItem("user", JSON.stringify(account));
    setMessage("Profile updated!");
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((p) => ({ ...p, [name]: value }));
  };

  const changePassword = () => {
    if (passwords.new !== passwords.confirm) {
      setMessage("New & confirm do not match");
      return;
    }
    // TODO: call API to change password
    setPasswords({ current: "", new: "", confirm: "" });
    setMessage("Password changed!");
  };

  const toggleNotif = (field) => {
    const updated = { ...notifs, [field]: !notifs[field] };
    setNotifs(updated);
    persist("notifs", updated);
  };

  const toggleTheme = () => {
    const next = prefs.theme === "light" ? "dark" : "light";
    setPrefs((p) => ({ ...p, theme: next }));
    persist("prefs", { ...prefs, theme: next });
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Settings</h1>

      {message && (
        <div
          className="p-3 bg-green-100 text-green-800 rounded"
          onAnimationEnd={() => setMessage("")}
        >
          {message}
        </div>
      )}

      {/* Account Section */}
      <section className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Account</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["name", "email", "phone", "address"].map((f) => (
            <label key={f} className="block">
              <span className="text-gray-700 capitalize">{f}</span>
              <input
                type={f === "email" ? "email" : "text"}
                name={f}
                value={account[f]}
                onChange={handleAccountChange}
                className="mt-1 w-full border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
              />
            </label>
          ))}
        </div>
        <button
          onClick={saveAccount}
          className="mt-2 bg-primary text-white px-5 py-2 rounded hover:bg-secondary transition"
        >
          Save Profile
        </button>
      </section>

      {/* Security Section */}
      <section className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Security</h2>
        <div className="space-y-4 md:w-1/2">
          {[
            { name: "current", placeholder: "Current password" },
            { name: "new", placeholder: "New password" },
            { name: "confirm", placeholder: "Confirm new password" },
          ].map((fld) => (
            <label key={fld.name} className="block">
              <span className="text-gray-700">{fld.placeholder}</span>
              <input
                type="password"
                name={fld.name}
                value={passwords[fld.name]}
                onChange={handlePasswordChange}
                className="mt-1 w-full border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
              />
            </label>
          ))}
        </div>
        <button
          onClick={changePassword}
          className="mt-2 bg-primary text-white px-5 py-2 rounded hover:bg-secondary transition"
        >
          Change Password
        </button>
      </section>

      {/* Notifications Section */}
      <section className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <div className="flex flex-col gap-4">
          {[
            { label: "Email Notifications", key: "email" },
            { label: "SMS Notifications", key: "sms" },
          ].map((opt) => (
            <div key={opt.key} className="flex items-center justify-between">
              <span>{opt.label}</span>
              <button
                onClick={() => toggleNotif(opt.key)}
                className={`w-12 h-6 flex items-center bg-gray-200 rounded-full p-1 transition ${
                  notifs[opt.key]
                    ? "bg-primary/80 justify-end"
                    : "bg-gray-300 justify-start"
                }`}
              >
                <span className="block w-4 h-4 bg-white rounded-full shadow-md" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Appearance Section */}
      <section className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Appearance</h2>
        <div className="flex items-center gap-4">
          <span>Dark Mode</span>
          <button
            onClick={toggleTheme}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              prefs.theme === "dark"
                ? "bg-primary/80 justify-end"
                : "bg-gray-300 justify-start"
            }`}
          >
            <span className="block w-4 h-4 bg-white rounded-full shadow-md" />
          </button>
        </div>
      </section>
    </div>
  );
}

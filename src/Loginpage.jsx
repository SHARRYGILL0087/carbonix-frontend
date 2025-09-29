// src/pages/Login.jsx
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

export default function Login() {
  const [role, setRole] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full bg-blue-900 text-white flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">Carbonix</h1>
        <FaUserAlt className="text-xl" />
      </div>

      {/* Login Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-[380px] mt-20">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Login
        </h2>

        {/* Role Selection */}
        <label className="block mb-2 font-semibold text-gray-700">
          Select Role
        </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Choose --</option>
          <option value="ngo">NGOs</option>
          <option value="community">Communities</option>
          <option value="panchayat">Local Panchayat</option>
          <option value="industry">Industries</option>
        </select>

        {/* Username */}
        <label className="block mb-2 font-semibold text-gray-700">
          Username
        </label>
        <input
          type="text"
          placeholder="Enter your username"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500"
        />

        {/* Password */}
        <label className="block mb-2 font-semibold text-gray-700">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:ring-2 focus:ring-blue-500"
        />

        {/* Button */}
        <button className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition">
          Login
        </button>
      </div>
    </div>
  );
}

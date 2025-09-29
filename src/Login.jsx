import { useParams } from "react-router-dom";

export default function Login() {
  const { role } = useParams();

  const roleNames = {
    ngo: "NGO",
    community: "Community",
    panchayat: "Local Panchayat",
    industry: "Industry",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 pt-20 ">
      {/* Login Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-[380px]">
        {/* Show selected role */}
        <h2 className="text-xl font-semibold text-blue-700 text-center mb-4">
          You are logging in as <span className="font-bold">{roleNames[role]}</span>
        </h2>

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

        {/* Login Button */}
        <button className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition">
          Login
        </button>
      </div>
    </div>
  );
}

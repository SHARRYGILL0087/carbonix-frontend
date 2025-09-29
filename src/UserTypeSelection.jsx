import { useNavigate } from "react-router-dom";
import { FaIndustry, FaUsers, FaHandHoldingHeart } from "react-icons/fa";
import { GiVillage } from "react-icons/gi";

export default function UserTypeSelection() {
  const navigate = useNavigate();

  const userTypes = [
    {
      id: "ngo",
      title: "NGOs",
      desc: "Support causes and connect with your community.",
      icon: <FaHandHoldingHeart className="text-2xl text-blue-700" />,
    },
    {
      id: "community",
      title: "Communities",
      desc: "Engage and collaborate for sustainable development.",
      icon: <FaUsers className="text-2xl text-blue-700" />,
    },
    {
      id: "panchayat",
      title: "Local Panchayat",
      desc: "Manage local governance and development initiatives.",
      icon: <GiVillage className="text-2xl text-blue-700" />,
    },
    {
      id: "industry",
      title: "Industries",
      desc: "Manage your business profile and carbon opportunities.",
      icon: <FaIndustry className="text-2xl text-blue-700" />,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-4 pt-20">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
          Select Your User Type
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Choose the profile that best describes you.
        </p>

        <div className="space-y-4">
          {userTypes.map((user) => (
            <button
              key={user.id}
              onClick={() => navigate(`/login/${user.id}`)}
              className="w-full flex items-center gap-4 border border-gray-200 rounded-xl p-4 text-left hover:shadow-md transition bg-white"
            >
              <div className="p-3 bg-blue-100 rounded-lg">{user.icon}</div>
              <div>
                <h3 className="font-semibold text-blue-900">{user.title}</h3>
                <p className="text-gray-600 text-sm">{user.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

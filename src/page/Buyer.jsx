import { useState } from "react";
import { Search, ChevronRight } from "lucide-react";

export default function Buyer() {
    const [projects] = useState([
        { id: 1, name: "Mangrove Restoration", location: "Brazil", price: "$20/ton" },
        { id: 2, name: "Reforestation", location: "India", price: "$15/ton" },
        { id: 3, name: "Wetlands Conservation", location: "Indonesia", price: "$18/ton" },
    ]);

    return (
        <div className="min-h-screen bg-[#F1F5F9] flex items-center justify-center p-6 pt-30 pb-20">

            <div className="bg-white w-full max-w-6xl rounded-2xl shadow-lg p-8 space-y-6">

                <div>
                    <h1 className="text-3xl font-bold text-[#0D2C54]">Achieve Net Zero</h1>
                    <p className="text-gray-600">Explore & Purchase Verified Carbon Credits</p>
                </div>


                <div className="flex flex-wrap gap-2 items-center">
                    <input
                        type="text"
                        placeholder="Search for Projects"
                        className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button className="p-2 bg-blue-500 text-white rounded-lg flex items-center gap-1">
                        <Search size={18} /> Search
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="md:col-span-2 space-y-4">
                        <h2 className="text-xl font-semibold text-[#0D2C54]">Available Projects</h2>
                        {projects.map((p) => (
                            <div
                                key={p.id}
                                className="bg-gray-50 p-4 rounded-xl shadow flex justify-between items-center hover:shadow-md transition"
                            >
                                <div>
                                    <h3 className="font-bold">{p.name}</h3>
                                    <p className="text-sm text-gray-500">{p.location}</p>
                                    <p className="text-sm font-medium text-green-600">{p.price}</p>
                                </div>
                                <button className="flex items-center gap-1 text-blue-500 font-medium">
                                    View <ChevronRight size={18} />
                                </button>
                            </div>
                        ))}
                    </div>


                    <div className="bg-gray-50 rounded-xl shadow p-4 space-y-6">

                        <div className="text-center">
                            <h2 className="text-lg font-semibold">Your Net Zero Progress</h2>
                            <div className="relative w-32 h-32 mx-auto my-4">
                                <svg className="w-full h-full">
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="50"
                                        stroke="#E5E7EB"
                                        strokeWidth="10"
                                        fill="none"
                                    />
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="50"
                                        stroke="#3B82F6"
                                        strokeWidth="10"
                                        fill="none"
                                        strokeDasharray="314"
                                        strokeDashoffset="80"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span className="absolute inset-0 flex items-center justify-center font-bold text-[#0D2C54]">
                                    68%
                                </span>
                            </div>
                            <p className="text-sm text-gray-600">Goal: 1,000 tons CO₂</p>
                        </div>


                        <div>
                            <h2 className="text-lg font-semibold mb-2">Recent Purchases</h2>
                            <div className="space-y-2 text-sm">
                                <p className="p-2 bg-white rounded shadow">Mangrove – 50 tons</p>
                                <p className="p-2 bg-white rounded shadow">Reforestation – 30 tons</p>
                            </div>
                        </div>


                        <div>
                            <h2 className="text-lg font-semibold mb-2">Estimated Impact</h2>
                            <p className="text-sm text-gray-600">
                                Your projects contribute to biodiversity, clean air, and sustainable
                                communities 🌍
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

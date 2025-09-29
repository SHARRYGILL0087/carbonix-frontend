import { Plus, MoreHorizontal } from "lucide-react";

export default function Sellerdashboard() {
    const projects = [
        {
            id: 1,
            name: "Location Biorestoration",
            status: "Sold Out",
            img: "hihi1.png",
        },
        {
            id: 2,
            name: "Mangrove Restore Initiative - Site B",
            status: "Sold Out",
            img: "hihi2.png",
        },
        {
            id: 3,
            name: "Mangrove Restoration Initiative - Site A",
            status: "Sold Out",
            img: "hihi3.png",
        },
        {
            id: 4,
            name: "Mangrove Restoration Initiative - Site C",
            status: "Sold Out",
            img: "hihi4.png",
        },
    ];

    return (
        <div className="min-h-screen bg-[#F1F5F9] flex justify-center p-6 pt-30">
            <div className="bg-white w-full max-w-6xl rounded-2xl shadow-lg p-8 space-y-8">

                <div>
                    <h1 className="text-3xl font-bold text-[#0D2C54]">Seller Dashboard</h1>
                    <p className="text-gray-600">Manage your blue carbon projects</p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-xl shadow p-4 text-center">
                        <h2 className="text-lg font-semibold">Total Credits Sold</h2>
                        <p className="text-2xl font-bold text-[#0D2C54]">€ 923558</p>
                        <p className="text-sm text-gray-500">Testing DemoText</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl shadow p-4 text-center">
                        <h2 className="text-lg font-semibold">Active Projects</h2>
                        <p className="text-2xl font-bold text-[#0D2C54]">430</p>
                        <p className="text-sm text-gray-500">Pending Verifications</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl shadow p-4 text-center">
                        <h2 className="text-lg font-semibold">Pending Verifications</h2>
                        <p className="text-2xl font-bold text-[#0D2C54]">$209/2732</p>
                        <p className="text-sm text-gray-500">Random Dummy Data</p>
                    </div>
                </div>


                <div>
                    <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg shadow">
                        <Plus size={18} /> Add New Project
                    </button>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="md:col-span-2 space-y-4">
                        <h2 className="text-xl font-semibold text-[#0D2C54]">My Projects</h2>
                        {projects.map((p) => (
                            <div
                                key={p.id}
                                className="bg-gray-50 p-4 rounded-xl shadow flex items-center justify-between hover:shadow-md transition"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={p.img}
                                        alt={p.name}
                                        className="w-16 h-12 rounded object-cover"
                                    />
                                    <div>
                                        <h3 className="font-bold">{p.name}</h3>
                                        <p className="text-sm text-gray-500">{p.status}</p>
                                    </div>
                                </div>
                                <MoreHorizontal size={20} className="text-gray-500 cursor-pointer" />
                            </div>
                        ))}
                    </div>


                    <div className="bg-gray-50 rounded-xl shadow p-4">
                        <h2 className="text-lg font-semibold mb-4">Credit Sales Over Time</h2>
                        <div className="h-40 flex items-center justify-center text-gray-400">
                            📊 Graph Placeholder
                        </div>
                        <div className="mt-4 text-sm space-y-1">
                            <p>
                                <span className="font-semibold">Total Revenue:</span> $0/Price/Credit
                            </p>
                            <p>
                                <span className="font-semibold">Buyers this Month:</span> +51
                            </p>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-xl shadow p-4">
                        <h2 className="text-lg font-semibold mb-2">Activity Feed</h2>
                        <p className="text-sm text-gray-600">
                            New message from <span className="font-semibold">Buyer X</span>
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-xl shadow p-4">
                        <h2 className="text-lg font-semibold mb-2">Activity Feed</h2>
                        <p className="text-sm text-gray-600">
                            Purchased credits from <span className="font-semibold">Rain Forest</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

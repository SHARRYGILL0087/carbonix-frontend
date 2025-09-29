import React from 'react';
import {
  Home as DashboardOverviewIcon,
  LayoutDashboard as DashboardIcon,
  Users as UserManagementIcon,
  FileCheck as ProjectVerificationIcon,
  Database as DataOversightIcon,
  FileText as ReportsIcon,
  CreditCard as CreditManagementIcon,
  Settings as SettingsIcon,
  Check as CheckIcon,
  Eye as ViewIcon,
  MoreVertical as ActionsIcon,
} from 'lucide-react';

// --- Dummy Data ---
const organizationData = [
  {
    name: 'Green Coast Foundation',
    type: 'NGO',
    location: 'Bali, Indonesia',
    status: 'Pending Approval',
    actions: 'Review',
    isPending: true,
  },
  {
    name: 'Oceanic Alliance',
    type: 'Fiji',
    location: '1',
    status: 'Active',
    actions: 'Review',
    isPending: false,
  },
  {
    name: 'Oceanic Alliance',
    type: 'Fiji',
    location: 'Active',
    status: 'View',
    actions: 'Suspnd',
    isPending: false,
  },
  {
    name: 'Mangrove Savers',
    type: 'Vietnam',
    location: 'Suspnt',
    status: 'View',
    actions: 'Suspnd',
    isPending: false,
  },
  // Add more dummy data as needed
];

const pendingRegistrations = 8;

const activityLog = [
  'Coastal Panychhat of Kendwa approved registered',
  'New community "Tandwe" approved registered',
  'New community "Tanjung Village" registered',
];

// --- Sub Components ---

const Header = () => (
  <header className="flex justify-between items-center py-4 px-6 border-b border-gray-200 bg-white">
    <div className="text-xl font-bold text-blue-700">BluebonOS</div>
    <nav className="flex space-x-6 text-sm font-medium text-gray-600">
      <a href="#" className="hover:text-blue-600">Buyers</a>
      <a href="#" className="hover:text-blue-600">Sellers</a>
      <a href="#" className="hover:text-blue-600">Community</a>
      <a href="#" className="hover:text-blue-600">About</a>
      <a href="#" className="hover:text-blue-600 font-bold text-gray-800">Admins</a>
    </nav>
  </header>
);

const SidebarItem = ({ icon: Icon, label, isActive }) => (
  <a
    href="#"
    className={`flex items-center space-x-3 p-3 rounded-r-full transition-colors ${
      isActive
        ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-700'
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    <Icon className="w-5 h-5" />
    <span className="text-sm font-medium">{label}</span>
  </a>
);

const Sidebar = () => (
  <div className="w-60 bg-white pt-6 h-full shadow-inner">
    <div className="space-y-1 pr-4">
      <SidebarItem icon={DashboardOverviewIcon} label="Dashboard Overview" isActive={false} />
      <SidebarItem icon={DashboardIcon} label="Dashboard" isActive={false} />
      <SidebarItem icon={UserManagementIcon} label="User Management" isActive={true} />
      <SidebarItem icon={ProjectVerificationIcon} label="Project Verification" isActive={false} />
      <SidebarItem icon={DataOversightIcon} label="Data Oversight" isActive={false} />
      <SidebarItem icon={ReportsIcon} label="Reports" isActive={false} />
      <SidebarItem icon={CreditManagementIcon} label="Credit Management" isActive={false} />
      <SidebarItem icon={SettingsIcon} label="Settings" isActive={false} />
    </div>
  </div>
);

const TabButton = ({ label, isActive }) => (
  <button
    className={`px-6 py-2 text-sm font-semibold transition-colors ${
      isActive
        ? 'bg-blue-700 text-white rounded-t-lg'
        : 'bg-white text-gray-600 hover:bg-gray-50'
    }`}
  >
    {label}
  </button>
);

const OrganizationTable = () => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Organization Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Type
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Location
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {organizationData.map((org, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {org.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {org.type}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {org.location}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              {org.isPending ? (
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  {org.status}
                </span>
              ) : (
                <span className="text-gray-700">{org.status}</span>
              )}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <button
                  className={`text-blue-600 hover:text-blue-900 font-medium text-xs p-1 rounded ${
                    org.actions === 'Suspnd' ? 'border border-gray-300' : ''
                  }`}
                >
                  {org.actions}
                </button>
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PendingRegistrationsCard = () => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Pending Registrations</h3>
    <p className="text-3xl font-bold text-gray-700 mb-4">{pendingRegistrations} New User Requests</p>
    <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors">
      Review All
    </button>
  </div>
);

const ActivityLogCard = () => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Activity Log</h3>
    <ul className="space-y-3">
      {activityLog.map((log, index) => (
        <li key={index} className="flex justify-between items-center text-sm text-gray-600">
          <span className="flex-1">{log}</span>
          <span className="text-gray-400">{'['}1{']'}</span>
        </li>
      ))}
    </ul>
  </div>
);

// --- Main Component ---

const UserManagement = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto bg-gradient-to-b from-blue-50 to-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Title Section */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-light text-gray-800">User Management</h1>
              <p className="text-lg text-gray-500 mt-2">Manage platform participants</p>
              <div className="flex justify-center mt-4">
                <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-green-700 bg-green-200 rounded-full">
                  Remins
                  <CheckIcon className="w-4 h-4 ml-1" />
                </span>
              </div>
            </div>

            {/* Main Content Tabs and Table */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                <TabButton label="NGOS" isActive={true} />
                <TabButton label="Communities" isActive={false} />
                <TabButton label="Coastal Panchayats" isActive={false} />
              </div>

              {/* Table */}
              <div className="p-4">
                <OrganizationTable />
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <PendingRegistrationsCard />
              <ActivityLogCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserManagement;
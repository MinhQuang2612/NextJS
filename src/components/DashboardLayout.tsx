import React from "react";
import Image from "next/image";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 text-lg font-bold border-b border-gray-200">
          <span className="text-red-600">METRONIC</span>
        </div>
        <nav className="flex-grow overflow-y-auto">
          <ul className="space-y-2 px-4 py-6">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg"
              >
                <span className="ml-2">Dashboards</span>
              </a>
            </li>
            <li className="mt-6 font-semibold text-gray-500 uppercase text-xs">
              User
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg"
              >
                <span className="ml-2">Public Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg"
              >
                <span className="ml-2">My Account</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg"
              >
                <span className="ml-2">Network</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg"
              >
                <span className="ml-2">Authentication</span>
              </a>
            </li>
            <li className="mt-6 font-semibold text-gray-500 uppercase text-xs">
              Apps
            </li>
            <li>
              <span className="flex items-center p-2 text-gray-600 rounded-lg">
                <span className="ml-2">User Management</span>
                <span className="ml-auto text-xs text-gray-500">Soon</span>
              </span>
            </li>
            <li>
              <span className="flex items-center p-2 text-gray-600 rounded-lg">
                <span className="ml-2">Projects</span>
                <span className="ml-auto text-xs text-gray-500">Soon</span>
              </span>
            </li>
            <li>
              <span className="flex items-center p-2 text-gray-600 rounded-lg">
                <span className="ml-2">eCommerce</span>
                <span className="ml-auto text-xs text-gray-500">Soon</span>
              </span>
            </li>
            <li className="mt-6 font-semibold text-gray-500 uppercase text-xs">
              Miscellaneous
            </li>
            <li>
              <span className="flex items-center p-2 text-gray-600 rounded-lg">
                <span className="ml-2">Modals</span>
                <span className="ml-auto text-xs text-gray-500">Soon</span>
              </span>
            </li>
            <li>
              <span className="flex items-center p-2 text-gray-600 rounded-lg">
                <span className="ml-2">Wizards</span>
                <span className="ml-auto text-xs text-gray-500">Soon</span>
              </span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md border-b border-gray-200">
  {/* Navigation Links */}
  <nav className="flex space-x-6">
    <a href="#" className="text-sm font-medium text-black hover:text-blue-600">
      Home
    </a>
    <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">
      Profiles
    </a>
    <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">
      My Account
    </a>
    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">
      Network
    </a>
    <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">
      Authentication
    </a>
    <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">
      Help
    </a>
  </nav>

  {/* Icons and Avatar */}
  <div className="flex items-center space-x-4">
    <button className="p-2 rounded-full hover:bg-gray-100">
      <svg
        className="w-5 h-5 text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 10l4.553-4.553a9 9 0 11-4.906 4.906L10 15"
        />
      </svg>
    </button>
    <button className="p-2 rounded-full hover:bg-gray-100">
      <svg
        className="w-5 h-5 text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 8h10M7 12h4m-2 8a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
    </button>
    <button className="p-2 rounded-full hover:bg-gray-100">
      <svg
        className="w-5 h-5 text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4h16v16H4z"
        />
      </svg>
    </button>
    <button className="p-2 rounded-full hover:bg-gray-100">
      <svg
        className="w-5 h-5 text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 19l-4-4m0 0a5 5 0 10-7.07-7.07M13 13l-4 4"
        />
      </svg>
    </button>
    <div className="w-8 h-8 rounded-full border-2 border-green-400">
    <Image
        src="/media/avatars/300-2.png"
        alt="User Avatar"
        width={32} // Đặt kích thước phù hợp
        height={32}
        className="rounded-full border-2 border-green-400"
    />
    </div>
  </div>
</header>

        {/* Page Content */}
        <main className="flex-grow p-6">{children}</main>
      </div>
    </div>
  );
}

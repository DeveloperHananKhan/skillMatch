import { useState } from "react";
import { Link } from "react-router-dom";

import {
  X,
  User,
  Book,
  Star,
  Bell,
  LogOut,
  Folder,
  MessageSquare,
  LayoutGrid,
  Moon,
} from "lucide-react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-black w-full px-5 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <svg
              width="160"
              height="45"
              viewBox="0 0 200 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="0"
                y="35"
                fontFamily="'Segoe UI', sans-serif"
                fontWeight="bold"
                fontSize="28"
                fill="#58A6FF"
              >
                Skill
              </text>

              <text
                x="75"
                y="35"
                fontFamily="'Segoe UI', sans-serif"
                fontWeight="bold"
                fontSize="28"
                fill="white"
              >
                Match
              </text>

              <g transform="translate(160, 10)">
                <path
                  d="M0 12 L6 6 L0 0"
                  stroke="#58A6FF"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M14 0 L8 6 L14 12"
                  stroke="#58A6FF"
                  strokeWidth="2"
                  fill="none"
                />
              </g>
            </svg>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <ul className="text-white flex gap-6 text-sm">
            <Link to="/">
              <li
                className="relative cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0
                  before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              >
                Home
              </li>
            </Link>
            <li
              className="relative cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0
                  before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              About us
            </li>
            <li
              className="relative cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0
                  before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              Contact
            </li>
          </ul>

          <div className="relative w-64 ml-6">
            <input
              type="search"
              placeholder="Search..."
              className="w-full pl-3 pr-10 py-2 text-sm text-white bg-gray-800 border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:border-[#58A6FF]"
            />
            <div className="absolute right-2 top-2.5 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4-4m0 0a7 7 0 10-10 0 7 7 0 0010 0z"
                />
              </svg>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6 text-white cursor-pointer focus:text-[#58A6FF] transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0h6z"
            />
          </svg>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            className="rounded-full w-7 h-7 cursor-pointer"
            alt="User Profile"
            onClick={() => setOpen(true)}
          />
        </div>

        {/* Sidebar */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9990]"
          ></div>
        )}

        <aside
          className={`fixed top-0 right-0 h-full w-80 bg-[#0D1117] text-white border-l border-gray-800 shadow-lg transform transition-transform duration-300 z-[9999] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
            <h2 className="text-xl font-semibold">Your Account</h2>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-4 py-4 text-sm">
            <h3 className="text-gray-400 text-xs mb-1">Profile</h3>

            <button className="flex items-center gap-3 px-2 py-2 rounded lg:hover:bg-gray-800 focus:bg-gray-800">
              <User className="w-4 h-4 text-gray-400" />{" "}
              <Link to="/dashboard/profile">Your Profile </Link>
            </button>

            <h3 className="text-gray-400 text-xs mt-4 mb-1">Your Work</h3>
            <button className="flex items-center gap-3 px-2 py-2 rounded lg:hover:bg-gray-800 focus:bg-gray-800">
              <Book className="w-4 h-4 text-gray-400" /> Repositories
            </button>
            <button className="flex items-center gap-3 px-2 py-2 rounded lg:hover:bg-gray-800 focus:bg-gray-800">
              <Folder className="w-4 h-4 text-gray-400" /> Projects
            </button>
            <button className="flex items-center gap-3 px-2 py-2 rounded lg:hover:bg-gray-800 focus:bg-gray-800">
              <Star className="w-4 h-4 text-gray-400" /> Starred
            </button>

            <h3 className="text-gray-400 text-xs mt-4 mb-1">Communication</h3>
            <button className="flex items-center gap-3 px-2 py-2 rounded lg:hover:bg-gray-800 focus:bg-gray-800">
              <Bell className="w-4 h-4 text-gray-400" /> Notifications
            </button>
            <button className="flex items-center gap-3 px-2 py-2 rounded lg:hover:bg-gray-800 focus:bg-gray-800">
              <MessageSquare className="w-4 h-4 text-gray-400" /> Messages
            </button>

            <h3 className="text-gray-400 text-xs mt-4 mb-1">Settings</h3>
            <button className="flex items-center gap-3 px-2 py-2 rounded lg:hover:bg-gray-800 focus:bg-gray-800">
              <LayoutGrid className="w-4 h-4 text-gray-400" /> Preferences
            </button>
            <button className="flex items-center gap-3 px-2 py-2 rounded lg:hover:bg-gray-800 focus:bg-gray-800">
              <Moon className="w-4 h-4 text-gray-400" /> Appearance
            </button>

            <h3 className="text-gray-400 text-xs mt-4 mb-1">Other</h3>
            <button className="flex items-center gap-3 px-2 py-2 rounded lg:hover:bg-gray-800 focus:bg-gray-800">
              <LogOut className="w-4 h-4 text-gray-400" /> Sign Out
            </button>
          </nav>
        </aside>

        <div className="block md:hidden" onClick={() => setIsOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-7 h-7 text-white cursor-pointer focus:text-[#58A6FF] transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>
      {/*mobile hamburger */}

      <>
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 bg-black backdrop-blur-sm transition-opacity duration-300 ${
            isOpen
              ? "opacity-50 pointer-events-auto z-40"
              : "opacity-0 pointer-events-none"
          }`}
        ></div>

        <div
          className={`fixed top-0 left-0 w-64 h-full bg-[#0D1117] p-5 flex flex-col gap-6 text-white transform transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="self-end text-white text-xl"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>

          <p className="text-xl font-semibold">SkillMatch</p>

          <div className="relative w-full">
            <input
              type="search"
              placeholder="Search..."
              className="w-full pl-3 pr-10 py-2 text-sm text-white bg-gray-800 border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:border-[#58A6FF]"
            />
            <div className="absolute right-3 top-2.5 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4-4m0 0a7 7 0 10-10 0 7 7 0 0010 0z"
                />
              </svg>
            </div>
          </div>

          <ul className="flex flex-col gap-3 text-sm">
            <Link to="/">
              <li className="focus:text-[#58A6FF] cursor-pointer transition">
                Home
              </li>
            </Link>
            <li className="focus:text-[#58A6FF] cursor-pointer transition">
              About us
            </li>
            <li className="focus:text-[#58A6FF] cursor-pointer transition">
              Contact
            </li>
          </ul>

          <div className="flex items-center gap-4 mt-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6 text-white cursor-pointer focus:text-[#58A6FF] transition"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0h6z"
              />
            </svg>

            <button
              onClick={() => {
                setOpen(true);
                setIsOpen(false);
              }}
              className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-800"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                className="rounded-full w-6 h-6"
                alt="Profile"
              />
              <span className="text-sm">Your Account</span>
            </button>
          </div>
        </div>
      </>
    </>
  );
};

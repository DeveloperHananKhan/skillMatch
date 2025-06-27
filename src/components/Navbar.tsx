import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-black w-full px-5 py-2 flex justify-between items-center">
        <div className="flex items-center">
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
            className="w-6 h-6 text-white cursor-pointer hover:text-[#58A6FF] transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0h6z"
            />
          </svg>

          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            className="rounded-full w-7 h-7"
            alt="User Profile"
          />
        </div>

        <div className="block md:hidden" onClick={() => setIsOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-7 h-7 text-white cursor-pointer hover:text-[#58A6FF] transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-tarnsparent bg-opacity-50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 w-64 h-full bg-[#0D1117] z-50 p-5 flex flex-col gap-6 text-white">
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
                <li className="hover:text-[#58A6FF] cursor-pointer transition">
                  Home
                </li>
              </Link>
              <li className="hover:text-[#58A6FF] cursor-pointer transition">
                About us
              </li>
              <li className="hover:text-[#58A6FF] cursor-pointer transition">
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
                className="w-6 h-6 text-white cursor-pointer hover:text-[#58A6FF] transition"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0h6z"
                />
              </svg>

              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                className="rounded-full w-7 h-7"
                alt="User Profile"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const Footer = () => {
  return (
    <>
      <footer className="bg-black  text-white w-full px-6 py-10 ">
        <div className="w-full max-w-6xl h-px bg-gray-800 mx-auto my-16"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <svg
              width="160"
              height="40"
              viewBox="0 0 220 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="0"
                y="30"
                fontFamily="'Segoe UI', sans-serif"
                fontWeight="bold"
                fontSize="24"
                fill="#58A6FF"
              >
                Skill
              </text>
              <text
                x="75"
                y="30"
                fontFamily="'Segoe UI', sans-serif"
                fontWeight="bold"
                fontSize="24"
                fill="white"
              >
                Match
              </text>
              <g transform="translate(160, 8)">
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

            <p className="text-gray-400 mt-2 text-sm">
              Your gateway to connect with tech opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Navigation</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="hover:text-[#58A6FF] cursor-pointer">Home</li>
              <li className="hover:text-[#58A6FF] cursor-pointer">About Us</li>
              <li className="hover:text-[#58A6FF] cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#58A6FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12H8m0 0l4-4m-4 4l4 4m8 4V8a2 2 0 00-2-2H6a2 2 0 00-2 2v12"
                  />
                </svg>
                Email: support@skillmatch.com
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#58A6FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h1l3 5-4 4a16 16 0 006 6l4-4 5 3v1a2 2 0 01-2 2h-1C8.268 21 3 15.732 3 9V5z"
                  />
                </svg>
                Phone: +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#58A6FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 12l4.243-4.243M6.343 7.343L10.586 12 6.343 16.243"
                  />
                </svg>
                Location: Srinagar, India
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Social</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-400 hover:text-[#58A6FF] cursor-pointer transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.39 7.86 10.92.58.1.79-.25.79-.55v-2c-3.2.7-3.87-1.38-3.87-1.38-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.4.97.1-.76.4-1.27.72-1.56-2.56-.3-5.25-1.28-5.25-5.71 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.52.1-3.17 0 0 .98-.31 3.2 1.18a11.03 11.03 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.62 1.65.23 2.87.1 3.17.75.8 1.2 1.82 1.2 3.08 0 4.44-2.7 5.41-5.28 5.7.41.35.77 1.02.77 2.06v3.05c0 .3.21.65.8.54A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                </svg>
                GitHub
              </li>

              <li className="flex items-center gap-3 text-gray-400 hover:text-[#58A6FF] cursor-pointer transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.7 4.11A12.94 12.94 0 0 1 3.15 2.1a4.48 4.48 0 0 0 1.4 6.05 4.42 4.42 0 0 1-2.05-.57v.06a4.5 4.5 0 0 0 3.63 4.42 4.49 4.49 0 0 1-2.03.08 4.51 4.51 0 0 0 4.2 3.13A9.05 9.05 0 0 1 2 19.54 12.8 12.8 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0 0 23 3Z" />
                </svg>
                Twitter
              </li>

              <li className="flex items-center gap-3 text-gray-400 hover:text-[#58A6FF] cursor-pointer transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 1 1-.01 5.01A2.5 2.5 0 0 1 4.98 3.5ZM3 9h4v12H3zm7.5 0h3.8v1.8h.05c.53-1 1.83-2.1 3.77-2.1 4 0 4.73 2.6 4.73 5.97V21h-4v-5.25c0-1.25-.03-2.87-1.75-2.87s-2.02 1.36-2.02 2.77V21h-4z" />
                </svg>
                LinkedIn
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-10  pt-4">
          © 2025 SkillMatch. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export const HowItWorks = () => {
  return (
    <>
    
      <section id="how-it-works" className="bg-black text-white py-20 px-6">
                <div className="w-full max-w-6xl h-px bg-gray-800 mx-auto my-10"></div>
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 text-base">
            A simple 4-step journey to get matched and grow as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#161B22] p-6 rounded-lg border border-gray-700 focus:border-[#58A6FF] focus:scale-[1.03] transform transition duration-300 cursor-pointer lg:hover:border-[#58A6FF] hover:scale-[1.03] transform transition duration-300 cursor-pointer">
            <div className="mb-4 text-[#58A6FF]">
              <svg
                className="w-10 h-10 mx-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A4 4 0 018 16h8a4 4 0 012.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Create Profile
            </h3>
            <p className="text-gray-400 text-sm text-center">
              Sign up and showcase your skills, experience, and projects.
            </p>
          </div>

          <div className="bg-[#161B22] p-6 rounded-lg border border-gray-700 focus:border-[#58A6FF] focus:scale-[1.03] transform transition duration-300 cursor-pointer  lg:hover:border-[#58A6FF] hover:scale-[1.03] transform transition duration-300 cursor-pointer">
            <div className="mb-4 text-[#58A6FF]">
              <svg
                className="w-10 h-10 mx-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Find Work
            </h3>
            <p className="text-gray-400 text-sm text-center">
              Explore projects, jobs, and dev teams based on your tech stack.
            </p>
          </div>

          <div className="bg-[#161B22] p-6 rounded-lg border border-gray-700 focus:border-[#58A6FF] focus:scale-[1.03] transform transition duration-300 cursor-pointer  lg:hover:border-[#58A6FF] hover:scale-[1.03] transform transition duration-300 cursor-pointer">
            <div className="mb-4 text-[#58A6FF]">
              <svg
                className="w-10 h-10 mx-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c0-2.21 1.79-4 4-4s4 1.79 4 4m-8 0c0-2.21-1.79-4-4-4S4 8.79 4 11m8 0v10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Get Matched
            </h3>
            <p className="text-gray-400 text-sm text-center">
              We match you with the best opportunities based on your profile.
            </p>
          </div>

          <div className="bg-[#161B22] p-6 rounded-lg border border-gray-700 focus:border-[#58A6FF] focus:scale-[1.03] transform transition duration-300 cursor-pointer  lg:hover:border-[#58A6FF] hover:scale-[1.03] transform transition duration-300 cursor-pointer">
            <div className="mb-4 text-[#58A6FF]">
              <svg
                className="w-10 h-10 mx-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v16h16V4H4zm4 14V6h8v12H8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Grow</h3>
            <p className="text-gray-400 text-sm text-center">
              Collaborate, learn from others, and build a real-world portfolio.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

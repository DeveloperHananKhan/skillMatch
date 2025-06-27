import { Link } from "react-router-dom";
export const LetsGetStarted = () => {
  return (
    <>
      <section  className="bg-black  text-white py-20 px-6">
         <div className="w-full max-w-6xl h-px bg-gray-800 mx-auto my-10"></div>
        <div    className="max-w-6xl mx-auto text-center mb-12">
          <h2 id="lets-get-satrted" className="text-3xl md:text-4xl font-bold mb-4">
            Get Started Today
          </h2>
          <p className="text-gray-400 text-base">
            Begin your journey with just a few clicks. Build your presence and
            explore projects.
          </p>
        </div>

        <div  className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="bg-[#161B22] p-6 rounded-lg border border-gray-700 active:border-[#58A6FF] active:scale-[1.03] transform transition duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">1. Sign Up</h3>
            <p className="text-gray-400 text-sm">
              Create your free account in seconds.
            </p>
          </div>

          <div className="bg-[#161B22] p-6 rounded-lg border border-gray-700 active:border-[#58A6FF] active:scale-[1.03] transform transition duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">
              2. Build Your Profile
            </h3>
            <p className="text-gray-400 text-sm">
              Add your skills, projects, and bio.
            </p>
          </div>

          <div className="bg-[#161B22] p-6 rounded-lg border border-gray-700 active:border-[#58A6FF] active:scale-[1.03] transform transition duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">3. Explore Work</h3>
            <p className="text-gray-400 text-sm">
              Start applying to jobs and joining teams.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
            <Link to='register'>
          <button  className="bg-[#58A6FF] active:bg-[#1f6feb] text-white font-semibold py-3 px-8 rounded transition">
            
            Join Now
          </button>
          </Link>
        </div>
      </section>
    </>
  );
};

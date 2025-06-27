import { NavBar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
export const Register = () => {
  return (
    <>
      <NavBar />
      <section className="min-h-screen flex flex-col items-center justify-center bg-black px-4 py-12 border-t-[1px] border-gray-800 border-solid ">
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

        <div  className="w-full max-w-md bg-[#161B22] border border-gray-700 rounded-md shadow-lg p-8 active:border-[#58A6FF] ">
          <h1 className="text-2xl font-bold text-white mb-6">
            Create an account
          </h1>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-white mb-1">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded bg-black text-white border border-gray-600 focus:outline-none focus:border-[#58A6FF]"
                placeholder="e.g. hanan_khan"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-1">
                Email address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 rounded bg-black text-white border border-gray-600 focus:outline-none focus:border-[#58A6FF]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-1">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 rounded bg-black text-white border border-gray-600 focus:outline-none focus:border-[#58A6FF]"
                placeholder="••••••••"
              />
            </div>

            <button
              type="button"
              className="w-full bg-[#58A6FF] active:bg-[#1f6feb] text-white font-medium py-2 rounded mt-2 cursor-pointer"
            >
              Sign up
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-6 text-center">
            Already have an account?{" "}
            <Link to='/login'>
            <span  className="text-[#58A6FF] active:underline">
              Sign in
            </span>
            </Link>
          </p>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6 max-w-sm">
          By clicking “Sign up”, you agree to our{" "}
          <a href="#" className="underline active:text-gray-300">
            terms
          </a>{" "}
          and{" "}
          <a href="#" className="underline active:text-gray-300">
            privacy policy
          </a>
          .
        </p>
      </section>
      <Footer />
    </>
  );
};

import { NavBar } from "./Navbar";
import DevHero from "../assets/DevHero.svg";
import { HowItWorks } from "./HowItWorks";
import { LetsGetStarted } from "./lLetsGetStarted";
import { Footer } from "./Footer";
export const HeroSecrion = () => {
  return (
    <>
      <NavBar />
      <section className="bg-black  text-white  px-6 py-20 max-w-full border-t-[1px] border-gray-800 border-solid ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 ">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold">
              Where Developers Meet Opportunity
            </h1>
            <h3 className="text-gray-400 text-lg mt-4">
              Build your profile. Join projects. Grow your career.
            </h3>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("lets-get-satrted")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[#58A6FF] active:bg-[#1f6feb] text-white font-semibold py-2 px-6 rounded transition"
              >
                Get Started
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border border-[#58A6FF] text-[#58A6FF] active:bg-[#1f6feb] active:text-white font-semibold py-2 px-6 rounded transition"
              >
                How It Works
              </button>
            </div>
          </div>
          <div className="p-4 md:p-0">
            {" "}
            <img
              src={DevHero}
              alt="Developer illustration"
              className="w-full max-w-md mx-auto h-[300px] "
            />
          </div>
        </div>
      </section>
      
      <LetsGetStarted />
     
      <HowItWorks />
      <Footer />
    </>
  );
};

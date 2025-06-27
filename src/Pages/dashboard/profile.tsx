import { useState } from "react";
import { NavBar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
export const Profile = ()=>{

    
const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Repositories", "Projects", "Stars", "Followers"];

  return (<>
  <NavBar />

    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-10 border-t-[1px] border-gray-800 border-solid ">
      
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-gray-600"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-bold">Hanan Khan</h1>
          <p className="text-gray-400">@hanankhan</p>
          <p className="mt-2 text-sm text-gray-300">
            Full-stack web developer passionate about clean UI and scalable code.
          </p>

          <div className="mt-4 flex gap-4 text-sm text-gray-400">
            <span>Kashmir, India</span>
            <span>•</span>
            <span>hanan@example.com</span>
            <span>•</span>
            <span>Joined Jan 2024</span>
          </div>

          <button className="mt-4 px-4 py-1 rounded-md border border-gray-600 text-sm hover:bg-gray-800">
            Edit profile
          </button>
        </div>
      </div>

    
      <div className="mt-6 flex gap-6 text-sm text-gray-400">
        <span><strong className="text-white">32</strong> followers</span>
        <span><strong className="text-white">12</strong> following</span>
        <span><strong className="text-white">25</strong> repositories</span>
      </div>

      <div className="border-b border-gray-700 mt-10 flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium border-b-2 transition duration-200 ${
              activeTab === tab
                ? "border-[#58A6FF] text-white"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      
      <div className="mt-6">
        {activeTab === "Overview" && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Pinned Repositories</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2].map((repo) => (
                <div
                  key={repo}
                  className="border border-gray-700 p-4 rounded-lg bg-[#161B22]"
                >
                  <h4 className="text-[#58A6FF] font-semibold">tasknexus</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    A clean and minimal task management app built with React.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Repositories" && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Repositories</h3>
            <ul className="space-y-4">
              <li className="border border-gray-700 p-4 rounded-lg bg-[#161B22]">
                <h4 className="text-[#58A6FF] font-semibold">tasknexus</h4>
                <p className="text-sm text-gray-400">Status & priority filter features</p>
              </li>
              <li className="border border-gray-700 p-4 rounded-lg bg-[#161B22]">
                <h4 className="text-[#58A6FF] font-semibold">weather-app</h4>
                <p className="text-sm text-gray-400">Displays weather using WeatherAPI</p>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "Projects" && (
          <p className="text-gray-400">You don’t have any public projects yet.</p>
        )}

        {activeTab === "Stars" && (
          <p className="text-gray-400">You haven’t starred any repositories yet.</p>
        )}

        {activeTab === "Followers" && (
          <p className="text-gray-400">No followers to show yet.</p>
        )}
      </div>
    </div>
    <Footer />
</>)
}
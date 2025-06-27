import "./App.css";
import { HeroSecrion } from "./components/HeroSection";
import { Routes, Route } from "react-router-dom";
import { Register } from "./Pages/Register";
import { LogIn } from "./Pages/LogIn";
import { ScrollToTop } from "./Scroll/ScrollTop";
import { Profile } from "./Pages/dashboard/profile";

function App() {
  return (
    <>
      {" "}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HeroSecrion />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard/profile" element={<Profile/>} />
      </Routes>
    </>
  );
}

export default App;

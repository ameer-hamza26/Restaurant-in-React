import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="bg-image" className="">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Routes>
            <Route element={<AboutUs />}></Route>
          </Routes>
        </Router>

        <Footer/>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import MenuItems from './components/MenuItems';
import RestoranAbout from './components/RestoranAbout';
import Reservation from './components/Reservation';
import Home from './pages/Home';



function App() {
  return (
    <div id="bg-image" className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
     
      <Footer />
    </div>
  );
}

export default App;
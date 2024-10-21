import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollButton from './components/ScrollButton';



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
      <ScrollButton/>     
      <Footer />
    </div>
  );
}

export default App;
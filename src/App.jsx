import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollButton from './components/ScrollButton';
import Reservation from './components/Reservation';

function App() {
  return (
    <div id="app" className="">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/reservation" element={<Reservation />} /> 
          </Routes>
        </main>
        <ScrollButton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import TestimonialSlider from './components/TestimonialSection';
import Footer from './components/Footer';
import './App.css';
import { TestimonialData } from './components/TestimonialData';


const App = () => {
  return (
    <>
      <Router>
        <div className="wrapper">
          <Navbar />
          <HeroSection />
          <InfoSection />
          <TestimonialSlider testimonials={TestimonialData} />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
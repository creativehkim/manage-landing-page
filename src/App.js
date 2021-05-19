import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import './App.css';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <InfoSection />
        <Footer />
      </Router>
    </>
  );
}

export default App;
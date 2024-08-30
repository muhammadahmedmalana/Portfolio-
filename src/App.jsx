import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

import './App.scss';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Skills from './pages/skills';
import Portfolio from './pages/portfolio';
import NavBar from './components/NavBar';
import particles from './utilies/particles';


function App() {

  const location = useLocation();
  
  const handleInit = initParticlesEngine(async (engine) => {
    await loadFull(engine);
  });

  return (
    <div className="App">
      {/* ParticlesJS */}
    {
      location.pathname === "/" && <Particles
        id="particles"
        init={handleInit}
        options={particles}
      />
    }

      {/* Navbar */}
      <NavBar />

      {/* Main page content */}
     <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

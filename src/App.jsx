import React, { useRef, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <video className="back-vid" autoPlay loop muted playsInline src="/videos/galaxy.mp4" />

      <Header />
      <div className="blackhole-box" data-aos="fade-down" data-aos-duration="2000">
        <video autoPlay loop muted playsInline src="/videos/blackhole.mp4" />
      </div>

      <Hero />
      <InfoSection />
      <Projects />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  // You can update this number if you add more images/videos
  const totalAssets = 2; // Galaxy video + Blackhole video

  const galaxyRef = useRef();
  const blackholeRef = useRef();

  useEffect(() => {
    const checkLoaded = () => {
      setAssetsLoaded((prev) => prev + 1);
    };

    const galaxyVideo = galaxyRef.current;
    const blackholeVideo = blackholeRef.current;

    if (galaxyVideo?.readyState >= 3) {
      checkLoaded();
    } else {
      galaxyVideo?.addEventListener('canplaythrough', checkLoaded);
    }

    if (blackholeVideo?.readyState >= 3) {
      checkLoaded();
    } else {
      blackholeVideo?.addEventListener('canplaythrough', checkLoaded);
    }

    return () => {
      galaxyVideo?.removeEventListener('canplaythrough', checkLoaded);
      blackholeVideo?.removeEventListener('canplaythrough', checkLoaded);
    };
  }, []);

  useEffect(() => {
    if (assetsLoaded >= totalAssets) {
      setTimeout(() => setAllLoaded(true), 300);
    }
  }, [assetsLoaded, totalAssets]);

  // Spinner keyframes
  const keyframes = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;

  // Loader overlay style
  const loaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 9999,
  };

  const spinnerStyle = {
    border: '4px solid rgba(255,255,255,0.2)',
    borderTop: '4px solid #fff',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite',
    marginBottom: '12px',
  };

  return (
    <>
      {/* Inject keyframes into the document */}
      <style>{keyframes}</style>

      {!allLoaded && (
        <div style={loaderStyle}>
          <div style={spinnerStyle}></div>
          <div>Loading...</div>
        </div>
      )}

      <div className="container" style={{ visibility: allLoaded ? 'visible' : 'hidden' }}>
        <video
          className="back-vid"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="/videos/Galaxy.mp4"
          ref={galaxyRef}
          aria-hidden="true"
        />

        <Header />

        <div className="blackhole-box" data-aos="fade-down" data-aos-duration="2000">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src="/videos/blackhole.mp4"
            ref={blackholeRef}
            aria-hidden="true"
          />
        </div>

        <Hero />
        <InfoSection />
        <Projects />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;

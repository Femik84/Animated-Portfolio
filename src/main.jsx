import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';

// Optional: AOS animation setup
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS animations
AOS.init({
  duration: 1000,
  once: true,
});

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("No root element found. Check if your index.html contains: <div id='root'></div>");
}

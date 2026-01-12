
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let videoLoaded = false;
    let criticalImagesLoaded = false;
    let minTimeElapsed = false;

    // Tiempo mínimo para mostrar el loader (1s)
    const minTimer = setTimeout(() => {
      minTimeElapsed = true;
      checkAllLoaded();
    }, 1000);

    // Timeout de seguridad (5s máximo)
    const safetyTimer = setTimeout(() => {
      console.warn('Timeout de seguridad: cargando página de todos modos');
      setLoading(false);
    }, 5000);

    // Precargar video (solo metadata)
    const video = document.createElement('video');
    video.src = '/videos/pc_video.mp4';
    video.preload = 'metadata';
    
    video.addEventListener('loadedmetadata', () => {
      videoLoaded = true;
      checkAllLoaded();
    });

    video.addEventListener('error', () => {
      videoLoaded = true; // Continuar aunque falle
      checkAllLoaded();
    });

    // Precargar solo imágenes críticas (las que se ven inmediatamente)
    const criticalImages = [
      '/imgs/agro_logo.webp',
      '/imgs/naranjas.webp'
    ];

    let loadedCount = 0;
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === criticalImages.length) {
          criticalImagesLoaded = true;
          checkAllLoaded();
        }
      };
    });

    function checkAllLoaded() {
      if (videoLoaded && criticalImagesLoaded && minTimeElapsed) {
        setTimeout(() => {
          setLoading(false);
        }, 200);
      }
    }

    return () => {
      clearTimeout(minTimer);
      clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;

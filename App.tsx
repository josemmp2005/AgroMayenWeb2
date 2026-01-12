
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
    let imagesLoaded = false;
    let minTimeElapsed = false;

    // Esperar un mínimo de 1.5 segundos para que se vea la animación
    const minTimer = setTimeout(() => {
      minTimeElapsed = true;
      checkAllLoaded();
    }, 1500);

    // Precargar el video
    const video = document.createElement('video');
    video.src = '/videos/pc_video.mp4';
    video.preload = 'auto';
    
    video.addEventListener('loadeddata', () => {
      videoLoaded = true;
      checkAllLoaded();
    });

    video.addEventListener('error', () => {
      // Si hay error, continuar de todos modos después del tiempo mínimo
      videoLoaded = true;
      checkAllLoaded();
    });

    // Precargar imágenes críticas
    const imagesToLoad = [
      '/imgs/agro_logo.png',
      '/imgs/naranjas.png',
      '/imgs/service_1.png',
      '/imgs/service_2.png',
      '/imgs/service_3.png',
      '/imgs/service_4.png'
    ];

    let loadedImagesCount = 0;
    const totalImages = imagesToLoad.length;

    imagesToLoad.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedImagesCount++;
        if (loadedImagesCount === totalImages) {
          imagesLoaded = true;
          checkAllLoaded();
        }
      };
    });

    function checkAllLoaded() {
      if (videoLoaded && imagesLoaded && minTimeElapsed) {
        // Pequeño delay adicional para transición suave
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    }

    return () => {
      clearTimeout(minTimer);
      video.removeEventListener('loadeddata', () => {});
      video.removeEventListener('error', () => {});
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

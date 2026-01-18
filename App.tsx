
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import LegalNotice from './pages/LegalNotice';
import TechnicalSheets from './pages/TechnicalSheets';
import AdminLogin from './pages/AdminLogin';

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

      {!loading && (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacidad" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/aviso-legal" element={<LegalNotice />} />
            <Route path="/fichas-tecnicas" element={<TechnicalSheets />} />
            <Route path="/gestion-empleados" element={<AdminLogin />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;

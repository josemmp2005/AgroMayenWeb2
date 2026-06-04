
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';

// Lazy load pages for performance (Code Splitting)
const Home = lazy(() => import('./pages/Home'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Cookies = lazy(() => import('./pages/Cookies'));
const LegalNotice = lazy(() => import('./pages/LegalNotice'));
const TechnicalSheets = lazy(() => import('./pages/TechnicalSheets'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
          <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacidad" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/aviso-legal" element={<LegalNotice />} />
              <Route path="/fichas-seguridad" element={<TechnicalSheets />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      )}
    </>
  );
};

export default App;

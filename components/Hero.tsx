import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/pc_video.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-black/30 border border-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8"
        >
          <span className="text-white text-xs tracking-wider uppercase font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
            Servicios Agrícolas y Soluciones Fitosanitarias
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Garantía y rentabilidad <br />
          para tus <span className="text-brand-lime">cultivos</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-white/90 font-normal max-w-3xl mx-auto mt-8 leading-relaxed font-dm"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ofrecemos asesoramiento técnico personalizado y distribución de productos fitosanitarios de máxima calidad. Acompañamos al agricultor en cada etapa para proteger su explotación con la máxima eficacia y sostenibilidad.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-10 justify-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={() => scrollTo('servicios')}
            className="bg-brand-lime text-brand-dark px-8 py-4 rounded-xl font-bold text-base hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-lg shadow-black/10"
          >
            Nuestros servicios
          </button>
          <button
            onClick={() => scrollTo('contacto')}
            className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300"
          >
            Contactar técnico
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        onClick={() => scrollTo('servicios')}
      >
        <span className="text-white/60 text-xs uppercase tracking-widest font-semibold">Desplazar</span>
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center p-1 backdrop-blur-sm bg-black/10">
          <motion.div
            className="w-1.5 h-1.5 bg-brand-lime rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

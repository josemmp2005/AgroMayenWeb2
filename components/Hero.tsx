
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/pc_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl bg-gradient-to-r from-emerald-200 via-lime-300 to-brand-lime bg-clip-text text-transparent"
        >
          <span className="font-comfortaa">Agroquímicos Mayen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-stone-100 mb-10 font-light max-w-2xl mx-auto drop-shadow-md"
        >
          Especialistas en la salud del cítrico. Cuidamos tu tierra, maximizamos tu producción con soluciones sostenibles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contacto"
            className="px-8 py-4 bg-brand-lime text-brand-dark rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-xl"
          >
            Contáctanos
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
          >
            Ver Servicios
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10"
      >
        <a href="#servicios" aria-label="Desplazarse hacia abajo" className="text-brand-lime opacity-80 hover:opacity-100 transition-opacity">
          <ArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#3a4a16]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative flex flex-col items-center max-w-xs w-full px-8">
        {/* Logo */}
        <motion.img
          src="/imgs/agro_logo.webp"
          alt="AgroMayen Logo"
          className="w-24 h-24 object-contain mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Brand Name */}
        <motion.h1
          className="font-comfortaa text-3xl font-bold text-white tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          AgroMayen
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-outfit text-brand-lime/80 text-[11px] uppercase tracking-[0.25em] mt-1.5 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Soluciones Fitosanitarias
        </motion.p>

        {/* Thin Elegant Progress Bar */}
        <div className="w-32 h-[2px] bg-white/10 rounded-full mt-8 overflow-hidden">
          <motion.div
            className="h-full bg-brand-lime"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;

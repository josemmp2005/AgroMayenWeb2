import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home as HomeIcon, Leaf } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f7f2]">
      <Header />
      
      <main className="flex-grow flex items-center justify-center relative overflow-hidden px-6 py-32">
        {/* Decorative Leaves */}
        <Leaf className="absolute top-1/4 left-1/4 text-brand-lime/10 w-32 h-32 -rotate-12" />
        <Leaf className="absolute bottom-1/4 right-1/4 text-brand-dark/5 w-48 h-48 rotate-45" />
        <Leaf className="absolute top-1/2 right-1/3 text-brand-leaf/10 w-24 h-24 rotate-90" />

        <div className="relative z-10 text-center">
          <motion.h1 
            className="text-8xl lg:text-[150px] font-bold text-brand-lime/20 font-outfit leading-none mb-4"
            initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            404
          </motion.h1>
          
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4 font-outfit"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Página no encontrada
          </motion.h2>
          
          <motion.p 
            className="text-warm-gray text-lg max-w-md mx-auto mb-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Lo sentimos, parece que la página que buscas no existe o ha sido movida.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/"
              className="inline-flex items-center gap-2 bg-brand-lime text-brand-dark px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:-translate-y-1 hover:shadow-brand-lime/20 transition-all duration-300 active:scale-95 text-lg"
            >
              Volver al inicio <HomeIcon size={20} />
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;

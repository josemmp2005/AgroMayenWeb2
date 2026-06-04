import React from 'react';
import { motion } from 'framer-motion';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import About from '../components/About';
import Trust from '../components/Trust';
import CtaBanner from '../components/CtaBanner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-cream min-h-screen"
    >
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Trust />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;

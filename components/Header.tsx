import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Contacto', id: 'contacto' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white border-b border-stone-200/60 py-4 px-6 md:px-12 shadow-sm'
            : 'bg-transparent py-6 px-6 md:px-12'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('inicio')}
          >
            <img 
              src="/imgs/agro_logo.webp" 
              alt="AgroMayen" 
              className="h-9 w-9 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className={`font-comfortaa font-bold text-xl transition-colors duration-300 ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
              AgroMayen
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative font-semibold text-sm tracking-wide transition-colors duration-300 group ${
                  scrolled ? 'text-brand-dark hover:text-brand-leaf' : 'text-white/90 hover:text-brand-lime'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-brand-dark' : 'bg-brand-lime'}`}></span>
              </button>
            ))}
            <Link
              to="/fichas-seguridad"
              className={`relative font-semibold text-sm tracking-wide transition-colors duration-300 group ${
                scrolled ? 'text-brand-dark hover:text-brand-leaf' : 'text-white/90 hover:text-brand-lime'
              }`}
            >
              Fichas de Seguridad
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('contacto')}
              className={`px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${
                scrolled
                  ? 'bg-brand-dark text-white hover:bg-brand-forest'
                  : 'bg-brand-lime text-brand-dark hover:bg-white hover:text-brand-dark'
              }`}
            >
              Contactar
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-brand-dark' : 'text-brand-lime'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-brand-forest/95 backdrop-blur-xl flex flex-col justify-center items-center"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <button
              className="absolute top-8 right-8 text-white hover:text-brand-lime transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-white text-2xl font-semibold hover:text-brand-lime transition-colors relative flex items-center justify-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <span className="absolute -left-6 w-2 h-2 rounded-full bg-brand-lime opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
              >
                <Link
                  to="/fichas-seguridad"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-2xl font-semibold hover:text-brand-lime transition-colors relative flex items-center justify-center group"
                >
                  <span className="absolute -left-6 w-2 h-2 rounded-full bg-brand-lime opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Fichas de Seguridad
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

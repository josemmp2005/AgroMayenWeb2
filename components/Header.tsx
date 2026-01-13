
import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass shadow-md border-b border-brand-lime/20' : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg group-hover:rotate-12 transition-transform ">
            <img src="imgs/agro_logo.webp" alt="AgroMayen Logo" width="40" height="40" className="w-10 h-10" />
          </div>
          <span className={`text-2xl font-bold font-comfortaa ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
            Agro<span className="text-brand-lime">Mayen</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-brand-lime transition-all relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-brand-lime after:left-0 after:-bottom-1 after:transition-all hover:after:w-full ${isScrolled ? 'text-slate-700' : 'text-white drop-shadow-md'
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[60] transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex flex-col items-center justify-center w-full h-screen gap-8 bg-white text-center">
          <button
            className="absolute top-6 right-6 p-2 text-brand-dark"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-bold font-comfortaa text-brand-dark hover:text-brand-lime transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

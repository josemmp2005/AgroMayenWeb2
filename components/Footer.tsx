import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
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

  return (
    <footer className="relative bg-gradient-to-b from-brand-forest via-brand-dark to-[#1a1a1a]">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-lime to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div 
              className="flex items-center gap-3 cursor-pointer mb-6"
              onClick={() => handleNavClick('inicio')}
            >
              <img 
                src="/imgs/agro_logo.webp" 
                alt="AgroMayen Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="font-comfortaa font-bold text-2xl text-white">AgroMayen</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Especialistas en soluciones fitosanitarias para la agricultura moderna. Protegemos tus cultivos con los mejores productos del mercado.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Navegación</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => handleNavClick('inicio')} className="text-white/60 hover:text-brand-lime transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('servicios')} className="text-white/60 hover:text-brand-lime transition-colors">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('nosotros')} className="text-white/60 hover:text-brand-lime transition-colors">
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contacto')} className="text-white/60 hover:text-brand-lime transition-colors">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Legal y Ayuda</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/fichas-seguridad" className="text-white/60 hover:text-brand-lime transition-colors">
                  Fichas de Seguridad
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-white/60 hover:text-brand-lime transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-white/60 hover:text-brand-lime transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/aviso-legal" className="text-white/60 hover:text-brand-lime transition-colors">
                  Aviso Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} AgroMayen. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

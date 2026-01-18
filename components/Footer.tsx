
import React from 'react';
import { Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-brand-dark/40 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="">
                <img src="imgs/agro_logo.webp" alt="AgroMayen Logo" width="40" height="40" className="w-10 h-10" />
              </div>
              <span className="text-2xl font-bold font-comfortaa text-white">
                Agro<span className="text-brand-lime">Mayen</span>
              </span>
            </div>
            <p className="text-lg text-slate-400 max-w-md mb-8">
              Especialistas en soluciones agrícolas avanzadas para el cultivo de cítricos en Palma del Río. Cuidamos cada detalle para garantizar cosechas excepcionales.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-brand-lime rounded-full"></span>
              Enlaces
            </h4>
            <ul className="space-y-4">
              <li><a href="#servicios" className="hover:text-brand-lime transition-colors">Servicios</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-brand-lime transition-colors">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-brand-lime transition-colors">Contacto</a></li>
              <li><a href="#ubicacion" className="hover:text-brand-lime transition-colors">Ubicación</a></li>
              <li><a href="/fichas-tecnicas" className="hover:text-brand-lime transition-colors font-medium text-brand-lime">Fichas Técnicas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-brand-dark rounded-full border border-brand-lime/30"></span>
              Legal
            </h4>
            <ul className="space-y-4">
              <li><a href="/privacidad" className="hover:text-brand-lime transition-colors">Privacidad</a></li>
              <li><a href="/aviso-legal" className="hover:text-brand-lime transition-colors">Aviso Legal</a></li>
              <li><a href="/cookies" className="hover:text-brand-lime transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Agroquímicos Mayen S.L. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Palma del Río, Córdoba</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
            <span>Especialistas en Cítricos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

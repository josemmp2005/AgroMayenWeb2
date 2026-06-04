import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const CtaBanner: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-brand-dark py-16 relative overflow-hidden border-t border-[#3a4a16]">
      {/* Decorative background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-1/3 bg-brand-forest/20" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:w-2/3">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-outfit mb-3 tracking-tight">
              Accede a nuestras fichas de seguridad
            </h2>
            <p className="text-white/80 text-base max-w-lg mx-auto md:mx-0 font-dm">
              Consulta y descarga de forma rápida y sencilla toda la documentación técnica de nuestros productos fitosanitarios.
            </p>
          </div>
          
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Link 
              to="/fichas-seguridad"
              className="bg-brand-lime text-brand-dark px-8 py-4 rounded-xl font-bold text-base hover:bg-white hover:text-brand-dark transition-all duration-300 inline-flex items-center gap-3 shadow-md"
            >
              Ver fichas <FileText size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;

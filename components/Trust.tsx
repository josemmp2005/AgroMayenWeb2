import React from 'react';
import { motion, useInView } from 'framer-motion';
import { BadgeCheck, Sprout, FileText } from 'lucide-react';

const Trust: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <BadgeCheck size={32} />,
      title: 'Empresa Certificada',
      desc: 'Todos nuestros productos cuentan con registro oficial y cumplen la rigurosa normativa europea vigente.'
    },
    {
      icon: <Sprout size={32} />,
      title: 'Soluciones Sostenibles',
      desc: 'Apostamos por productos respetuosos con el medio ambiente, polinizadores y fauna auxiliar.'
    },
    {
      icon: <FileText size={32} />,
      title: 'Documentación Clara',
      desc: 'Fichas de seguridad y técnicas siempre disponibles, actualizadas y accesibles para nuestros clientes.'
    }
  ];

  return (
    <section className="bg-[#3a4a16] py-24 relative overflow-hidden border-b border-[#2b370f]">
      {/* Decorative subtle background elements */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center" ref={ref}>
        <motion.p 
          className="text-brand-lime uppercase tracking-widest text-xs font-bold mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          Valores y Garantías
        </motion.p>
        
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold text-white mb-16 font-outfit tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Por Qué Confiar en Nosotros
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-[#4b5d1c]/40 border border-white/10 rounded-3xl p-8 lg:p-10 text-center hover:bg-[#4b5d1c]/60 transition-all duration-300 hover:border-brand-lime/20 group"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
            >
              <div className="w-16 h-16 mx-auto mb-6 text-brand-lime bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-md">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-outfit tracking-tight">
                {card.title}
              </h3>
              <p className="text-white/80 leading-relaxed text-sm font-dm">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;

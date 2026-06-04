import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, ArrowRight, Leaf, Shield, Award, Truck } from 'lucide-react';

const About: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: <Leaf size={20} />, title: 'Sostenibilidad certificada' },
    { icon: <Shield size={20} />, title: 'Asesoramiento acreditado' },
    { icon: <Award size={20} />, title: 'Trazabilidad y Calidad' },
    { icon: <Truck size={20} />, title: 'Distribución ágil' }
  ];

  return (
    <section id="nosotros" className="bg-[#f8f7f2] py-24 overflow-hidden border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center" ref={ref}>
          
          {/* Left Column: Image Area */}
          <motion.div 
            className="lg:w-1/2 relative w-full max-w-lg mx-auto lg:max-w-none"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-stone-200/60 relative">
              <img 
                src="/imgs/naranjas.webp" 
                alt="Cultivo de naranjas" 
                className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* Solid quote card */}
            <motion.div 
              className="absolute -bottom-6 -right-6 lg:-right-10 bg-white border border-stone-200 shadow-xl rounded-2xl p-6 max-w-[280px] overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-dark"></div>
              <Quote className="text-brand-leaf w-5 h-5 mb-3" />
              <p className="text-brand-dark font-medium italic text-sm leading-relaxed">
                "Comprometidos con la agricultura integrada y el respeto al entorno rural"
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-brand-leaf uppercase tracking-widest text-xs font-bold mb-3">
              Sobre Nosotros
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6 font-outfit tracking-tight">
              Más de 15 años al servicio del agricultor
            </h2>
            <p className="text-warm-gray leading-relaxed text-base mb-10 font-dm">
              En AgroMayen combinamos experiencia técnica y un catálogo especializado en sanidad vegetal para ofrecer soluciones adaptadas a cada finca. Nuestro equipo de ingenieros técnicos agrícolas trabaja directamente sobre el terreno para garantizar la máxima rentabilidad y salud de sus cultivos.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-white border border-stone-200 text-brand-dark rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    {feature.icon}
                  </div>
                  <span className="font-bold text-brand-dark text-sm tracking-tight">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => {
                const el = document.getElementById('contacto');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-forest transition-colors duration-300 active:scale-[0.98]"
            >
              Contactar con nosotros <ArrowRight size={20} />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

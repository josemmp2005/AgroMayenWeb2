
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-24 bg-gradient-to-br from-stone-50 via-emerald-50/20 to-lime-50/40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-lime/10">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="imgs/naranjas.png" 
                alt="Nuestras tierras"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* Decorative elements using logo colors */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-lime rounded-3xl -z-0 opacity-80 shadow-lg"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-dark rounded-full opacity-20 -z-0"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 left-10 glass p-6 rounded-2xl z-20 shadow-xl border-l-4 border-brand-dark max-w-xs hidden md:block"
            >
              <p className="text-brand-dark font-bold italic">
                "Cuidar la naranja es el compromiso que nos define."
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-brand-dark via-green-600 to-emerald-500 bg-clip-text text-transparent">Quiénes Somos</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Somos una empresa especializada en fitosanitarios, dedicada apasionadamente al cuidado y protección de cultivos, con un enfoque prioritario en la naranja.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Desde nuestros inicios, trabajamos mano a mano con agricultores para ofrecer soluciones efectivas y sostenibles que mejoren la salud de sus naranjos y la calidad de su producción.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Atención personalizada",
                "Calidad certificada",
                "Asesoramiento técnico",
                "Sostenibilidad agrícola"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-3 text-slate-700 font-medium p-3 bg-white rounded-xl shadow-sm border-l-4 border-brand-lime"
                >
                  <CheckCircle2 className="text-brand-dark w-5 h-5 flex-shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-brand-dark to-green-800 text-brand-lime rounded-xl font-bold hover:from-green-800 hover:to-brand-dark transition-all shadow-lg hover:shadow-brand-lime/30"
            >
              Conoce nuestra historia
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

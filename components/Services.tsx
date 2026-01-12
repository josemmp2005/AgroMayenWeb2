
import React from 'react';
import { ClipboardCheck, ShoppingBag, Sprout, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const serviceData = [
  {
    title: "Asesoramiento de Cultivo",
    description: "Orientación personalizada basada en análisis técnicos para optimizar el rendimiento y salud de tus cosechas.",
    icon: <Sprout className="w-10 h-10 text-brand-dark" />,
    img: "imgs/service_1.png"
  },
  {
    title: "Venta de Fitosanitarios",
    description: "Amplia gama de productos de alta calidad para proteger tus cultivos contra plagas, hongos y enfermedades.",
    icon: <ShieldCheck className="w-10 h-10 text-brand-dark" />,
    img: "imgs/service_2.png"
  },
  {
    title: "Planes de Abonado",
    description: "Diseño de programas de fertilización específicos adaptados a las necesidades del suelo y el tipo de cultivo.",
    icon: <ClipboardCheck className="w-10 h-10 text-brand-dark" />,
    img: "imgs/service_3.png"
  },
  {
    title: "Soluciones Integrales",
    description: "Gestión completa del ciclo del cultivo, desde la siembra hasta la recolección con seguimiento continuo.",
    icon: <ShoppingBag className="w-10 h-10 text-brand-dark" />,
    img: "imgs/service_4.png"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-gradient-to-br from-white via-stone-50 to-lime-50/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-dark via-emerald-600 to-brand-lime bg-clip-text text-transparent">Nuestros Servicios</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-dark to-brand-lime mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-slate-600 text-lg">
            Proveemos soluciones técnicas avanzadas para el sector agrícola, con especial enfoque en la citricultura.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {serviceData.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-white to-stone-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-200"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-10 right-6 p-4 bg-white inline-block rounded-2xl shadow-xl z-20 border-b-4 border-brand-lime">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-lime transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

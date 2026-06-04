import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const servicesData = [
  {
    title: 'Asesoramiento Técnico Personalizado',
    description: 'Nuestro equipo de ingenieros agrónomos visita tu explotación para evaluar las necesidades específicas de tus cultivos y recomendarte las mejores estrategias de protección.',
    image: '/imgs/service_1.webp'
  },
  {
    title: 'Venta de Productos Fitosanitarios',
    description: 'Disponemos de un amplio catálogo de productos de las marcas líderes del sector. Insecticidas, fungicidas, herbicidas y nutrientes de máxima eficacia y garantía.',
    image: '/imgs/service_2.webp'
  },
  {
    title: 'Gestión Integrada de Plagas (GIP)',
    description: 'Implementamos programas de control que combinan métodos biológicos, biotecnológicos y químicos para minimizar el impacto ambiental y garantizar la rentabilidad.',
    image: '/imgs/service_3.webp'
  },
  {
    title: 'Nutrición Vegetal Avanzada',
    description: 'Ofrecemos soluciones nutricionales a medida, bioestimulantes y abonos foliares para optimizar el rendimiento y la calidad de tus cosechas.',
    image: '/imgs/service_4.webp'
  }
];

const ServiceCard: React.FC<{ service: typeof servicesData[0], index: number }> = ({ service, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white border border-stone-200/60 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 group`}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.6 }}
    >
      {/* Image Side */}
      <div className="lg:w-1/2 overflow-hidden relative h-72 lg:h-[450px]">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
        {/* Number Badge on Image for Mobile */}
        <div className="lg:hidden absolute top-4 left-4 w-9 h-9 rounded-full bg-white text-brand-dark font-bold flex items-center justify-center text-sm shadow-md border border-stone-200">
          0{index + 1}
        </div>
      </div>

      {/* Text Side */}
      <div className="lg:w-1/2 flex flex-col justify-center p-8 lg:p-16 relative">
        {/* Number Badge for Desktop */}
        <div className="hidden lg:flex w-10 h-10 rounded-full border border-stone-200 bg-stone-50 text-brand-dark/70 font-bold items-center justify-center text-sm mb-6 shadow-sm">
          0{index + 1}
        </div>
        
        <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4 font-outfit tracking-tight">
          {service.title}
        </h3>
        
        <p className="text-warm-gray leading-relaxed text-base mb-8 font-dm">
          {service.description}
        </p>
        
        <button 
          onClick={() => {
            const el = document.getElementById('contacto');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-brand-dark hover:text-brand-leaf font-bold text-base transition-colors self-start"
        >
          Solicitar información <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="servicios" className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-brand-leaf uppercase tracking-widest text-xs font-bold mb-3">
            Áreas de Especialización
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Servicios Agrícolas Profesionales
          </h2>
          <p className="text-warm-gray mt-4 max-w-2xl mx-auto text-lg leading-relaxed font-dm">
            Aportamos valor al agricultor mediante un servicio integral que abarca desde el diagnóstico en campo hasta el suministro de las mejores soluciones fitosanitarias.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;

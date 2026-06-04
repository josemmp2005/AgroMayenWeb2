import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatProps> = ({ value, suffix, label, delay }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center px-4 md:border-r last:border-r-0 border-stone-200"
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-5xl lg:text-6xl font-bold text-brand-dark font-outfit mb-3 tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-warm-gray text-xs font-bold uppercase tracking-widest max-w-[200px] mx-auto leading-relaxed">
        {label}
      </div>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { value: 15, suffix: '+', label: 'Años de experiencia' },
    { value: 500, suffix: '+', label: 'Clientes en la región' },
    { value: 1200, suffix: '+', label: 'Tratamientos realizados' },
    { value: 100, suffix: '%', label: 'Eficacia y Compromiso' }
  ];

  return (
    <section className="bg-cream py-16 border-b border-stone-200/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

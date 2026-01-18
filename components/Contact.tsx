
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
}

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-white via-lime-50/20 to-emerald-50/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-brand-lime to-lime-400 bg-clip-text text-transparent">Contacta con Nosotros</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-brand-lime mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-slate-600 text-lg">
            ¿Tienes alguna duda sobre tus cultivos? Estamos aquí para ayudarte a crecer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {[
            {
              href: "tel:+34673263990",
              icon: <Phone className="w-8 h-8 text-brand-dark group-hover:text-white" />,
              title: "Llámanos",
              val: "+34 673 26 39 90",
              color: "bg-gradient-to-br from-white to-stone-50 hover:from-brand-dark hover:via-green-800 hover:to-brand-dark hover:scale-105 border-stone-200 hover:border-brand-lime",
              iconBg: "bg-stone-100 group-hover:bg-emerald-600 shadow-md"
            },
            {
              href: "mailto:info.agromayen@gmail.com",
              icon: <Mail className="w-8 h-8 text-brand-lime group-hover:text-white" />,
              title: "Escríbenos",
              val: "info.agromayen@gmail.com",
              color: "bg-gradient-to-br from-white to-lime-50 hover:from-brand-lime hover:via-lime-400 hover:to-green-400 hover:scale-105 border-stone-200 hover:border-brand-lime",
              iconBg: "bg-lime-50 group-hover:bg-green-700 shadow-md"
            },
            {
              href: "#ubicacion",
              icon: <MapPin className="w-8 h-8 text-brand-dark group-hover:text-white" />,
              title: "Visítanos",
              val: "Pol. Garrotal, Palma del Río",
              color: "bg-gradient-to-br from-white to-emerald-50 hover:from-emerald-700 hover:via-brand-dark hover:to-stone-800 hover:scale-105 border-stone-200 hover:border-emerald-500",
              iconBg: "bg-stone-100 group-hover:bg-brand-dark shadow-md"
            }
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className={`group flex flex-col items-center p-10 rounded-3xl transition-all duration-700 ease-in-out transform border-2 shadow-lg hover:shadow-2xl ${item.color}`}
            >
              <div className={`p-5 rounded-2xl mb-6 transition-all duration-500 ${item.iconBg}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-white transition-colors duration-500">{item.title}</h3>
              <p className="text-slate-600 text-center group-hover:text-white/90 transition-colors duration-500">{item.val}</p>
            </motion.a>
          ))}
        </div>

        <div id="ubicacion" className="w-full h-[500px] rounded-3xl overflow-hidden shadow-xl border border-stone-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.677629921276!2d-5.258046524119801!3d37.703769272003285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd12dac5751a838d%3A0x4873456984d44da9!2sAgroquimicos%20Mayen!5e0!3m2!1ses!2ses!4v1743659978730!5m2!1ses!2ses"
            className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Agroquímicos Mayen en Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;

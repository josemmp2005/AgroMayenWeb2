import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="bg-white py-24 border-b border-stone-200/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-leaf uppercase tracking-widest text-xs font-bold mb-3">
            Atención Directa
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
            Contacta con nuestro equipo
          </h2>
          <p className="text-warm-gray mt-4 max-w-xl mx-auto text-lg font-dm">
            Estamos a tu disposición para asesorarte sobre cualquier tratamiento o producto fitosanitario.
          </p>
        </div>

        <div className="flex flex-col gap-12" ref={ref}>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-4 p-6 bg-white border border-stone-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-stone-100 text-brand-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300 border border-stone-200/40">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="font-bold text-brand-dark text-sm tracking-tight mb-1">Teléfono</span>
                  <span className="text-warm-gray text-sm font-dm font-medium">+34 673 26 39 90</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white border border-stone-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-stone-100 text-brand-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300 border border-stone-200/40">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="font-bold text-brand-dark text-sm tracking-tight mb-1">Email de contacto</span>
                  <span className="text-warm-gray text-sm font-dm font-medium">info.agromayen@gmail.com</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white border border-stone-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-stone-100 text-brand-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300 border border-stone-200/40">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="font-bold text-brand-dark text-sm tracking-tight mb-1">Dirección</span>
                  <span className="text-warm-gray text-sm font-dm font-medium leading-relaxed">
                    Pol. Garrotal C/ F-Mandarina N° 3-A, 14700 Palma del Río, Córdoba
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.5604100414988!2d-0.5694723145889753!3d39.533221975765034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6045330e2f9d51%3A0xe54e565ed67bb015!2sAgromayen!5e0!3m2!1ses!2ses!4v1738150493630!5m2!1ses!2ses"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Ubicación AgroMayen"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

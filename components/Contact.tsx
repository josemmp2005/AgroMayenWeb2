import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

        <div className="flex flex-col lg:flex-row gap-12" ref={ref}>
          {/* Left: Contact Form */}
          <motion.div 
            className="lg:w-7/12"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-[#f8f7f2] border border-stone-200/60 p-8 lg:p-10 rounded-3xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <label className="absolute -top-2.5 left-4 bg-[#f8f7f2] px-2 text-xs text-warm-gray font-bold">Nombre</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl border border-stone-200 bg-white focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all text-brand-dark font-medium"
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute -top-2.5 left-4 bg-[#f8f7f2] px-2 text-xs text-warm-gray font-bold">Teléfono</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl border border-stone-200 bg-white focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all text-brand-dark font-medium"
                    />
                  </div>
                </div>
                
                <div className="relative mb-6">
                  <label className="absolute -top-2.5 left-4 bg-[#f8f7f2] px-2 text-xs text-warm-gray font-bold">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl border border-stone-200 bg-white focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all text-brand-dark font-medium"
                  />
                </div>

                <div className="relative mb-8">
                  <label className="absolute -top-2.5 left-4 bg-[#f8f7f2] px-2 text-xs text-warm-gray font-bold">Mensaje</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl border border-stone-200 bg-white focus:border-brand-dark focus:ring-1 focus:ring-brand-dark outline-none transition-all text-brand-dark font-medium resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-dark text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-forest transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  Enviar mensaje <Send size={18} />
                </button>
              </form>
            ) : (
              <motion.div 
                className="bg-[#f8f7f2] border border-stone-200/60 h-full p-8 lg:p-10 rounded-3xl flex flex-col items-center justify-center text-center min-h-[400px] shadow-sm"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 size={56} className="text-brand-leaf mb-6" />
                <h3 className="text-2xl font-bold text-brand-dark mb-2 font-outfit tracking-tight">¡Mensaje enviado!</h3>
                <p className="text-warm-gray font-dm">
                  Gracias por contactar con nosotros. Un asesor técnico se pondrá en contacto a la mayor brevedad.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-leaf font-bold hover:text-brand-dark transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div 
            className="lg:w-5/12 flex flex-col gap-4 justify-center"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-start gap-4 p-6 bg-white border border-stone-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-stone-100 text-brand-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300 border border-stone-200/40">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col pt-0.5">
                <span className="font-bold text-brand-dark text-sm tracking-tight mb-1">Teléfono</span>
                <span className="text-warm-gray text-sm font-dm font-medium">+34 962 550 565</span>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white border border-stone-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-stone-100 text-brand-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300 border border-stone-200/40">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col pt-0.5">
                <span className="font-bold text-brand-dark text-sm tracking-tight mb-1">Email de contacto</span>
                <span className="text-warm-gray text-sm font-dm font-medium">agromayen@gmail.com</span>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white border border-stone-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-stone-100 text-brand-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300 border border-stone-200/40">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col pt-0.5">
                <span className="font-bold text-brand-dark text-sm tracking-tight mb-1">Dirección</span>
                <span className="text-warm-gray text-sm font-dm font-medium leading-relaxed">
                  Calle de L'Alcúdia, 29, 46190,<br/>Riba-roja de Túria, Valencia
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Embed */}
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

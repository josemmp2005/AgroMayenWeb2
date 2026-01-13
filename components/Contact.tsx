
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
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'El formato del email no es válido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ nombre: '', email: '', mensaje: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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

        <div id="ubicacion" className="flex flex-col lg:flex-row gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 rounded-3xl overflow-hidden shadow-xl border border-stone-200 min-h-[450px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.677629921276!2d-5.258046524119801!3d37.703769272003285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd12dac5751a838d%3A0x4873456984d44da9!2sAgroquimicos%20Mayen!5e0!3m2!1ses!2ses!4v1743659978730!5m2!1ses!2ses"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Agroquímicos Mayen en Google Maps"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 bg-stone-100 p-8 rounded-3xl border border-stone-200 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Envíanos un mensaje</h3>
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-white border border-brand-lime p-6 rounded-2xl flex flex-col items-center text-center shadow-xl"
                  >
                    <CheckCircle className="text-brand-dark w-12 h-12 mb-4" />
                    <h4 className="text-brand-dark font-bold text-lg mb-2">¡Mensaje Enviado!</h4>
                    <p className="text-slate-600 text-sm">Gracias por contactar con AgroMayen. Te responderemos lo antes posible.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1">Nombre</label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.nombre ? 'border-red-500 focus:ring-red-200' : 'border-stone-300 focus:ring-brand-lime'} focus:ring-2 focus:outline-none transition-all bg-white`}
                        placeholder="Tu nombre"
                      />
                      {errors.nombre && <p className="text-red-500 text-xs mt-1 font-medium">{errors.nombre}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-stone-300 focus:ring-brand-lime'} focus:ring-2 focus:outline-none transition-all bg-white`}
                        placeholder="correo@ejemplo.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1">Mensaje</label>
                      <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-brand-lime focus:outline-none transition-all resize-none bg-white"
                        placeholder="¿En qué podemos ayudarte?"
                      ></textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 ${isSubmitting ? 'bg-slate-600 cursor-not-allowed' : 'bg-brand-dark hover:shadow-brand-lime/30'} text-brand-lime rounded-xl font-bold flex items-center justify-center gap-2 transition-all group shadow-lg`}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-brand-lime/30 border-t-brand-lime rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Enviar Mensaje
                          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

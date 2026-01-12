import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, ArrowLeft } from 'lucide-react';

const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-lime-50/10 to-emerald-50/20">
      <div className="container mx-auto px-6 py-24">
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 text-brand-dark hover:text-brand-lime transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Volver al inicio
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-brand-dark rounded-2xl">
              <Cookie className="w-8 h-8 text-brand-lime" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-dark to-emerald-600 bg-clip-text text-transparent">
              Política de Cookies
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8 border border-stone-200">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">¿Qué son las cookies?</h2>
              <p className="text-slate-600 leading-relaxed">
                Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo (ordenador, tablet, smartphone) cuando los visita. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y para proporcionar información a los propietarios del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Tipos de cookies que utilizamos</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-stone-50 to-white p-6 rounded-2xl border border-stone-200">
                  <h3 className="text-lg font-bold text-brand-dark mb-3">1. Cookies técnicas (necesarias)</h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    Estas cookies son esenciales para que el sitio web funcione correctamente. Permiten la navegación básica y el acceso a áreas seguras del sitio web.
                  </p>
                  <p className="text-sm text-slate-500">
                    <strong>Duración:</strong> Sesión | <strong>Tipo:</strong> Propia
                  </p>
                </div>

                <div className="bg-gradient-to-br from-stone-50 to-white p-6 rounded-2xl border border-stone-200">
                  <h3 className="text-lg font-bold text-brand-dark mb-3">2. Cookies de preferencias</h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    Permiten que el sitio web recuerde información que cambia la forma en que se comporta o se ve, como su idioma preferido o la región en la que se encuentra.
                  </p>
                  <p className="text-sm text-slate-500">
                    <strong>Duración:</strong> Persistente | <strong>Tipo:</strong> Propia
                  </p>
                </div>

                <div className="bg-gradient-to-br from-stone-50 to-white p-6 rounded-2xl border border-stone-200">
                  <h3 className="text-lg font-bold text-brand-dark mb-3">3. Cookies analíticas</h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    Nos ayudan a entender cómo los visitantes interactúan con el sitio web, recopilando información de forma anónima. Estos datos nos permiten mejorar el rendimiento del sitio.
                  </p>
                  <p className="text-sm text-slate-500">
                    <strong>Duración:</strong> Hasta 2 años | <strong>Tipo:</strong> Terceros (Google Analytics)
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Cookies de terceros</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                En algunos casos, utilizamos cookies proporcionadas por terceros de confianza. Este sitio utiliza Google Maps para mostrar nuestra ubicación, que puede establecer sus propias cookies.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-slate-700 text-sm">
                  <strong>Nota:</strong> Las cookies de terceros están fuera de nuestro control. Para más información sobre estas cookies, consulte las políticas de privacidad de estos servicios externos.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Cómo gestionar las cookies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su dispositivo y puede configurar la mayoría de los navegadores para evitar que se coloquen.
              </p>
              
              <div className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-xl p-6 border border-emerald-200">
                <h3 className="font-bold text-brand-dark mb-3">Configuración por navegador:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                  <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                  <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                  <li><strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
                </ul>
              </div>

              <p className="text-slate-600 leading-relaxed mt-4">
                Tenga en cuenta que si bloquea todas las cookies, algunas funciones del sitio web pueden no estar disponibles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Actualización de esta política</h2>
              <p className="text-slate-600 leading-relaxed">
                Podemos actualizar nuestra Política de Cookies ocasionalmente. Le notificaremos cualquier cambio publicando la nueva política en esta página y actualizando la fecha de "última actualización".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Más información</h2>
              <p className="text-slate-600 leading-relaxed">
                Si tiene preguntas sobre nuestra política de cookies, puede contactarnos en:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-slate-600">
                  <strong>Email:</strong> <a href="mailto:info.agromayen@gmail.com" className="text-brand-lime hover:text-brand-dark">info.agromayen@gmail.com</a>
                </p>
                <p className="text-slate-600">
                  <strong>Teléfono:</strong> <a href="tel:+34673263990" className="text-brand-lime hover:text-brand-dark">+34 673 26 39 90</a>
                </p>
              </div>
            </section>

            <section className="pt-6 border-t border-stone-200">
              <p className="text-sm text-slate-500">
                <strong>Última actualización:</strong> Enero 2026
              </p>
              <p className="text-sm text-slate-500 mt-2">
                <strong>Responsable:</strong> Agroquímicos Mayen S.L. | Pol. Garrotal, Palma del Río, Córdoba
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';

const Privacy: React.FC = () => {
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
              <Shield className="w-8 h-8 text-brand-lime" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-dark to-emerald-600 bg-clip-text text-transparent">
              Política de Privacidad
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8 border border-stone-200">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Información que recopilamos</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                En Agroquímicos Mayen S.L., recopilamos la información personal que usted nos proporciona voluntariamente cuando:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Se pone en contacto con nosotros a través de nuestro formulario de contacto</li>
                <li>Nos envía un correo electrónico o nos llama por teléfono</li>
                <li>Solicita información sobre nuestros productos o servicios</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                Los datos personales que podemos recopilar incluyen: nombre, dirección de correo electrónico, número de teléfono y cualquier otra información que decida proporcionarnos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Uso de la información</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Utilizamos la información recopilada para los siguientes propósitos:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Responder a sus consultas y solicitudes</li>
                <li>Proporcionarle información sobre nuestros productos y servicios</li>
                <li>Mejorar nuestro sitio web y servicios</li>
                <li>Cumplir con nuestras obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Protección de datos</h2>
              <p className="text-slate-600 leading-relaxed">
                Nos comprometemos a proteger su información personal. Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos contra el acceso no autorizado, la alteración, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Compartir información</h2>
              <p className="text-slate-600 leading-relaxed">
                No vendemos, alquilamos ni compartimos su información personal con terceros para fines de marketing. Solo compartimos información cuando es necesario para proporcionar nuestros servicios o cuando lo exige la ley.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Sus derechos</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                De acuerdo con el RGPD, usted tiene los siguientes derechos:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Derecho de acceso a sus datos personales</li>
                <li>Derecho de rectificación de datos inexactos</li>
                <li>Derecho de supresión de sus datos</li>
                <li>Derecho de limitación del tratamiento</li>
                <li>Derecho de portabilidad de datos</li>
                <li>Derecho de oposición al tratamiento</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                Para ejercer cualquiera de estos derechos, puede contactarnos en: <a href="mailto:info.agromayen@gmail.com" className="text-brand-lime hover:text-brand-dark font-semibold">info.agromayen@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Cambios en esta política</h2>
              <p className="text-slate-600 leading-relaxed">
                Nos reservamos el derecho de actualizar esta Política de Privacidad periódicamente. Cualquier cambio será publicado en esta página con una fecha de actualización revisada.
              </p>
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

export default Privacy;

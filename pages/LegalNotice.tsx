import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ArrowLeft } from 'lucide-react';

const LegalNotice: React.FC = () => {
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
              <Scale className="w-8 h-8 text-brand-lime" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-dark to-emerald-600 bg-clip-text text-transparent">
              Aviso Legal
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8 border border-stone-200">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Datos identificativos</h2>
              <div className="text-slate-600 leading-relaxed space-y-2">
                <p><strong>Denominación social:</strong> Agroquímicos Mayen S.L.</p>
                <p><strong>Dirección:</strong> Polígono Garrotal, Palma del Río, Córdoba, España</p>
                <p><strong>Email:</strong> <a href="mailto:info.agromayen@gmail.com" className="text-brand-lime hover:text-brand-dark">info.agromayen@gmail.com</a></p>
                <p><strong>Teléfono:</strong> <a href="tel:+34673263990" className="text-brand-lime hover:text-brand-dark">+34 673 26 39 90</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Objeto</h2>
              <p className="text-slate-600 leading-relaxed">
                El presente aviso legal regula el uso del sitio web de Agroquímicos Mayen S.L. (en adelante, el sitio web). La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Contenidos</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                El sitio web proporciona información sobre los productos y servicios de Agroquímicos Mayen S.L., especializados en soluciones fitosanitarias y el cuidado del cultivo de cítricos.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Agroquímicos Mayen S.L. se reserva el derecho a modificar, suspender o interrumpir, en cualquier momento y sin necesidad de previo aviso, la accesibilidad y configuración del sitio web, así como los servicios y/o contenidos incluidos en el mismo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Propiedad intelectual e industrial</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Todos los contenidos del sitio web, incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Agroquímicos Mayen S.L., sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del sitio web.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos del sitio web, salvo autorización expresa y por escrito de Agroquímicos Mayen S.L.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Responsabilidad</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Agroquímicos Mayen S.L. no se hace responsable de:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>La calidad del servicio, la velocidad de acceso, el correcto funcionamiento ni la disponibilidad ni continuidad del sitio web</li>
                <li>Los contenidos, informaciones, comunicaciones y opiniones vertidas por terceros</li>
                <li>Los daños derivados de fallos o desconexiones en las redes de telecomunicaciones</li>
                <li>La presencia de virus u otros elementos que puedan producir alteraciones en el sistema informático</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Enlaces</h2>
              <p className="text-slate-600 leading-relaxed">
                El sitio web puede contener enlaces a otros sitios web. Agroquímicos Mayen S.L. no asume ninguna responsabilidad por el contenido, información o servicios que pudieran aparecer en dichos sitios, que tendrán exclusivamente carácter informativo y que en ningún caso implican relación alguna entre Agroquímicos Mayen S.L. y las personas o entidades titulares de tales sitios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Protección de datos</h2>
              <p className="text-slate-600 leading-relaxed">
                Para más información sobre el tratamiento de datos personales, consulte nuestra <a href="/privacy" className="text-brand-lime hover:text-brand-dark font-semibold">Política de Privacidad</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">8. Legislación aplicable y jurisdicción</h2>
              <p className="text-slate-600 leading-relaxed">
                El presente Aviso Legal se rige en todos y cada uno de sus extremos por la ley española. Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso del sitio web, las partes se someten expresamente a la jurisdicción y competencia de los Juzgados y Tribunales de Córdoba, España.
              </p>
            </section>

            <section className="pt-6 border-t border-stone-200">
              <p className="text-sm text-slate-500">
                <strong>Última actualización:</strong> Enero 2026
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalNotice;

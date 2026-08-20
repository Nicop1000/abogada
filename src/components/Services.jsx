import { ImHammer2 } from "react-icons/im";
import { BsFillClipboard2CheckFill, BsSearch } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import { motion } from "framer-motion";

const features = [
  {
    name: "Servicios jurídicos",
    description:
      "Asesoramiento y acompañamiento integral en distintas ramas del derecho: laboral, ART, accidentes de tránsito, divorcios, sucesiones, Derecho Penal, jubilaciones y familia.",
    icon: ImHammer2,
  },
  {
    name: "Asesoría y acompañamiento",
    description:
      "Asistencia y asesoramiento jurídico ante las distintas Comisiones Médicas de la Superintendencia de Riesgos del Trabajo, frente a accidentes laborales, accidentes in itinere y enfermedades profesionales.",
    icon: FaHandsHelping,
  },
  {
    name: "Mediaciones prejudiciales",
    description:
      "Asistencia, acompañamiento y asesoramiento jurídico durante las mediaciones prejudiciales, buscando alternativas de solución y acuerdos que protejan los derechos e intereses de nuestros clientes.",
    icon: FaScaleBalanced,
  },
  {
    name: "Peritos",
    description:
      "Trabajo conjunto con médicos, psicólogos y escribanos de confianza, aportando experiencia y conocimientos profesionales para abordar cada caso de manera integral.",
    icon: BsSearch,
  },
  {
    name: "Gestoría",
    description:
      "Búsqueda, tramitación y gestión de documentación ante organismos y entidades públicas o privadas, incluyendo partidas, certificados, actas y otros documentos.",
    icon: BsFillClipboard2CheckFill,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-pink-950 via-pink-900 to-[#3a1028] py-20 sm:py-24"
    >
      {/* Luces decorativas de fondo */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium uppercase tracking-[0.25em] text-pink-200 backdrop-blur-sm">
            Atención profesional
          </span>

          <h2 className="font-mont text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nuestros{" "}
            <span className="text-pink-300">Servicios</span>
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-pink-300/70" />

          <p className="mt-6 text-base leading-7 text-pink-100/70 sm:text-lg">
            Asesoramiento jurídico personalizado, acompañamiento profesional
            y soluciones pensadas para cada situación.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Tarjeta */}
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] p-7 shadow-xl shadow-black/10 backdrop-blur-md transition-all duration-500 group-hover:border-pink-300/30 group-hover:bg-white/[0.11] group-hover:shadow-2xl group-hover:shadow-pink-950/40 sm:p-8">

                  {/* Brillo interno */}
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-pink-300/10 blur-3xl transition-all duration-700 group-hover:bg-pink-300/20" />

                  <div className="relative flex gap-6">

                    {/* Icono */}
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: -5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-pink-200/20 bg-pink-200/10 text-pink-200 shadow-lg shadow-black/10"
                    >
                      <Icon className="h-8 w-8" aria-hidden="true" />
                    </motion.div>

                    {/* Contenido */}
                    <div>
                      <h3 className="font-mont text-xl font-semibold text-white sm:text-2xl">
                        {feature.name}
                      </h3>

                      {/* Línea decorativa */}
                      <div className="mt-3 h-[2px] w-8 origin-left bg-pink-300/70 transition-all duration-500 group-hover:w-16" />

                      <p className="mt-4 text-sm leading-7 text-pink-100/65 sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Flecha decorativa */}
                  <div className="absolute bottom-5 right-6 translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    <span className="text-xl text-pink-300">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Texto inferior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-14 max-w-2xl text-center"
        >
          <p className="text-sm leading-6 text-pink-100/50">
            Cada situación requiere un análisis particular. Brindamos una
            atención cercana y personalizada para acompañarte durante todo
            el proceso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
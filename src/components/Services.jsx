import { ImHammer2 } from "react-icons/im";
import { BsFillClipboard2CheckFill, BsSearch } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    name: 'Servicios jurídicos',
    description:
      'asesoramiento y acompañamiento en las distintas ramas del derecho: laboral, art, accidentes de tránsito, divorcios, sucesiones, penal, jubilaciones y familia.',
    icon: ImHammer2,
  },
  {
    name: 'Asesoría',
    description:
      'Servicios de acompañamiento y asesoría  juridica en las distintas comisiones médicas de la súper intendencia de riesgo de trabajo frente a enfermedades profesionales, accidentes laborales e initinere que sufra el trabajador.',
    icon: FaHandsHelping,
  },
  {
    name: 'Peritos',
    description:
      'Médicos, psicológicos y escribanos, que conjuntamente con trabajo en equipo aportan lo más beneficioso para la resolución de los casos.',
    icon: BsSearch,
  },
  {
    name: 'Gestoría',
    description:
      'Búsqueda de distintos documentos, partidas de nacimiento, defunción y matrimonio etc.',
    icon: BsFillClipboard2CheckFill,
  },
]

export default function Services() {
  return (
    <div id="services" className=" bg-pink-900 sm:py-8">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ onde: true, amount: 0 }}
          transition={{ delay: 0, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-2 text-5xl font-bold text-center pt-6 tracking-tight text-gray-50 lg:text-7xl">
            SERVICIOS
          </motion.h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-60 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <motion.div
              initial="hidden"
                whileInView="visible"
                viewport={{ onde: true, amount: 0 }}
                transition={{ delay: .5, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              key={feature.name} 
              className=" transition-transform duration-500 hover:scale-125 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-slate-300 shadow-gray-600 p-2 relative pl-16">
                <motion.dt
                initial="hidden"
                whileInView="visible"
                viewport={{ onde: true, amount: 0 }}
                transition={{ delay: .5, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="font-semibold font-mont text-4xl leading-7 text-gray-200">
                  <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ onde: true, amount: 0 }}
                  transition={{ delay: 2, duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, z: 50 },
                    visible: { opacity: 1, z: 0 },
                  }}
                  className="absolute left-0 top-0 flex h-10 w-10 mt-12 items-center justify-center rounded-lg">
                    <feature.icon className="h-14 w-14 ml-2 text-white" aria-hidden="true" />
                  </motion.div>
                  {feature.name}
                </motion.dt>
                <motion.dd
                initial="hidden"
                whileInView="visible"
                viewport={{ onde: true, amount: 0 }}
                transition={{ delay: 1, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-4 text-base leading-7 px-4 text-gray-400">{feature.description}
                </motion.dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

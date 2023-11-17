import React from 'react'
import { motion } from 'framer-motion';

export default function Descriptions() {
  return (
    <div id='descrip'>
      <div className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto lg:mx-12 lg:grid lg:max-w-full lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial card*/}
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-96 shadow-xl">
                <img
                  className="absolute inset-0 h-full w-full object-cover "
                  src="./gise2.jpg"
                  alt=""
                />
                {/* <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
                <div className="relative px-8">
                  
                 
                </div> */}
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ onde: true, amount: 0 }}
              transition={{ delay: 0, duration: 1 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl font-bold font-mont tracking-tight text-gray-900 sm:text-4xl">
                ABOGADA
              </motion.h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <motion.p
                initial="hidden"
                  whileInView="visible"
                  viewport={{ onde: true, amount: 0 }}
                  transition={{ delay: .5, duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                    className="text-lg font-mont">
                  Me llamo Gisela Karina Brusaferri, vivo de la ciudad de Lomas de Zamora, soy egresada de la universidad de buenos aires, UBA en el año 2017.
                  Comencé mis inicios trabajando en diversos estudios jurídicos, desempeñándome en  las distintas ramas del derecho.
                  Actualmente, me desempeño como abogada independiente, ejerciendo mi profesión en las distintas jurisdicciones del país, Ciudad de Buenos Aires - Capital federal, provincia de Buenos Aires y la justicia Federal.

                </motion.p >
                <motion.p
                initial="hidden"
                  whileInView="visible"
                  viewport={{ onde: true, amount: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                    className="text-base font-mont leading-7">
                  Apasionada del derecho, cuento con un equipo de abogados externos, los cuales desempeñan sus labores con total eficacia.
                  Desempeño mis labores, en el ámbito de derecho laboral, derecho de familia, derecho civil, con gran trayectoria y experiencia en accidentes laborales y accidentes de tránsito, sucesiones y divorcios.
                  Respecto del derecho penal cuento con colegas asociados de gran desempeño en ésta rama particular.
                  Además, dispongo de un gran equipo interdisciplinario para poder evaluar, contener y ayudar a resolver tus problemas de manera integral con el apoyo de profesionales psicólogos, psicopedagogos, escribanos y peritos médicos los cuales se ajustan las pretensiones del caso en concreto.
                </motion.p>
                <motion.p
               initial="hidden"
               whileInView="visible"
               viewport={{ onde: true, amount: 0 }}
               transition={{ delay: 1.5, duration: 1 }}
               variants={{
                 hidden: { opacity: 0, y: 50 },
                 visible: { opacity: 1, y: 0 },
               }}
                    className="text-base font-mont leading-7">
                  Me caracterizo por ser una profesional empática y con una gran capacidad de escucha, la cual me permite colocarme en el lugar de los clientes para poder comprender la situación vivida y en base a su asoría legal tratar de obtener la mejor estrategia para el caso en concreto. Soy tu abogada de confianza!
                </motion.p>
              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  )
}

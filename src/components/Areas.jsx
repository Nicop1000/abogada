import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Accidentes laborales',
    description:
      'Determinamos tu incapacidad y te acompañamos en el reclamo para que puedas obtener la indemnización que te corresponde.',
    imageUrl: './accidenteDeTrabajo.jpeg',
  },
  {
    title: 'Sucesiones',
    description:
      'Te acompañamos durante todo el proceso sucesorio, explicándote cada etapa de manera clara y personalizada.',
    imageUrl: './suce.jpg',
  },
  {
    title: 'Derecho laboral',
    description:
      'Asesoramos a trabajadores en reclamos por despidos, indemnizaciones y demás derechos laborales.',
    imageUrl: './agotamiento.jpg',
  },
  {
    title: 'Accidentes de tránsito',
    description:
      'Gestionamos los reclamos correspondientes ante compañías de seguros y terceros para defender tus derechos.',
    imageUrl: './accidentes.jpg',
  },
  {
    title: 'Daños y perjuicios',
    description:
      'Analizamos cada situación y reclamamos la compensación que corresponda por los daños sufridos.',
    imageUrl: './marti.jpg',
  },
  {
    title: 'Jubilaciones',
    description:
      'Asesoramiento y gestión de jubilaciones, pensiones y trámites previsionales para acompañarte en cada etapa.',
    imageUrl: './jub.jpg',
  },
  {
    title: 'Mediaciones prejudiciales',
    description:
      'Asistencia, acompañamiento y asesoramiento jurídico en mediaciones prejudiciales, buscando acuerdos que protejan tus derechos e intereses.',
    imageUrl: './mediaciones.webp',
  },
];

export default function Areas() {
  return (
    <section
      id="areas"
      className="relative overflow-hidden bg-gray-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >

      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-pink-100/60 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-block rounded-full border border-pink-200 bg-pink-50 px-5 py-2 font-mont text-sm font-medium uppercase tracking-[0.2em] text-pink-800">
            Especialidades
          </span>

          <h2 className="mt-5 font-mont text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl lg:text-6xl">
            Áreas de <span className="text-pink-800">práctica</span>
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-16 bg-pink-800" />

          <p className="mx-auto mt-6 max-w-2xl font-mont text-base leading-7 text-gray-500 sm:text-lg">
            Estoy para asesorarte y acompañarte con atención personalizada
            en las distintas áreas del derecho.
          </p>
        </motion.div>


        {/* Tarjetas */}
        <div className="mx-auto mt-16 grid max-w-lg gap-7 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">

          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-2xl"
            >

              {/* Imagen */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Título sobre imagen */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-mont text-2xl font-semibold text-white drop-shadow-lg">
                    {post.title}
                  </h3>

                  <div className="mt-2 h-[2px] w-8 bg-pink-300 transition-all duration-500 group-hover:w-14" />
                </div>

              </div>


              {/* Contenido */}
              <div className="flex flex-1 flex-col bg-white p-6">

                <p className="font-mont text-sm leading-7 text-gray-500 sm:text-base">
                  {post.description}
                </p>

                {/* Decoración inferior */}
                <div className="mt-auto pt-6">

                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">

                    <span className="font-mont text-xs uppercase tracking-wider text-pink-800">
                      Asesoramiento jurídico
                    </span>

                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="text-lg text-pink-800"
                    >
                      →
                    </motion.span>

                  </div>

                </div>

              </div>

            </motion.article>
          ))}

        </div>


        {/* Texto final */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="font-mont text-sm leading-7 text-gray-500 sm:text-base">
            Cada caso es único. Por eso ofrecemos un análisis personalizado
            y un acompañamiento cercano durante todo el proceso.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
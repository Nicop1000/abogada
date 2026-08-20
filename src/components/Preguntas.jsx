import { motion } from "framer-motion";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";

const posts = [
  {
    number: "01",
    title: "Accidente laboral",
    description:
      "Si sufriste un accidente laboral, es importante conocer tus derechos y los plazos para iniciar el reclamo correspondiente.",
  },
  {
    number: "02",
    title: "Divorcio",
    description:
      "No es necesario que tu pareja esté de acuerdo para iniciar el divorcio, ni tampoco expresar los motivos por los cuales decidís hacerlo.",
  },
  {
    number: "03",
    title: "Derecho laboral",
    description:
      "Si trabajás en negro o de manera informal, podés intimar a tu empleador mediante un telegrama laboral para solicitar la registración correspondiente.",
  },
  {
    number: "04",
    title: "Accidente de tránsito",
    description:
      "Si sufriste daños materiales en tu vehículo o lesiones físicas, es importante contar con asesoramiento profesional para defender tus derechos e intereses.",
  },
  {
    number: "05",
    title: "Mediaciones prejudiciales",
    description:
      "La mediación puede ser una instancia fundamental para intentar alcanzar un acuerdo antes de iniciar un proceso judicial. Te acompañamos y asesoramos durante todo el procedimiento.",
  },
];

export default function Example() {
  return (
    <section
      id="preguntas"
      className="relative overflow-hidden bg-white px-6 py-20 sm:px-8 lg:px-8 lg:py-28"
    >

      {/* Fondos decorativos */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >

          <div className="mb-5 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-50 text-pink-800">
              <FaInfoCircle className="h-6 w-6" />
            </div>
          </div>

          <span className="font-mont text-sm font-medium uppercase tracking-[0.25em] text-pink-800">
            Para tener en cuenta
          </span>

          <h2 className="mt-4 font-mont text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Información{" "}
            <span className="text-pink-800">importante</span>
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-16 bg-pink-800" />

          <p className="mx-auto mt-6 max-w-2xl font-mont text-base leading-7 text-gray-500 sm:text-lg">
            Algunos aspectos legales que es importante conocer antes de tomar
            una decisión.
          </p>
        </motion.div>


        {/* Información */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">

          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl border bg-white p-7 shadow-sm transition-all duration-500 hover:shadow-xl ${
                post.title === "Mediaciones prejudiciales"
                  ? "border-pink-200 bg-gradient-to-br from-pink-50 to-white"
                  : "border-gray-100"
              }`}
            >

              {/* Número */}
              <div className="flex items-center justify-between">

                <span className="font-mont text-4xl font-bold text-pink-100 transition-colors duration-500 group-hover:text-pink-200">
                  {post.number}
                </span>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-pink-800 transition-all duration-500 group-hover:bg-pink-800 group-hover:text-white"
                >
                  <FaArrowRight className="h-3 w-3" />
                </motion.div>

              </div>


              {/* Contenido */}
              <div className="mt-6">

                <h3 className="font-mont text-xl font-semibold text-gray-900 sm:text-2xl">
                  {post.title}
                </h3>

                <div className="mt-3 h-[2px] w-8 bg-pink-800 transition-all duration-500 group-hover:w-14" />

                <p className="mt-5 font-mont text-sm leading-7 text-gray-500 sm:text-base">
                  {post.description}
                </p>

              </div>


              {/* Decoración */}
              <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-pink-50 transition-transform duration-700 group-hover:scale-150" />

            </motion.article>
          ))}

        </div>


        {/* Aviso final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-14 max-w-3xl rounded-2xl border border-pink-100 bg-pink-50/60 px-6 py-6 text-center"
        >
          <p className="font-mont text-sm leading-7 text-gray-600 sm:text-base">
            <span className="font-semibold text-pink-900">
              ¿Tenés dudas sobre tu situación?
            </span>{" "}
            Cada caso es particular. Una consulta profesional puede ayudarte a
            conocer tus derechos y las alternativas disponibles.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
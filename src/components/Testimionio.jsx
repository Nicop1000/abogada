import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonios = [
  {
    description:
      "Excelente atención y acompañamiento durante todo el proceso. Siempre tuve claridad sobre cada paso y pude resolver todas mis dudas.",
    nombre: "Priscila Sanabria",
    area: "Accidente laboral",
    imag: "./testimonio1.jpg",
  },
  {
    description:
      "Desde el primer momento recibí un asesoramiento claro y personalizado. Me sentí acompañado durante todo el proceso.",
    nombre: "Hugo Aquino",
    area: "Derecho laboral",
    imag: "./testimonio2.jpg",
  },
  {
    description:
      "La atención fue muy profesional y cercana. Me explicaron todas las alternativas y pude tomar decisiones con tranquilidad.",
    nombre: "Carolina Rios",
    area: "Accidente de tránsito",
    imag: "./testimonio3.jpg",
  },
];

export default function Testimonio() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonio = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonios.length);
  };

  const prevTestimonio = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonios.length) % testimonios.length
    );
  };

  // Cambio automático
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonio();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const testimonio = testimonios[current];

  return (
    <section
      id="testimonios"
      className="relative overflow-hidden bg-gray-50 px-6 py-20 sm:px-8 lg:px-8 lg:py-28"
    >
      {/* Fondos decorativos */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-pink-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-pink-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="font-mont text-sm font-medium uppercase tracking-[0.25em] text-pink-800">
            Experiencias
          </span>

          <h2 className="mt-4 font-mont text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Lo que dicen{" "}
            <span className="text-pink-800">nuestros clientes</span>
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-16 bg-pink-800" />

          <p className="mx-auto mt-6 max-w-2xl font-mont text-base leading-7 text-gray-500 sm:text-lg">
            La confianza y el acompañamiento de cada persona son parte
            fundamental de nuestro trabajo.
          </p>
        </motion.div>


        {/* Carrusel */}
        <div className="relative mx-auto max-w-6xl">

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-950 via-pink-900 to-[#43152f] shadow-2xl">

            {/* Brillos */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-pink-400/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-pink-400/10 blur-3xl" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 80 : -80,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -80 : 80,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative grid min-h-[480px] lg:grid-cols-5"
              >

                {/* Imagen */}
                <div className="relative h-72 overflow-hidden lg:col-span-2 lg:h-auto">

                  <img
                    src={testimonio.imag}
                    alt=""
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-pink-950/60" />

                  {/* Etiqueta */}
                  <div className="absolute bottom-6 left-6">
                    <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 font-mont text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      Testimonio
                    </span>
                  </div>

                </div>


                {/* Texto */}
                <div className="flex items-center lg:col-span-3">

                  <div className="w-full px-7 py-12 sm:px-10 lg:px-14 lg:py-16">

                    {/* Comillas */}
                    <FaQuoteLeft className="mb-7 h-10 w-10 text-pink-300/40 sm:h-12 sm:w-12" />


                    {/* Testimonio */}
                    <blockquote className="font-mont text-xl font-medium leading-relaxed text-white sm:text-2xl lg:text-3xl">
                      “{testimonio.description}”
                    </blockquote>


                    {/* Separador */}
                    <div className="my-8 h-px w-full bg-white/10" />


                    {/* Estrellas */}
                    <div className="mb-5 flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          className="h-4 w-4 text-pink-300"
                        />
                      ))}
                    </div>


                    {/* Nombre */}
                    <p className="font-mont text-lg font-semibold text-white sm:text-xl">
                      {testimonio.nombre}
                    </p>

                    <div className="mt-2 flex items-center gap-3">

                      <span className="h-px w-8 bg-pink-300" />

                      <p className="font-mont text-sm text-pink-200">
                        {testimonio.area}
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>
            </AnimatePresence>


            {/* Botón anterior */}
            <button
              onClick={prevTestimonio}
              aria-label="Testimonio anterior"
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-pink-900 sm:left-6"
            >
              <FaChevronLeft className="h-4 w-4" />
            </button>


            {/* Botón siguiente */}
            <button
              onClick={nextTestimonio}
              aria-label="Siguiente testimonio"
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-pink-900 sm:right-6"
            >
              <FaChevronRight className="h-4 w-4" />
            </button>

          </div>


          {/* Indicadores */}
          <div className="mt-8 flex justify-center gap-3">

            {testimonios.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                aria-label={`Ir al testimonio ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === current
                    ? "w-8 bg-pink-800"
                    : "w-2 bg-pink-200 hover:bg-pink-400"
                }`}
              />
            ))}

          </div>

        </div>


        {/* Texto inferior */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-10 max-w-2xl text-center font-mont text-xs leading-6 text-gray-400"
        >
          Cada experiencia es única. Los testimonios reflejan las experiencias
          compartidas por nuestros clientes.
        </motion.p>

      </div>
    </section>
  );
}
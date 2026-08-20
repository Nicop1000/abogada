import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
} from "react-icons/fa";

const navigation = [
  {
    name: "Sobre mí",
    target: "descrip",
  },
  {
    name: "Servicios",
    target: "services",
  },
  {
    name: "Áreas de práctica",
    target: "areas",
  },
  {
    name: "Testimonios",
    target: "testimonios",
  },
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#350f24] text-white">

      {/* =========================================
          DECORACIÓN DE FONDO
      ========================================= */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#d1ae70]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d1ae70]/50 to-transparent" />


      {/* =========================================
          CONTENIDO PRINCIPAL
      ========================================= */}

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-16 sm:px-8 lg:px-8 lg:pt-20">

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">


          {/* =====================================
              COLUMNA 1 - PRESENTACIÓN
          ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >

            {/* Logo */}
            <Link
              to="cont"
              smooth={true}
              duration={700}
              className="inline-block cursor-pointer"
            >
              <motion.img
                whileHover={{ scale: 1.03 }}
                src="./just.png"
                alt="Dra. Gisela Karina Brusaferri"
                className="h-12 w-auto brightness-0 invert sm:h-14"
              />
            </Link>


            {/* Nombre */}
            <h2 className="mt-7 font-mont text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Dra. Gisela Karina Brusaferri
            </h2>

            <div className="mt-3 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d1ae70]" />

              <span className="font-mont text-xs uppercase tracking-[0.25em] text-[#d1ae70]">
                Abogada
              </span>
            </div>


            {/* Descripción */}
            <p className="mt-7 max-w-xl font-mont text-sm leading-7 text-white/60 sm:text-base">
              Abogada graduada de la Universidad de Buenos Aires, con
              experiencia en Derecho Laboral, accidentes de tránsito, ART,
              familia, sucesiones y otras áreas del derecho.
            </p>


            {/* Redes */}
            <div className="mt-8 flex items-center gap-3">

              <a
                href="https://www.instagram.com/dra.brusaferri/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d1ae70]/50 hover:bg-[#d1ae70] hover:text-[#350f24]"
              >
                <FaInstagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>


              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d1ae70]/50 hover:bg-[#d1ae70] hover:text-[#350f24]"
              >
                <FaFacebookF className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>


              <a
                href="https://wa.me/5491140884332?text=Hola%20Dra.%20Gisela%2C%20quisiera%20realizar%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#d1ae70] text-[#350f24] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <FaWhatsapp className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>

            </div>

          </motion.div>



          {/* =====================================
              COLUMNA 2 - NAVEGACIÓN
          ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >

            <h3 className="font-mont text-sm font-semibold uppercase tracking-[0.2em] text-[#d1ae70]">
              Navegación
            </h3>

            <div className="mt-6 space-y-3">

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.target}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  className="group flex cursor-pointer items-center gap-3 font-mont text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >

                  <span className="h-px w-0 bg-[#d1ae70] transition-all duration-300 group-hover:w-5" />

                  {item.name}

                </Link>
              ))}

            </div>

          </motion.div>



          {/* =====================================
              COLUMNA 3 - CONTACTO
          ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4"
          >

            <h3 className="font-mont text-sm font-semibold uppercase tracking-[0.2em] text-[#d1ae70]">
              Contacto
            </h3>


            <div className="mt-6 space-y-5">


              {/* Ubicación */}
              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-[#d1ae70]">
                  <FaMapMarkerAlt className="h-4 w-4" />
                </div>

                <div>
                  <p className="font-mont text-xs uppercase tracking-wider text-white/40">
                    Ubicación
                  </p>

                  <p className="mt-1 font-mont text-sm text-white/80">
                    Lomas de Zamora, Buenos Aires
                  </p>
                </div>

              </div>



              {/* Email */}
              <a
                href="mailto:giselabrusaferri@gmail.com"
                className="group flex items-start gap-4"
              >

                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-[#d1ae70] transition-all duration-300 group-hover:bg-[#d1ae70] group-hover:text-[#350f24]">
                  <FaEnvelope className="h-4 w-4" />
                </div>

                <div>
                  <p className="font-mont text-xs uppercase tracking-wider text-white/40">
                    Email
                  </p>

                  <p className="mt-1 break-all font-mont text-sm text-white/80 transition-colors group-hover:text-white">
                    giselabrusaferri@gmail.com
                  </p>
                </div>

              </a>



              {/* Teléfono */}
              <a
                href="tel:+5491140884332"
                className="group flex items-start gap-4"
              >

                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-[#d1ae70] transition-all duration-300 group-hover:bg-[#d1ae70] group-hover:text-[#350f24]">
                  <FaPhoneAlt className="h-4 w-4" />
                </div>

                <div>
                  <p className="font-mont text-xs uppercase tracking-wider text-white/40">
                    Teléfono
                  </p>

                  <p className="mt-1 font-mont text-sm text-white/80 transition-colors group-hover:text-white">
                    +54 9 11 4088-4332
                  </p>
                </div>

              </a>

            </div>



            {/* Botón WhatsApp */}

            <a
              href="https://wa.me/5491140884332?text=Hola%20Dra.%20Gisela%2C%20quisiera%20realizar%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex items-center justify-between rounded-2xl border border-[#d1ae70]/30 bg-[#d1ae70]/10 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#d1ae70]/60 hover:bg-[#d1ae70]/20"
            >

              <div className="flex items-center gap-3">

                <FaWhatsapp className="h-5 w-5 text-[#d1ae70]" />

                <div>
                  <p className="font-mont text-sm font-semibold text-white">
                    ¿Necesitás asesoramiento?
                  </p>

                  <p className="mt-0.5 font-mont text-xs text-white/50">
                    Escribinos por WhatsApp
                  </p>
                </div>

              </div>

              <span className="text-lg text-[#d1ae70] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </a>

          </motion.div>

        </div>



        {/* =========================================
            SEPARADOR
        ========================================= */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />


        {/* =========================================
            PARTE INFERIOR
        ========================================= */}

        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

          <p className="text-center font-mont text-xs text-white/40 sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white/70">
              Dra. Gisela Karina Brusaferri
            </span>
            . Todos los derechos reservados.
          </p>


          <div className="flex items-center gap-5">

            <button
              type="button"
              className="font-mont text-xs text-white/40 transition-colors hover:text-white"
            >
              Términos y condiciones
            </button>

            <span className="h-3 w-px bg-white/10" />

            <button
              type="button"
              className="font-mont text-xs text-white/40 transition-colors hover:text-white"
            >
              Política de privacidad
            </button>

          </div>


          {/* Volver arriba */}
          <button
            onClick={scrollTop}
            aria-label="Volver arriba"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d1ae70]/50 hover:bg-[#d1ae70] hover:text-[#350f24]"
          >
            <FaArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>

        </div>

      </div>

    </footer>
  );
}
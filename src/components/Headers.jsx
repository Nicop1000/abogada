import { Fragment, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

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
    name: "Áreas",
    target: "areas",
  },
  {
    name: "Testimonios",
    target: "testimonios",
  },
];

export default function Headers() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (target, close = null) => {
    if (close) {
      close();
    }

    setTimeout(() => {
      const element = document.getElementById(target);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <Popover
      as="header"
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link
              to="cont"
              smooth={true}
              duration={700}
              offset={-80}
              className="group flex cursor-pointer items-center"
            >
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                src="./just.png"
                alt="Dra. Gisela Karina Brusaferri"
                className={`w-auto transition-all duration-500 ${
                  scrolled ? "h-8 sm:h-9" : "h-9 sm:h-11"
                }`}
              />
            </Link>
          </div>


          {/* MENÚ DESKTOP */}
          <div className="hidden items-center md:flex">

            <nav className="flex items-center gap-1">

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.target}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  className={`group relative cursor-pointer rounded-full px-4 py-2 font-mont text-sm font-medium transition-all duration-300 ${
                    scrolled
                      ? "text-gray-600 hover:text-pink-900"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}

                  {/* Línea animada */}
                  <span
                    className={`absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-5/6 ${
                      scrolled ? "bg-pink-900" : "bg-pink-200"
                    }`}
                  />
                </Link>
              ))}

            </nav>


            {/* Separador */}
            <div
              className={`mx-5 h-7 w-px ${
                scrolled ? "bg-gray-200" : "bg-white/20"
              }`}
            />


            {/* NOMBRE */}
            <div className="hidden lg:block">
              <p
                className={`font-mont text-sm font-semibold transition-colors duration-300 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Dra. Gisela Karina Brusaferri
              </p>

              <p
                className={`mt-0.5 font-mont text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  scrolled ? "text-pink-800" : "text-pink-200"
                }`}
              >
                Abogada
              </p>
            </div>


            {/* WHATSAPP */}
            <a
              href="https://wa.me/5491140884332?text=Hola%20Dra.%20Gisela%2C%20quisiera%20realizar%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 hidden items-center gap-2 rounded-full bg-pink-900 px-5 py-2.5 font-mont text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-800 hover:shadow-lg xl:flex"
            >
              <FaWhatsapp className="h-4 w-4" />
              <span>Consultar</span>
            </a>

          </div>


          {/* BOTÓN MOBILE */}
          <div className="md:hidden">
            <Popover.Button
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                scrolled
                  ? "border-gray-200 bg-white text-gray-700 shadow-sm"
                  : "border-white/20 bg-white/10 text-white backdrop-blur-md"
              }`}
            >
              <span className="sr-only">Abrir menú</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

        </div>
      </div>


      {/* MENÚ MOBILE */}
      <Transition
        as={Fragment}
        enter="duration-300 ease-out"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="duration-200 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      >
        <Popover.Panel
          focus
          className="absolute left-0 right-0 top-0 z-50 bg-white shadow-2xl"
        >
          {({ close }) => (
            <div>

              {/* Header mobile */}
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">

                <img
                  src="./just.png"
                  alt="Dra. Gisela Karina Brusaferri"
                  className="h-9 w-auto"
                />

                <Popover.Button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-600 transition-colors hover:bg-gray-100"
                >
                  <span className="sr-only">Cerrar menú</span>
                  <XIcon className="h-5 w-5" aria-hidden="true" />
                </Popover.Button>

              </div>


              {/* Links */}
              <nav className="px-5 py-6">

                <div className="space-y-1">

                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                      }}
                    >
                      <button
                        onClick={() => scrollTo(item.target, close)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-left font-mont text-base font-medium text-gray-700 transition-all hover:bg-pink-50 hover:text-pink-900"
                      >
                        <span>{item.name}</span>

                        <span className="text-pink-800">
                          →
                        </span>
                      </button>
                    </motion.div>
                  ))}

                </div>


                {/* Separador */}
                <div className="my-5 h-px bg-gray-100" />


                {/* Nombre */}
                <div className="px-4">
                  <p className="font-mont text-sm font-semibold text-gray-800">
                    Dra. Gisela Karina Brusaferri
                  </p>

                  <p className="mt-1 font-mont text-xs uppercase tracking-wider text-pink-800">
                    Abogada
                  </p>
                </div>


                {/* WhatsApp */}
                <a
                  href="https://wa.me/5491140884332?text=Hola%20Dra.%20Gisela%2C%20quisiera%20realizar%20una%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => close()}
                  className="mt-6 flex items-center justify-center gap-3 rounded-xl bg-pink-900 px-5 py-4 font-mont text-sm font-semibold text-white shadow-lg transition-all hover:bg-pink-800"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  Realizar una consulta
                </a>

              </nav>

            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
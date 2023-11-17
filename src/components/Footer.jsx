import React from 'react'
import { Link, Element, animateScroll as scroll } from 'react-scroll';

export default function Footer() {
  return (
    <div>
      <div className="bg-white w-full p-8">
        <div className="grid grid-rows-1 gap-8 md:grid-cols-12 xl:gap-8">
          <div className="md:col-span-12 xl:col-span-4 flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-900">Dra. Gisela karina Brusaferri</h1>
            <p className="text-gray-600 font-mont text-base 2xl:mr-48 text-justify">
            Hola! Soy Gisela! Abogada graduada de la Universidad de Buenos Aires, especialista en Derecho Laboral, accidentes de tránsito, ART, entre otros.
            </p>
          </div>
          <div className=" hidden lg:block md:col-span-4 xl:col-span-2">
            <h2 className="font-bold mb-6 uppercase">Menu</h2>
            <nav className="flex flex-col gap-4">
              <Link to="descrip" smooth={true} duration={500} className="text-base font-medium cursor-pointer text-gray-500 hover:text-gray-900">
                Sobre mí
              </Link>
              <Link to="services" smooth={true} duration={500} className="text-base font-medium cursor-pointer text-gray-500 hover:text-gray-900">
                Servicios
              </Link>
              <Link to="areas" smooth={true} duration={500} className="text-base font-medium cursor-pointer text-gray-500 hover:text-gray-900">
                Áreas
              </Link>
              <Link to="test" smooth={true} duration={500} className="text-base font-medium cursor-pointer text-gray-500 hover:text-gray-900">
                Testimonios
              </Link>
            </nav>
          </div>
          <div className="md:col-span-4 xl:col-span-3">
            <h2 className="font-bold mb-6 uppercase">Redes sociales</h2>
            <nav>
              <a
                href="https://www.facebook.com/"
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                target="_blank"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  className="w-[20px] h-[20px]"
                  alt="JT Devs"
                />
                Dra. Brusaferri
              </a>
              <a
                href="https://www.instagram.com/dra.brusaferri/"
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                target="_blank"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  className="w-[20px] h-[20px]"
                  alt="JT Devs"
                />
                Gisela Karina Brusaferri
              </a>
              <a
                href="https://twitter.com/"
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                target="_blank"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384065.png"
                  className="w-[20px] h-[20px]"
                  alt="JT Devs"
                />
                Dra. Brusaferri
              </a>
            </nav>
          </div>
          <div className="md:col-span-4 xl:col-span-3">
            <h2 className="font-bold mb-6 uppercase">Contacto</h2>
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Lomas de Zamora, Argentina
              </p>
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                giselabrusaferri@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                11 4088-4332
              </p>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
          <p className="text-gray-800 text-center md:text-left">
            &copy; 2023 
            <span className="text-gray-900 font-bold"> Dra. GKB</span> Todos
            los derechos reservados.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Terminos y condiciones
            </a>
            <span className="hidden md:flex">|</span>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

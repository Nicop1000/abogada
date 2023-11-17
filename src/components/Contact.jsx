import React from 'react'
import { motion, progress } from 'framer-motion'
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {

  const MostrarAlerta = () => {
    Swal.fire({
      icon: 'success',
      title: 'Gracias por tu consulta',
      text: '¡En breve me pondré en contacto!',
      confirmButtonText: 'OK'
    })

  }

  const Funciones = () => {
    MostrarAlerta();
  }

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, event.target, process.env.REACT_APP_PUBLIC_KEY)
      .then(response => {
        if (response.status === 200) {
          Funciones();
          event.target.reset();
        }
        console.log(response);
      })
      .catch(error => console.log(error));
  }


  return (
    <div className='' >

      <div className='bg-cover bg-center'
        style={{
          backgroundImage: 'url(./fondogi.jpg)'
        }}>

        <div className='lg:px-8'>

          <div id='cont'
            className='grid grid-cols-1 lg:grid-cols-3 bg-cover bg-center lg:h-full h-full px-8 lg:px-8'
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ onde: true, amount: 0 }}
              transition={{ delay: 0, duration: 1 }}
              variants={{
                hidden: { opacity: 0, y: 90 },
                visible: { opacity: 1, y: 0 },
              }}
              className='md:hidden text-xl text-center text-gray-300 text-stroke-3 font-bold pt-7'>Dra. Gisela Karina Brusaferri</motion.h2>
           <div className='lg:hidden md:mt-10 '>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ onde: true, amount: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, z: -90 },
                    visible: { opacity: 1, z: 0 },
                  }}
                  className='text-2xl font-bold text-center pt-8 text-gray-300 text-stroke-3'>¿NECESITÁS AYUDA LEGAL?
                  <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ onde: true, amount: 0 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    variants={{
                      hidden: { opacity: 0, z: -90 },
                      visible: { opacity: 1, z: 0 },
                    }}
                    className='text-2xl font-bold text-gray-300 text-stroke-3'> PUEDO AYUDARTE.</motion.span></motion.h3>
                </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ onde: true, amount: 0 }}
              transition={{ delay: 0, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              className='flex justify-center col-span-1'>
                
              <img src="./gise44.png" alt="" className='col-span-1 transform scale-x-[-1] md:mt-20 flex h-96 md:h-full md:w-full object-cover' />
            </motion.div>
            <div className="py-4 px-4 sm:px-6 lg:col-span-2 lg:py-32 lg:px-8 xl:pl-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ onde: true, amount: 0 }}
                transition={{ delay: 0, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="mx-auto max-w-lg lg:col-span-2 lg:max-w-none">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ onde: true, amount: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, y: -90 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className='lg:text-5xl text-xl font-medium hidden lg:block text-center pb-8 lg:font-bold text-gray-300 text-stroke-3'>¿NECESITÁS AYUDA LEGAL?
                  <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ onde: true, amount: 0 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    variants={{
                      hidden: { opacity: 0, z: -90 },
                      visible: { opacity: 1, z: 0 },
                    }}
                    className='lg:text-5xl text-xl text-gray-500 text-stroke-3'> PUEDO AYUDARTE.</motion.span></motion.h3>
                <form action="#" method="POST" onSubmit={sendEmail} className="grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="full-name" className="sr-only">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      required={true}
                      autoComplete="name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Nombre y apellido"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required={true}
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      required={true}
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Teléfono"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required={true}
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Mensaje"
                      defaultValue={''}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

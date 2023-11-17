import React from 'react'
import WhatsApp from './WhathApp'
import './Frame.css'
import { motion } from 'framer-motion';

export default function Telef() {
  return (
    <div className=' relative'>
      <img src="./gise1.jpg" alt="" className='h-full w-full object-cover ' />

      <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black opacity-40" />
      <div className="relative px-8">

      </div>
      <div className='absolute left-1/3 top-1/2'>
        <div className='grid place-items-center'>

          <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ onde: true, amount: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, z: 50 },
            visible: { opacity: 1, z: 0 },
          }}
          className='text-white lg:text-6xl text-xl font-caveat'>Hacé valer tus derechos</motion.h2>
          <motion.h3 
          initial="hidden"
          whileInView="visible"
          viewport={{ onde: true, amount: 0 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, z: 50 },
            visible: { opacity: 1, z: 0 },
          }}
          className='text-white lg:text-2xl text-lg font-caveat lg:mt-4'>Realizá tu consulta!</motion.h3>
          <div className=' animate-example rounded-full mt-8'>
            <div className="bottom-5 right-6">
              <a           
              href="https://wa.me/541140884332?text=Quiero%20realizar%20una%20consulta" target="_blank"
                >
                <img src="whatsAppIcono.png" alt=""
                  className="lg:w-12 w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

import React from 'react'
import Contact from './Contact'

import Descriptions from './Descriptions'
import Services from './Services'
import Areas from './Areas'
import Testimionio from './Testimionio'
import Example from './Preguntas'
import Carrusel from './Carrusel'
import Telef from './Telef'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Contact />
      <Descriptions />
      <Services />
      <Areas />
      <Carrusel />
      <Example />
      <Telef />
      <Footer />
    </div>
  )
}

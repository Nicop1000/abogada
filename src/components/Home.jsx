export default function Home() {
  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 999999,
          background: 'red',
          color: 'white',
          padding: '20px',
        }}
      >
        ESTOY EN HOME
      </div>

      <Contact />
      <Descriptions />
      <Services />
      <Areas />
      <Carrusel />
      <Example />
      <Telef />
      <Footer />

      <WhatsAppFlotante />
    </div>
  )
}
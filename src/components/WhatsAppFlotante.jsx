export default function WhatsAppFlotante() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href="https://wa.me/541140884332?text=Hola%20Dra.%20Gisela%2C%20quisiera%20realizar%20una%20consulta%20y%20conocer%20c%C3%B3mo%20puedo%20recibir%20asesoramiento."
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar a la Dra. Gisela por WhatsApp"
        className="
          flex items-center justify-center
          w-14 h-14
          rounded-full
          bg-[#25D366]
          shadow-lg
          transition-all duration-200
          hover:scale-110
          hover:shadow-xl
        "
      >
        <img
          src="/whatsAppIcono.png"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </div>
  )
}
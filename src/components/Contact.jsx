export function Contact() {
  return (
    <section
      className="mx-auto mt-5 w-[min(1120px,92vw)] rounded-3xl border border-[#ebd7d0] bg-[linear-gradient(180deg,#f5e6e0_0%,#f8f0ec_100%)] p-6 sm:mt-7"
      id="contato"
    >
      <div>
        <h2 className="mb-3 font-['Playfair_Display',serif] text-[clamp(1.8rem,2.6vw,2.6rem)]">
          Contato
        </h2>
        <p className="m-0 max-w-[62ch] text-[#6f615b]">
          Atendimento com hora marcada para garantir sua experiência tranquila.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 max-md:grid-cols-1">
        <article className="rounded-2xl border border-[#eddad2] bg-white p-4">
          <h3 className="mb-2">Endereço</h3>
          <p className="my-1 text-[#6f615b]">Rua das Camélias, 185 - Centro</p>
          <p className="my-1 text-[#6f615b]">Atendimento: seg a sáb, 9h às 19h</p>
        </article>

        <article className="rounded-2xl border border-[#eddad2] bg-white p-4">
          <h3 className="mb-2">Fale conosco</h3>
          <p className="my-1 text-[#6f615b]">WhatsApp: (11) 99999-0000</p>
          <p className="my-1 text-[#6f615b]">E-mail: contato@betruestudio.com</p>
        </article>
      </div>
    </section>
  )
}

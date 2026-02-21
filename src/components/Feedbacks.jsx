import { useState } from 'react'

export function Feedbacks() {
  const feedbackItems = [
    {
      comment:
        '"Fui para maquiagem e saí me sentindo renovada. Atendimento cuidadoso, ambiente impecável e resultado exatamente como eu queria."',
      name: 'Mariana Alves',
    },
    {
      comment:
        '"O atendimento foi extremamente atencioso do início ao fim. Minha pele ficou linda e a make durou a festa inteira."',
      name: 'Fernanda Costa',
    },
    {
      comment:
        '"Agendei para o dia da noiva e foi perfeito. Equipe organizada, pontual e muito talentosa. Super recomendo."',
      name: 'Juliana Rocha',
    },
    {
      comment:
        '"Fiz limpeza de pele e skin care personalizado. O atendimento foi leve, profissional e com resultado visível no mesmo dia."',
      name: 'Camila Nunes',
    },
    {
      comment:
        '"Ambiente lindo e acolhedor. A equipe entende exatamente o que você quer e entrega um resultado impecável."',
      name: 'Patricia Lima',
    },
    {
      comment:
        '"Minha experiência no studio foi excelente do começo ao fim. Voltarei para novos serviços com certeza."',
      name: 'Renata Souza',
    },
  ]

  const [current, setCurrent] = useState(0)
  const total = feedbackItems.length

  const prev = () => setCurrent((value) => (value - 1 + total) % total)
  const next = () => setCurrent((value) => (value + 1) % total)

  return (
    <section
      className="relative ml-[calc(50%-50vw)] flex min-h-[78vh] w-screen items-center overflow-hidden bg-[radial-gradient(circle_at_15%_15%,_#f2d7cc_0%,_transparent_38%),radial-gradient(circle_at_86%_25%,_#e8c4b6_0%,_transparent_42%),linear-gradient(165deg,#fffdfb_0%,#f6e8e1_55%,#efd9cf_100%)] py-14"
      id="feedbacks"
    >
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(178,119,95,0.3)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-28 top-6 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(214,165,145,0.32)_0%,transparent_70%)]" />

      <div className="relative mx-auto w-[min(1120px,92vw)]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.17em] text-[#8b6a5f]">Feedbacks</p>
            <h2 className="mt-2 font-['Playfair_Display',serif] text-[clamp(2rem,3.3vw,3.6rem)] leading-[1.04] text-[#2f2623]">
              O que as clientes dizem
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="h-11 w-11 rounded-full border border-[#cfaa9c] bg-[rgba(255,255,255,0.65)] text-[#5f3f34] backdrop-blur-sm transition hover:bg-white"
              aria-label="Feedback anterior"
            >
              {'<'}
            </button>
            <button
              onClick={next}
              className="h-11 w-11 rounded-full border border-[#cfaa9c] bg-[rgba(255,255,255,0.65)] text-[#5f3f34] backdrop-blur-sm transition hover:bg-white"
              aria-label="Próximo feedback"
            >
              {'>'}
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-hidden">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
            {feedbackItems.map((item, index) => (
              <article key={`${item.name}-${index}`} className="w-full shrink-0">
                <p className="max-w-[900px] text-[clamp(1.05rem,1.7vw,1.45rem)] font-medium leading-relaxed text-[#4b3b35]">
                  {item.comment}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full bg-[#9d6f61]" />
                  <div className="grid">
                    <strong className="text-[1.02rem] text-[#2f2623]">{item.name}</strong>
                    <span className="text-sm text-[#7c5f56]">Cliente verificada</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2">
          {feedbackItems.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition ${current === index ? 'w-8 bg-[#8d5f50]' : 'w-2.5 bg-[#cfaa9c]'}`}
              aria-label={`Ir para feedback ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

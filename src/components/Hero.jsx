export function Hero() {
  return (
    <section id="topo">
      <div
        className="relative ml-[calc(50%-50vw)] h-[66vh] min-h-[520px] w-screen bg-[url('/img/hero-banner.png')] bg-cover bg-right"
        role="img"
        aria-label="Modelo com maquiagem suave em ambiente claro"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(252,248,245,0.92)] via-[rgba(252,248,245,0.56)] to-transparent" />
        <div className="relative mx-auto flex h-full w-[min(1120px,92vw)] items-center">
          <article className="max-w-[620px] rounded-[28px] border border-[rgba(219,190,179,0.5)] bg-[rgba(255,251,248,0.58)] p-6 shadow-[0_24px_60px_-38px_rgba(75,45,35,0.65)] backdrop-blur-[2px] sm:p-8">
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-[#6f5951]">
              Studio de maquiagem, spa e skin care
            </p>
            <h1 className="mt-3 font-['Playfair_Display',serif] text-[clamp(2.3rem,5.4vw,4.4rem)] leading-[0.98]">
              Be True Studio
            </h1>
            <p className="mt-4 max-w-[56ch] text-[1.03rem] leading-relaxed text-[#5d504a]">
              Um espaço onde beleza e bem-estar se encontram, com técnicas
              modernas, toque delicado e atendimento premium.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/agendamento"
                className="rounded-full bg-[#9d6f61] px-6 py-[0.78rem] text-[0.82rem] font-bold uppercase tracking-[0.08em] text-white transition hover:-translate-y-px hover:bg-[#88594b]"
              >
                Agendar agora
              </a>
              <a
                href="/portfolio"
                className="rounded-full border border-[#dec5bb] bg-[#f8efeb] px-6 py-[0.78rem] text-[0.82rem] font-bold uppercase tracking-[0.08em] text-[#2f2623] transition hover:-translate-y-px hover:bg-white"
              >
                Ver portfólio
              </a>
            </div>
          </article>
        </div>
      </div>

      <div className="mx-auto w-[min(1120px,92vw)] py-6 sm:py-7">
        <div className="rounded-[20px] bg-[linear-gradient(145deg,#fffaf7_0%,#f7ece7_100%)] px-5 py-4 sm:px-7">
          <p className="text-center font-['Playfair_Display',serif] text-[clamp(1.02rem,1.6vw,1.3rem)] leading-relaxed text-[#66463b]">
            Beleza que revela sua essência, com cuidado, técnica e sofisticação em cada detalhe.
          </p>
        </div>
      </div>
    </section>
  )
}

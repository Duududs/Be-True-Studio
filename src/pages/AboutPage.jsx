const values = [
  {
    title: "Atendimento humano",
    description:
      "Escuta ativa para entender seu estilo, sua rotina e o resultado que você realmente deseja.",
  },
  {
    title: "Técnica e suavidade",
    description:
      "Protocolos modernos com acabamento leve, elegante e fiel à sua identidade.",
  },
  {
    title: "Ritual de tranquilidade",
    description:
      "Um ambiente pensado para desacelerar e transformar autocuidado em experiência.",
  },
];

const numbers = [
  { label: "Anos de experiência", value: "8+" },
  { label: "Atendimentos realizados", value: "2.000+" },
  { label: "Noivas atendidas", value: "350+" },
  { label: "Avaliação média", value: "4.9/5" },
];

const pillars = [
  {
    title: "Beleza personalizada",
    text: "Cada atendimento começa com leitura de pele, estilo e ocasião para definir uma proposta única.",
  },
  {
    title: "Conforto em primeiro lugar",
    text: "Produtos selecionados, aplicação cuidadosa e ritmo de atendimento que respeita seu momento.",
  },
  {
    title: "Resultado fotogênico",
    text: "Preparação de pele, acabamento e durabilidade pensados para ficar impecável ao vivo e nas fotos.",
  },
];

export function AboutPage() {
  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-10">
      <div className="relative overflow-hidden rounded-[32px] border border-[#e7d5ce] bg-[linear-gradient(150deg,#fffdfb_0%,#f7ede8_56%,#f4e4dd_100%)] p-6 shadow-[0_26px_70px_-38px_rgba(72,45,34,0.58)] sm:p-8">
        <div className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full bg-[radial-gradient(circle,_rgba(232,197,183,0.62)_0%,transparent_72%)]" />
        <div className="pointer-events-none absolute -right-20 bottom-6 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(201,155,136,0.35)_0%,transparent_72%)]" />

        <header className="relative grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-[#82645a]">
              Sobre o Studio
            </p>
            <h1 className="mt-3 max-w-[14ch] font-['Playfair_Display',serif] text-[clamp(2.1rem,3.2vw,3.5rem)] leading-[1.02] text-[#2f2623]">
              Beleza com verdade, técnica e presença
            </h1>
            <p className="mt-4 max-w-[62ch] text-[1rem] leading-relaxed text-[#6d5a54]">
              O Be True Studio nasceu para entregar uma experiência de beleza
              sofisticada e acolhedora, com foco em maquiagem, pele e bem-estar.
              Aqui, cada detalhe é pensado para valorizar quem você é.
            </p>
          </div>

          <div className="grid gap-2 rounded-[20px] border border-[#e6d3cc] bg-white/85 p-4 shadow-[0_18px_40px_-30px_rgba(68,44,34,0.6)]">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#8a655a]">
              Especialidades
            </p>
            <p className="text-[#6f615b]">
              Maquiagem social, dia da noiva, preparação de pele, spa facial e
              consultoria de skincare.
            </p>
          </div>
        </header>

        <div className="relative mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {numbers.map((item) => (
            <article
              key={item.label}
              className="rounded-[18px] border border-[#e8d6cf] bg-white/85 px-4 py-3 shadow-[0_16px_35px_-30px_rgba(68,44,34,0.62)]"
            >
              <strong className="font-['Playfair_Display',serif] text-[1.5rem] text-[#2f2623]">
                {item.value}
              </strong>
              <p className="mt-1 text-sm text-[#6f615b]">{item.label}</p>
            </article>
          ))}
        </div>

        <div className="relative mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[24px] border border-[#e8d6cf] bg-white/88 p-5 shadow-[0_20px_45px_-32px_rgba(68,44,34,0.64)] sm:p-6">
            <h2 className="font-['Playfair_Display',serif] text-[1.55rem] text-[#2f2623]">
              Nossa história
            </h2>
            <p className="mt-3 text-[#6f615b]">
              O Be True nasceu do desejo de criar um espaço onde a beleza fosse
              tratada com cuidado, sensibilidade e autenticidade. Mais do que
              serviços, criamos experiências que unem resultado técnico e bem-estar.
            </p>
            <p className="mt-3 text-[#6f615b]">
              Acreditamos que beleza não é padrão, é identidade. Por isso, cada
              atendimento é personalizado, respeitando traços, estilo, pele e o
              momento de cada cliente.
            </p>
            <p className="mt-3 text-[#6f615b]">
              Com olhar especial para noivas e eventos, acompanhamos cada etapa
              com presença e precisão para que você se sinta segura e linda.
            </p>
          </article>

          <div className="grid gap-4">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[20px] border border-[#ead9d2] bg-[rgba(255,255,255,0.86)] p-4 shadow-[0_18px_42px_-30px_rgba(68,44,34,0.58)]"
              >
                <h3 className="font-['Playfair_Display',serif] text-[1.2rem] text-[#2f2623]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[#6f615b]">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>

        <footer className="relative mt-6 flex flex-wrap items-center justify-between gap-3 rounded-[20px] border border-[#e7d6cf] bg-white/85 px-5 py-4 shadow-[0_16px_36px_-28px_rgba(68,44,34,0.72)]">
          <p className="text-[#6b5852]">
            Quer viver essa experiência no Be True Studio?
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="/agendamento"
              className="inline-flex items-center justify-center rounded-full bg-[#9d6f61] px-5 py-2.5 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-px hover:bg-[#87594b]"
            >
              Agendar horário
            </a>
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-full border border-[#cfafa3] bg-white px-5 py-2.5 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-[#5f4338] transition hover:bg-[#fff8f4]"
            >
              Falar com a equipe
            </a>
          </div>
        </footer>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {values.map((value) => (
          <article
            key={value.title}
            className="rounded-[20px] border border-[#ead9d2] bg-[rgba(255,255,255,0.84)] p-4 shadow-[0_18px_42px_-30px_rgba(68,44,34,0.58)]"
          >
            <h3 className="font-['Playfair_Display',serif] text-[1.25rem] text-[#2f2623]">
              {value.title}
            </h3>
            <p className="mt-2 text-[#6f615b]">{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

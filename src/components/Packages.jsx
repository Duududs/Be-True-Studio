import { useMemo, useState } from "react";

const packageItems = [
  {
    id: "glow-day",
    label: "Glow Day",
    title: "Experiência Glow Day",
    subtitle:
      "Pele cuidada, relaxamento e maquiagem glow em uma experiência completa.",
    price: "R$ 390",
    time: "2h",
    image: "/package/skincare.png",
    imagePosition: "center 8%",
    highlights: [
      "Limpeza de pele revitalizante",
      "Hidratação facial profunda",
      "Massagem facial relaxante",
      "Momento de bem-estar (aromaterapia + pausa relax)",
      "MMaquiagem glow (leve e natural)",
    ],
  },
  {
    id: "spa-ritual",
    label: "Spa Ritual",
    title: "Experiência Spa Ritual",
    subtitle: "Relaxamento com foco em pele e bem-estar",
    price: "R$ 520",
    time: "2h30",
    image: "/package/spa.png",
    highlights: [
      "Massagem corporal relaxante",
      "Aromaterapia personalizada",
      "Esfoliação corporal suave",
      "Hidratação corporal",
      "Momento de pausa e relaxamento",
    ],
  },
  {
    id: "noiva-premium",
    label: "Noiva Premium",
    title: "Experiência Noiva Premium",
    subtitle: "Preparação completa para o grande dia",
    price: "R$ 1.500",
    time: "5h",
    image: "/package/noivas.png",
    highlights: [
      "Preparo completo da pele",
      "Maquiagem personalizada para o grande dia",
      "Produção de cabelo e finalização",
      "Teste prévio de maquiagem e cabelo",
      "Momento de bem-estar e relaxamento",
      "Acompanhamento no dia do casamento (retoques e suporte)",
      "Atendimento 100% dedicado",
      "Kit retoque (batom, pó, itens essenciais)",
    ],
  },
];

export function Packages() {
  const [activeId, setActiveId] = useState(packageItems[0].id);
  const activePackage = useMemo(
    () => packageItems.find((item) => item.id === activeId) ?? packageItems[0],
    [activeId],
  );

  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-12" id="pacotes">
      <div className="relative overflow-hidden rounded-[34px] border border-[#dfc6bb] bg-[linear-gradient(145deg,#fff9f5_0%,#f5e8e2_58%,#efdbd2_100%)] p-5 shadow-[0_28px_80px_-40px_rgba(74,45,34,0.58)] sm:p-8">
        <div className="pointer-events-none absolute -left-14 top-6 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(229,179,157,0.45)_0%,transparent_72%)]" />
        <div className="pointer-events-none absolute -right-20 bottom-4 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(193,138,115,0.38)_0%,transparent_72%)]" />

        <div className="relative grid gap-6 lg:grid-cols-[0.9fr_1.2fr]">
          <div className="grid gap-4">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#8d695d]">
                Pacotes autorais
              </p>
              <h2 className="mt-2 font-['Playfair_Display',serif] text-[clamp(1.9rem,2.8vw,3rem)] leading-[1.05] text-[#2f2623]">
                Pacotes e experiências
              </h2>
              <p className="mt-3 max-w-[36ch] text-[#6a5751]">
                Escolha um pacote e veja os detalhes em tempo real. Cada opção
                foi pensada para diferentes momentos.
              </p>
            </div>

            <div className="grid gap-2.5">
              {packageItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    onMouseEnter={() => setActiveId(item.id)}
                    onFocus={() => setActiveId(item.id)}
                    className={`grid gap-1 rounded-2xl border px-4 py-3 text-left transition ${
                      isActive
                        ? "border-[#8f6253] bg-[#9d6f61] text-white shadow-[0_14px_30px_-20px_rgba(74,45,34,0.85)]"
                        : "border-[#ddc1b5] bg-[rgba(255,255,255,0.7)] text-[#4f3b35] hover:border-[#cdaea1] hover:bg-white"
                    }`}
                  >
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em]">
                      {item.label}
                    </span>
                    <strong className="font-['Playfair_Display',serif] text-[1.12rem]">
                      {item.title}
                    </strong>
                    <small
                      className={`${isActive ? "text-[#f4e9e4]" : "text-[#7a645c]"}`}
                    >
                      {item.subtitle}
                    </small>
                  </button>
                );
              })}
            </div>
          </div>

          <article className="relative overflow-hidden rounded-[26px] border border-[#e4cfc6] bg-transparent p-4 shadow-[0_22px_50px_-34px_rgba(66,41,31,0.75)] sm:min-h-[760px] sm:p-5">
            <div className="relative h-60 overflow-hidden rounded-[20px] sm:h-64">
              <img
                src={activePackage.image}
                alt={activePackage.title}
                className="h-full w-full object-cover"
                style={{ objectPosition: activePackage.imagePosition || "center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(36,22,17,0.7)] via-[rgba(36,22,17,0.2)] to-transparent" />
              <div className="absolute left-3 top-3 rounded-full border border-[rgba(255,255,255,0.44)] bg-[rgba(30,20,16,0.58)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-white">
                {activePackage.time}
              </div>
              <div className="absolute bottom-3 right-3 rounded-full bg-[#f8ede8] px-4 py-1.5 text-sm font-bold text-[#6b4a3f]">
                {activePackage.price}
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-['Playfair_Display',serif] text-[1.5rem] leading-tight text-[#2f2623]">
                {activePackage.title}
              </h3>
              <p className="mt-2 text-[#6b5852]">{activePackage.subtitle}</p>
            </div>

            <div className="mt-4 rounded-2xl border border-[#dec7be] bg-[rgba(255,255,255,0.82)] p-3.5">
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#6f5045]">
                  O que está incluído
                </p>
                <span className="rounded-full bg-[#f4e4dc] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#8a5f51]">
                  {activePackage.highlights.length} itens
                </span>
              </div>

              <ul className="grid max-h-[260px] gap-2 overflow-auto pr-1">
                {activePackage.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-2 rounded-xl bg-white/80 px-3 py-2 text-[0.84rem] font-semibold text-[#6f5045]"
                  >
                    <span className="inline-grid h-5 w-5 place-items-center rounded-full bg-[#9d6f61] text-[0.7rem] text-white">
                      ✓
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <a
                href={`/agendamento?pacote=${encodeURIComponent(activePackage.title)}`}
                className="inline-flex items-center justify-center rounded-full bg-[#9d6f61] px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-px hover:bg-[#885b4c]"
              >
                Reservar este pacote
              </a>
              <a
                href="/contato"
                className="inline-flex items-center justify-center rounded-full border border-[#cfaea2] bg-white/80 px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#5f4338] transition hover:bg-white"
              >
                Tirar dúvidas
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

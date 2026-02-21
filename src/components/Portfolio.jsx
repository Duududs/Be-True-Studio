import { useMemo } from "react";

const portfolioImages = [
  "/portifolio/mode1.png",
  "/portifolio/mode2.png",
  "/portifolio/mode3.png",
  "/portifolio/mode4.png",
  "/portifolio/mode5.png",
  "/portifolio/mode6.png",
  "/portifolio/mode7.png",
  "/portifolio/mode8.png",
  "/portifolio/mode9.png",
  "/portifolio/mode10.png",
  "/portifolio/mode11.png",
  "/portifolio/mode12.png",
  "/portifolio/mode13.png",
  "/portifolio/mode14.png",
  "/portifolio/mode15.png",
  "/portifolio/mode16.png",
];

const categories = ["Noivas", "Social", "Editorial", "Glow"];

export function Portfolio() {
  const portfolioItems = useMemo(
    () =>
      portfolioImages.map((image, index) => {
        const category = categories[index % categories.length];
        const accent =
          index % 3 === 0
            ? "sm:rotate-[-0.8deg]"
            : index % 3 === 1
              ? "sm:rotate-[0.9deg]"
              : "sm:rotate-0";
        return {
          image,
          category,
          title: `Look ${String(index + 1).padStart(2, "0")}`,
          accent,
        };
      }),
    [],
  );

  return (
    <section
      className="mx-auto grid w-[min(1120px,92vw)] gap-8 py-10"
      id="portfolio"
    >
      <header className="relative overflow-hidden rounded-[34px] border border-[#dfc6bb] bg-[linear-gradient(145deg,#fff9f5_0%,#f5e8e2_58%,#efdbd2_100%)] p-6 shadow-[0_28px_80px_-40px_rgba(74,45,34,0.58)] sm:p-9">
        <div className="pointer-events-none absolute -left-16 top-4 h-52 w-52 rounded-full bg-[radial-gradient(circle,_rgba(229,179,157,0.42)_0%,transparent_72%)]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(193,138,115,0.34)_0%,transparent_72%)]" />

        <div className="relative grid gap-4">
          <p className="w-fit rounded-full border border-[#d8b7aa] bg-[rgba(255,255,255,0.65)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#8d695d]">
            Be True Studio
          </p>
          <h1 className="max-w-[16ch] font-['Playfair_Display',serif] text-[clamp(2rem,4.8vw,3.8rem)] leading-[0.96] text-[#2f2623]">
            Between Tones
          </h1>
          <p className="max-w-[58ch] text-[#6b5852]">
            Uma seleção com produções feitas no estúdio, com acabamento
            elegante, pele iluminada e identidade em cada detalhe.
          </p>

          <div className="mt-1 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-[#d5b3a5] bg-white/70 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#734f42]"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="columns-1 gap-3 sm:columns-2 lg:columns-3 xl:columns-4">
        {portfolioItems.map((item) => (
          <article
            key={item.title}
            className={`group relative mb-3 inline-block w-full break-inside-avoid overflow-hidden rounded-[22px] border border-[#e6d3cc] bg-[#fff8f5] p-2 shadow-[0_18px_45px_-26px_rgba(68,44,34,0.45)] transition duration-300 hover:-translate-y-1 ${item.accent}`}
          >
            <img
              src={item.image}
              alt={`${item.title} - ${item.category}`}
              loading="lazy"
              className="h-auto w-full rounded-[16px] object-contain transition duration-500 group-hover:scale-[1.015]"
            />
          </article>
        ))}
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-3 rounded-[22px] border border-[#e7d6cf] bg-white/80 px-5 py-4 shadow-[0_16px_36px_-28px_rgba(68,44,34,0.72)]">
        <p className="text-sm text-[#6b5852]">
          Curtiu os resultados? Garanta seu horário para criar seu look
          exclusivo.
        </p>
        <a
          href="/agendamento"
          className="inline-flex items-center justify-center rounded-full bg-[#9d6f61] px-5 py-2.5 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-px hover:bg-[#87594b]"
        >
          Agendar agora
        </a>
      </footer>
    </section>
  );
}

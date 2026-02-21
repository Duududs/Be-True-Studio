import { serviceItems } from "../data/studioData";

export function Services() {
  return (
    <section className="mx-auto w-[min(1120px,92vw)] py-14" id="servicos">
      <div className="mx-auto max-w-[760px] text-center">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#8a655a]">
          Curadoria Be True
        </p>
        <h2 className="mt-3 font-['Playfair_Display',serif] text-[clamp(2rem,3vw,3.15rem)] leading-[1.04] text-[#2f2623]">
          Serviços e experiências
        </h2>
        <p className="mt-4 text-[1rem] leading-relaxed text-[#6c5a54]">
          Um menu autoral com categorias pensadas para criar visuais
          sofisticados, cuidar da pele e proporcionar momentos de bem-estar.
        </p>
      </div>

      <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {serviceItems.map((service) => (
          <article
            key={service.title}
            className="group flex h-full w-full flex-col overflow-hidden rounded-t-[180px] rounded-b-[26px] border border-[#e6d2ca] bg-[#fffdfc] p-4 shadow-[0_22px_48px_-34px_rgba(64,39,30,0.7)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_56px_-30px_rgba(64,39,30,0.74)]"
          >
            <div className="relative mx-auto w-full max-w-[230px] overflow-hidden rounded-t-[140px] rounded-b-[20px]">
              <img
                src={service.image}
                alt={service.title}
                className="aspect-[3/4] h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(34,21,17,0.74)] via-[rgba(34,21,17,0.16)] to-transparent" />
            </div>

            <div className="flex flex-1 flex-col gap-3 px-2 pb-2 pt-4">
              <div>
                <h3 className="text-center font-['Playfair_Display',serif] text-[1.3rem] leading-tight text-[#2f2623]">
                  {service.title}
                </h3>
                <p className="mt-3 text-center text-[0.95rem] leading-relaxed text-[#6f5e58]">
                  {service.description}
                </p>
              </div>
              <a
                href={`/agendamento?categoria=${encodeURIComponent(service.category)}`}
                className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-[#9d6f61] px-4 py-2.5 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-px hover:bg-[#87594b]"
              >
                Ver serviços
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

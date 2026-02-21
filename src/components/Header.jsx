import { useState } from 'react'

const links = [
  { href: '/sobre', label: 'Sobre' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/contato', label: 'Contato' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(201,166,151,0.24)] bg-[rgba(252,248,245,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[82px] w-[min(1120px,92vw)] items-center justify-between gap-4">
        <a href="/" className="grid leading-none lowercase">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#7f6d66]">be true</span>
          <strong className="font-['Playfair_Display',serif] text-[1.45rem] tracking-[0.03em] text-[#2f2623]">studio</strong>
        </a>

        <button
          className="rounded-full border border-[#dfc5bb] bg-white/70 px-4 py-2 text-sm font-bold text-[#4d3a33] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          Menu
        </button>

        <nav
          className={`absolute left-0 right-0 top-[calc(100%+1px)] flex-col items-start gap-3 border-b border-[#eadad3] bg-white px-[4vw] py-4 md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 ${
            open ? 'flex' : 'hidden md:flex'
          }`}
        >
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-full px-3 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-[#5a463f] transition hover:bg-[rgba(157,111,97,0.12)]"
            >
              {item.label}
            </a>
          ))}
          <a
            className="rounded-full bg-[#9d6f61] px-5 py-[0.66rem] text-[0.8rem] font-bold uppercase tracking-[0.08em] text-white transition hover:-translate-y-px hover:bg-[#87594b]"
            href="/agendamento"
            onClick={() => setOpen(false)}
          >
            Reservar horário
          </a>
        </nav>
      </div>
    </header>
  )
}

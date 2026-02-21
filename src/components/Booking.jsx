import { useEffect, useMemo, useState } from 'react'

const initialState = {
  name: '',
  phone: '',
  service: 'Make social e eventos',
  date: '',
  time: '',
  notes: '',
}

export function Booking() {
  const [form, setForm] = useState(initialState)
  const [appointments, setAppointments] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem('be-true-bookings')
    if (stored) setAppointments(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('be-true-bookings', JSON.stringify(appointments))
  }, [appointments])

  const canSubmit = useMemo(
    () => form.name && form.phone && form.service && form.date && form.time,
    [form],
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!canSubmit) {
      setMessage('Preencha os campos obrigatórios para concluir o agendamento.')
      return
    }

    const nextAppointments = [
      ...appointments,
      { ...form, id: crypto.randomUUID(), createdAt: new Date().toISOString() },
    ]

    setAppointments(nextAppointments)
    setForm(initialState)
    setMessage('Agendamento confirmado. Em breve entraremos em contato.')
  }

  return (
    <section className="mx-auto w-[min(1120px,92vw)]" id="agendamento">
      <h2 className="mb-3 font-['Playfair_Display',serif] text-[clamp(1.8rem,2.6vw,2.6rem)]">
        Agendamento
      </h2>
      <p className="m-0 max-w-[62ch] text-[#6f615b]">
        Escolha seu horário e deixe o resto com nossa equipe.
      </p>

      <div className="mt-5 grid grid-cols-[1.1fr_0.9fr] gap-4 max-[920px]:grid-cols-1">
        <form
          className="grid gap-3 rounded-[18px] border border-[#ebd9d2] bg-white p-4 shadow-[0_18px_45px_-26px_rgba(68,44,34,0.45)]"
          onSubmit={handleSubmit}
        >
          <label className="grid gap-1.5 font-semibold">
            Nome completo*
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Seu nome"
              className="w-full rounded-xl border border-[#e1cbc2] bg-white px-3 py-2.5"
            />
          </label>

          <label className="grid gap-1.5 font-semibold">
            WhatsApp*
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className="w-full rounded-xl border border-[#e1cbc2] bg-white px-3 py-2.5"
            />
          </label>

          <label className="grid gap-1.5 font-semibold">
            Serviço*
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#e1cbc2] bg-white px-3 py-2.5"
            >
              <option>Make social e eventos</option>
              <option>Dia da noiva completo</option>
              <option>Spa relaxante facial</option>
              <option>Skin care personalizado</option>
            </select>
          </label>

          <div className="grid grid-cols-2 gap-2.5 max-sm:grid-cols-1">
            <label className="grid gap-1.5 font-semibold">
              Data*
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#e1cbc2] bg-white px-3 py-2.5"
              />
            </label>

            <label className="grid gap-1.5 font-semibold">
              Horário*
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#e1cbc2] bg-white px-3 py-2.5"
              />
            </label>
          </div>

          <label className="grid gap-1.5 font-semibold">
            Observações
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows="3"
              placeholder="Conte se deseja algo específico"
              className="w-full rounded-xl border border-[#e1cbc2] bg-white px-3 py-2.5"
            />
          </label>

          <button
            className="w-fit rounded-full bg-[#9d6f61] px-5 py-[0.7rem] font-bold text-white transition hover:-translate-y-px"
            type="submit"
          >
            Confirmar agendamento
          </button>

          {message && <p className="m-0 font-bold text-[#765347]">{message}</p>}
        </form>

        <aside className="rounded-[18px] border border-[#ebd9d2] bg-white p-4 shadow-[0_18px_45px_-26px_rgba(68,44,34,0.45)]">
          <h3 className="mb-3 font-['Playfair_Display',serif] text-[1.35rem]">Próximos agendamentos</h3>
          {appointments.length === 0 && <p className="m-0 text-[#6f615b]">Nenhum horário reservado ainda.</p>}
          {appointments.slice(-4).reverse().map((item) => (
            <article
              key={item.id}
              className="mb-2 grid gap-0.5 rounded-xl bg-[#f4ece8] p-3 last:mb-0"
            >
              <strong>{item.name}</strong>
              <span className="text-[#6c5b54]">{item.service}</span>
              <small className="text-[#6c5b54]">
                {item.date} às {item.time}
              </small>
            </article>
          ))}
        </aside>
      </div>
    </section>
  )
}

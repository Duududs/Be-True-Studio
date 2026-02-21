import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { PortfolioPage } from './pages/PortfolioPage'
import { BookingPage } from './pages/BookingPage'
import { ContactPage } from './pages/ContactPage'
import { AboutPage } from './pages/AboutPage'

function normalizePath(pathname) {
  const decoded = decodeURIComponent(pathname || '/')
  if (decoded.length > 1 && decoded.endsWith('/')) return decoded.slice(0, -1)
  return decoded
}

function resolvePage(pathname) {
  const path = normalizePath(pathname)
  if (path === '/sobre') return <AboutPage />
  if (path === '/portfolio') return <PortfolioPage />
  if (path === '/agendamento') return <BookingPage />
  if (path === '/contato') return <ContactPage />
  return <HomePage />
}

function App() {
  const page = resolvePage(window.location.pathname)

  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_12%_8%,_#f2ddd5_0%,_transparent_28%),radial-gradient(circle_at_88%_18%,_#f6e8e2_0%,_transparent_34%),#fcf8f5] font-['Manrope',system-ui,sans-serif] text-[#2f2623]">
      <Header />
      <main className="grid flex-1 items-start gap-14 pb-16 max-sm:gap-11">{page}</main>
      <Footer />
    </div>
  )
}

export default App

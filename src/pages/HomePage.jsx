import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Packages } from '../components/Packages'
import { Feedbacks } from '../components/Feedbacks'

export function HomePage() {
  return (
    <>
      <div className="grid gap-1 sm:gap-2">
        <Hero />
        <Services />
      </div>
      <Packages />
      <Feedbacks />
    </>
  )
}

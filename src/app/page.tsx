// app/page.tsx
import Header from './components/layout/Header'
import Hero from './components/sections/main/Hero1'
import Problem from './components/sections/Problem'
import Service from './components/sections/Service'
import Process from './components/sections/Process'
import Demo from './components/sections/Demo'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
import CTAFinal from './components/sections/main/CTAFinal'
import Footer from './components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Service /> 
        <Process />
        <Demo />
        <Pricing />
        <FAQ />
        <CTAFinal />
        <Footer />
      </main>
    </>
  )
}
// app/page.tsx
import Header from './components/layout/HeaderS'
import Hero from './components/sections/main/Hero1'
import Problem from './components/sections/main/Problem'
import Service from './components/sections/main/Service1'
import Process from './components/sections/main/Process1'
import Demo from './components/sections/main/Demo'
import Pricing from './components/sections/main/Pricing1'
import FAQ from './components/sections/main/FAQ'
import CTAFinal from './components/sections/main/CTAFinal1'
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
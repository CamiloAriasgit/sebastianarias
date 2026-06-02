// app/page.tsx
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import Service from './components/sections/Service'
import Process from './components/sections/Process'
import Demo from './components/sections/Demo'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
// import CTAFinal from './components/sections/CTAFinal'

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
        {/* <CTAFinal /> */}
      </main>
    </>
  )
}
// app/page.tsx
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import Service from './components/sections/Service'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Service /> 
        {/* <Process /> */}
        {/* <Demo /> */}
        {/* <Pricing /> */}
        {/* <FAQ /> */}
        {/* <CTAFinal /> */}
      </main>
    </>
  )
}
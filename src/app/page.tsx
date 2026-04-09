import Hero from "./components/sections/Hero";
import Header from "./components/ui/Header";
import Sistems from "./components/sections/Sistems";
import Solution from "./components/sections/Solution";
import SectionTecnica from "./components/sections/SectionTecnica";
import ProcessSection from "./components/sections/ProcessSection";


export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header/>
        <Hero />
        <Sistems/>
        <Solution/>
        <SectionTecnica/>
        <ProcessSection/>
      </main>
    </div>
  );
}

import Hero from "./components/sections/Hero1";
import Header from "./components/ui/Header";
import Sistems from "./components/sections/Sistems";
import Solution from "./components/sections/Solution";
import SectionTecnica from "./components/sections/SectionTecnica";
import Velocity from "./components/sections/Velocity";
import ProcessSection from "./components/sections/ProcessSection";
import FAQSection from "./components/sections/FAQsection";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/ui/ConversionFooter";


export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header/>
        <Hero />
        <Sistems/>
        <Solution/>
        {/*<SectionTecnica/>
        <Velocity/>
        <ProcessSection/>*/}
        <FAQSection/>
        <FinalCTA/>
        <Footer/>
      </main>
    </div>
  );
}

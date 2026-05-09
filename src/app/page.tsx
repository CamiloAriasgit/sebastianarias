import Hero from "./components/sections/main/Hero1";
import Header from "./components/ui/Header";
import Sistems from "./components/sections/main/Sistems";
import Solution from "./components/sections/main/Solution";
import SectionTecnica from "./components/sections/main/SectionTecnica";
import Velocity from "./components/sections/main/Velocity";
import ProcessSection from "./components/sections/main/ProcessSection";
import FAQSection from "./components/sections/main/FAQsection";
import FinalCTA from "./components/sections/main/FinalCTA";
import Footer from "./components/ui/conversion/ConversionFooter";


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

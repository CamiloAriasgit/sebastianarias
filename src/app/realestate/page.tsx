import Header from "../components/ui/conversion/ConversionHeader";
import Footer from "../components/ui/conversion/ConversionHeader";
import Hero from "../components/sections/realestate/Hero";
import Segunda from "../components/sections/realestate/Segunda";
import Tercera from "../components/sections/realestate/Tercera";
import Medicion from "../components/sections/realestate/Medicion";
import HighlightCarousel from "../components/sections/realestate/HighlightCarousel";
import FAQ from "../components/sections/realestate/FAQ";
import AnalyticsSection from "../components/sections/realestate/AnalyticsSection";
import FinalHighlightsGrid from "../components/sections/realestate/FinalHighlightsGrid";
import Price from "../components/sections/realestate/Price";


export default function Home() {
  {/*return (
    <div className="">
      <main className="">
        <Header/>
        <Hero />
        <Segunda />
      </main>
    </div>
  );*/}

  return (
    <main className="relative w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <Header />
      <div className="snap-start w-full"><Hero /></div>
      <div className="snap-start w-full"><HighlightCarousel /></div>
      <div className="snap-start w-full"><AnalyticsSection /></div>
      <div className="snap-start w-full"><FinalHighlightsGrid /></div>
      <div className="snap-start w-full"><FAQ /></div>
      <div className="snap-start w-full"><Price /></div>

    </main>
  );
}

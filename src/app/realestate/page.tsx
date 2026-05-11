import Header from "../components/ui/conversion/ConversionHeader";
import Footer from "../components/ui/conversion/ConversionHeader";
import Hero from "../components/sections/realestate/Hero";
import Segunda from "../components/sections/realestate/Segunda";


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
            <div className="snap-start w-full"><Segunda /></div>
        </main>
    );
}

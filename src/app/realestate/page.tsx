import Header from "../components/ui/conversion/ConversionHeader";
import Footer from "../components/ui/conversion/ConversionHeader";
import Hero from "../components/sections/realestate/Hero";
import Segunda from "../components/sections/realestate/Segunda";


export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header/>
        <Hero />
        <Segunda/>
      </main>
    </div>
  );
}

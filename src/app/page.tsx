import Hero from "./components/sections/Hero";
import Header from "./components/ui/Header";
import Sistems from "./components/sections/Sistems";
import Solution from "./components/sections/Solution";


export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header/>
        <Hero />
        <Sistems/>
        <Solution/>
      </main>
    </div>
  );
}

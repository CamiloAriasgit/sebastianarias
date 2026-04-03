import Hero from "./components/sections/Hero";
import Header from "./components/ui/Header";
import Sistems from "./components/sections/Sistems";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header/>
        <Hero />
        <Sistems/>
      </main>
    </div>
  );
}

import HeroColab from "../components/sections/colaborar/HeroColab";
import Propuesta from "../components/sections/colaborar/Propuesta";
import Tesis from "../components/sections/colaborar/Tesis";
import Header from "../components/ui/Header";

export default function ColaborarPage() {
    return (
        <main className="bg-neutral-950 min-h-screen">
            <Header mode="dark"/>
            <HeroColab/>
            <Tesis/>
            <Propuesta/>

        </main>
    );
}
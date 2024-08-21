import About from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto w-full">
      <div className="w-full">
        <FloatingNav navItems={[
          { name: 'Inicio', link: '/', icon: <FaHome /> },
          { name: 'Nosotros', link: '/', icon: <FaHome /> },
          { name: 'Servicios', link: '/', icon: <FaHome /> },
          // { name: 'Portfolio', link: '/portfolio', icon: <FaHome /> },
          { name: 'Contáctanos', link: '/', icon: <FaHome /> }
        ]} />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
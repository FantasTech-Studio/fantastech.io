import About from "@/components/About";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto w-full">
      <div className="w-full">
        <FloatingNav navItems={[
          { name: 'Home', link: '/', icon: <FaHome /> }
        ]} />
        <Hero />
        <About />
      </div>
    </main>
  );
}
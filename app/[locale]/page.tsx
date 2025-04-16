import About from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Navbar } from "@/components/ui/Navbar";

interface Props {
  params: {
    locale: string;
  };
}

export default function Home({ params: { locale } }: Props) {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto w-full">
      <div className="w-full">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    { locale: 'it' },
    { locale: 'de' },
  ];
}
import type { Metadata } from "next";
import About from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Navbar } from "@/components/ui/Navbar";

const locales = ['en', 'es', 'it', 'de'] as const;
const base = 'https://fantastech.io';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    metadataBase: new URL(base),
    title: messages.hero.title,
    description: messages.hero.subtitle,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `/${l}`]),
        ['x-default', '/en'],
      ]),
    },
  };
}

export default function Home() {
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
  return locales.map((locale) => ({ locale }));
}
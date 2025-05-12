'use client';
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from '@/context/LanguageContext';
import { PlayfulHeroSection } from "@/components/ui/taas/PlayfulHeroSection";
import { FeaturesSectionDemo } from "@/components/ui/taas/WhyUs";
import { GlowingEffectDemo } from "@/components/ui/taas/Services";

export default function Taas() {
  const { t, isLoading } = useLanguage();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto w-full dark:bg-black-100">
      <div className="w-full">
        <Navbar />
        <PlayfulHeroSection />
        <FeaturesSectionDemo />
        <GlowingEffectDemo />
        <Footer />
      </div>
    </main>
  );
}
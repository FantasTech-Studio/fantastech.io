'use client';
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from '@/context/LanguageContext';
import { PlayfulHeroSection } from "@/components/ui/taas/PlayfulHeroSection";
import { FeaturesSectionDemo } from "@/components/ui/taas/WhyUs";
import { GlowingEffectDemo } from "@/components/ui/taas/Services";
import { TimelineDemo } from "@/components/ui/taas/OurProcess";
import { StatsWithGridBackground } from "@/components/ui/taas/BenefitsLA";
import { CTAWithBackgroundNoise } from "@/components/ui/taas/Contact";
import { useEffect, useState } from 'react';

export default function Taas() {
  const { t, isLoading } = useLanguage();
  const [isClientReady, setIsClientReady] = useState(false);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  if (isLoading || !isClientReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto w-full dark:bg-black-100">
      <div className="w-full">
        <Navbar />
        <PlayfulHeroSection />
        <FeaturesSectionDemo />
        <GlowingEffectDemo />
        <TimelineDemo />
        <StatsWithGridBackground />
        <CTAWithBackgroundNoise />
        <Footer />
      </div>
    </main>
  );
}
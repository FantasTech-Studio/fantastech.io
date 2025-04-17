'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const languages = [
  { code: 'en', name: '🇺🇸', label: 'English' },
  { code: 'es', name: '🇪🇸', label: 'Español' },
  { code: 'it', name: '🇮🇹', label: 'Italiano' },
  { code: 'de', name: '🇩🇪', label: 'Deutsch' }
];

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  isLoading: boolean;
};

const defaultContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
  isLoading: true
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split('/')[1] || 'en';
  const [language, setLanguage] = useState(currentLocale);
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setIsLoading(true);
        // Precarga las traducciones
        const module = await import(`../messages/${language}.json`);
        setTranslations(module.default || {});
      } catch (error) {
        console.error('Failed to load translations:', error);
        setTranslations({});
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  const handleSetLanguage = (newLang: string) => {
    setLanguage(newLang);
    const segments = pathname.split('/');
    if (segments[1] && languages.some(lang => lang.code === segments[1])) {
      segments[1] = newLang;
    } else {
      segments.splice(1, 0, newLang);
    }
    const newPathname = segments.join('/');
    router.push(newPathname);
  };

  const t = (key: string): string => {
    try {
      const value = key.split('.').reduce((obj, k) => obj?.[k], translations);
      return typeof value === 'string' ? value : key;
    } catch (error) {
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleSetLanguage, 
      t, 
      isLoading 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
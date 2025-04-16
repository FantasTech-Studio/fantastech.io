'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
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
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLang}`);
    router.push(newPathname);
  };

  const t = (key: string) => {
    if (isLoading) return key;
    try {
      const value = key.split('.').reduce((obj, k) => obj?.[k], translations);
      return value || key;
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
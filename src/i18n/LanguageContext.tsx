'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import ta from './ta.json';
import en from './en.json';

type Language = 'ta' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, any> = {
  ta,
  en,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ta');
  const [isClient, setIsClient] = useState(false);

  // Initialize on client side
  useEffect(() => {
    setIsClient(true);

    // Try to get language from localStorage
    const stored = localStorage.getItem('language') as Language | null;
    if (stored && (stored === 'ta' || stored === 'en')) {
      setLanguageState(stored);
    } else {
      // Default to Tamil as the primary language
      setLanguageState('ta');
      localStorage.setItem('language', 'ta');
    }
  }, []);

  const toggleLanguage = () => {
    setLanguageState((prev) => {
      const newLang = prev === 'ta' ? 'en' : 'ta';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Ensure we have proper values before rendering (prevents hydration mismatch)
  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return default values for server-side rendering / static generation
    return {
      language: 'ta' as Language,
      toggleLanguage: () => {},
      setLanguage: (_lang: Language) => {},
    };
  }
  return context;
}

export function getTranslations(lang: Language = 'ta') {
  return translations[lang];
}

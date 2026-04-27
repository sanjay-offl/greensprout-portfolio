import { useLanguageContext, getTranslations } from './LanguageContext';

/**
 * Custom hook to use translations in components
 * Usage: const t = useTranslations();
 *        const title = t('hero.title');
 */
export function useTranslations() {
  const { language } = useLanguageContext();
  const translations = getTranslations(language);

  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback || key;
      }
    }

    return typeof value === 'string' ? value : fallback || key;
  };

  return t;
}

export function useLanguage() {
  return useLanguageContext();
}

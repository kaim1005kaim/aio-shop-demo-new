import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { localization, defaultLocale } from '../data/localization';

interface LocalizationContextType {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};

interface LocalizationProviderProps {
  children: ReactNode;
}

// ローカルストレージから言語設定を取得する関数
const getStoredLocale = (): string => {
  if (typeof window === 'undefined') return defaultLocale;
  return localStorage.getItem('locale') || defaultLocale;
};

// 翻訳関数
const translate = (key: string, locale: string): string => {
  return localization[locale]?.[key] || localization[defaultLocale][key] || key;
};

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  const [locale, setLocaleState] = useState(getStoredLocale());

  useEffect(() => {
    // HTMLのlang属性を更新
    document.documentElement.lang = locale;
  }, [locale]);

  const handleSetLocale = (newLocale: string) => {
    if (localization[newLocale]) {
      localStorage.setItem('locale', newLocale);
      setLocaleState(newLocale);
    }
  };

  const t = (key: string) => translate(key, locale);

  return (
    <LocalizationContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { getLocale, setLocale, t as translate } from '../data/localization';

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

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  const [locale, setLocaleState] = useState(getLocale());

  useEffect(() => {
    // HTMLのlang属性を更新
    document.documentElement.lang = locale;
  }, [locale]);

  const handleSetLocale = (newLocale: string) => {
    setLocale(newLocale);
    setLocaleState(newLocale);
  };

  return (
    <LocalizationContext.Provider value={{ locale, setLocale: handleSetLocale, t: translate }}>
      {children}
    </LocalizationContext.Provider>
  );

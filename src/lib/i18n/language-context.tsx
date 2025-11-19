"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');
  const [isClient, setIsClient] = useState(false);

  // Carregar idioma salvo ao montar
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      try {
        const savedLanguage = localStorage.getItem('elitelife_language') as Language;
        if (savedLanguage && translations[savedLanguage]) {
          setLanguageState(savedLanguage);
        }
      } catch (error) {
        console.error('Erro ao carregar idioma:', error);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('elitelife_language', lang);
      } catch (error) {
        console.error('Erro ao salvar idioma:', error);
      }
    }
    // Aqui você pode adicionar chamada ao backend para salvar no banco
    // saveLanguageToDatabase(lang);
  };

  const t = (key: string): string => {
    if (!isClient) return ''; // Durante SSR, retorna string vazia
    try {
      const translation = translations[language]?.[key];
      return translation || key;
    } catch (error) {
      console.error('Erro ao traduzir:', error);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

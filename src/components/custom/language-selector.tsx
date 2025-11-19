"use client";

import { useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/language-context';
import { Language } from '@/lib/i18n/translations';

const languages = [
  { code: 'pt' as Language, name: 'Português', flag: '🇧🇷' },
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(l => l.code === language);

  return (
    <div className="relative">
      {/* Botão do Globo */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all group"
        aria-label="Selecionar idioma"
      >
        <Globe className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
        <span className="hidden sm:block text-sm text-white font-medium">
          {currentLanguage?.flag}
        </span>
      </button>

      {/* Menu Dropdown */}
      {isOpen && (
        <>
          {/* Overlay para fechar ao clicar fora */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 mt-2 w-64 bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-2xl shadow-2xl shadow-[#D4AF37]/20 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Header do Menu */}
            <div className="px-4 py-3 border-b border-[#D4AF37]/20 bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A]">
              <h3 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
                Selecione o idioma
              </h3>
            </div>

            {/* Lista de Idiomas */}
            <div className="py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full px-4 py-3 flex items-center justify-between hover:bg-[#1A1A1A] transition-all group ${
                    language === lang.code ? 'bg-[#D4AF37]/10' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className={`font-semibold ${
                      language === lang.code ? 'text-[#D4AF37]' : 'text-white'
                    }`}>
                      {lang.name}
                    </span>
                  </div>
                  
                  {language === lang.code && (
                    <Check className="w-5 h-5 text-[#D4AF37]" />
                  )}
                </button>
              ))}
            </div>

            {/* Footer com informação */}
            <div className="px-4 py-2 border-t border-[#D4AF37]/20 bg-[#1A1A1A]">
              <p className="text-xs text-[#9A9A9A] text-center">
                Sua preferência será salva automaticamente
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

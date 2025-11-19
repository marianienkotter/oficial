"use client";

import { Globe, Check } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { languages, Language } from "@/lib/i18n/translations";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      {/* Botão do Globo */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full bg-[#0A0A0A] border-2 border-[#D4AF37] text-white hover:bg-[#D4AF37]/10 transition-all hover:scale-110 group"
        aria-label="Selecionar idioma"
        title="Selecionar idioma"
      >
        <Globe className="w-5 h-5 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
        
        {/* Badge com bandeira do idioma atual */}
        <span className="absolute -bottom-1 -right-1 text-xs bg-[#0A0A0A] border border-[#D4AF37] rounded-full w-5 h-5 flex items-center justify-center">
          {currentLanguage?.flag}
        </span>
      </button>

      {/* Dropdown de Idiomas */}
      {isOpen && (
        <>
          {/* Overlay para fechar ao clicar fora */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Menu */}
          <div className="absolute right-0 top-12 w-64 bg-[#0A0A0A] border-2 border-[#D4AF37] rounded-2xl shadow-2xl shadow-[#D4AF37]/20 z-50 overflow-hidden animate-in slide-in-from-top-5 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#D4AF37]/20 to-amber-500/20 p-3 border-b border-[#D4AF37]/30">
              <h3 className="text-white font-bold text-sm flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#D4AF37]" />
                Selecione o Idioma
              </h3>
            </div>

            {/* Lista de Idiomas */}
            <div className="max-h-80 overflow-y-auto custom-scrollbar">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-[#D4AF37]/10 transition-all text-left ${
                    language === lang.code ? 'bg-[#D4AF37]/20' : ''
                  }`}
                >
                  {/* Bandeira */}
                  <span className="text-2xl flex-shrink-0">{lang.flag}</span>
                  
                  {/* Nome do Idioma */}
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold text-sm">
                      {lang.nativeName}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {lang.name}
                    </div>
                  </div>

                  {/* Check se selecionado */}
                  {language === lang.code && (
                    <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="p-2 bg-[#0A0A0A] border-t border-[#D4AF37]/30 text-center">
              <p className="text-xs text-gray-400">
                Tradução instantânea em toda plataforma
              </p>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(212, 175, 55, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #B8941F;
        }
      `}</style>
    </div>
  );
}

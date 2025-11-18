"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const languages = [
  { code: "pt" as const, name: "Português", flag: "🇧🇷" },
  { code: "en" as const, name: "English", flag: "🇺🇸" },
  { code: "es" as const, name: "Español", flag: "🇪🇸" }
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botão do Globo */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all group"
        aria-label="Selecionar idioma"
      >
        <Globe className="w-5 h-5 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:block text-sm font-semibold text-[#D4AF37]">
          {currentLanguage?.flag}
        </span>
      </button>

      {/* Menu Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-2xl shadow-2xl shadow-[#D4AF37]/20 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Header do Menu */}
          <div className="px-4 py-3 border-b border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 to-transparent">
            <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
              Selecione o idioma
            </p>
          </div>

          {/* Lista de Idiomas */}
          <div className="py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 flex items-center justify-between hover:bg-[#D4AF37]/10 transition-all group ${
                  language === lang.code ? "bg-[#D4AF37]/5" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <span
                    className={`font-semibold ${
                      language === lang.code
                        ? "text-[#D4AF37]"
                        : "text-white group-hover:text-[#D4AF37]"
                    }`}
                  >
                    {lang.name}
                  </span>
                </div>
                {language === lang.code && (
                  <Check className="w-5 h-5 text-[#D4AF37]" />
                )}
              </button>
            ))}
          </div>

          {/* Footer do Menu */}
          <div className="px-4 py-2 border-t border-[#D4AF37]/20 bg-[#0D0D0D]">
            <p className="text-[10px] text-gray-500 text-center">
              Mais idiomas em breve
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

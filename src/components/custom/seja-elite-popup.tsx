"use client";

import { useState, useEffect } from "react";
import { X, Crown, Sparkles, Check, Zap, Trophy, Star, Rocket, Shield, ArrowRight } from "lucide-react";

interface SejaElitePopupProps {
  isOpen: boolean;
  onClose: () => void;
  trigger?: "locked-content" | "upgrade-button" | "lock-icon" | "free-plan";
}

export function SejaElitePopup({ isOpen, onClose, trigger }: SejaElitePopupProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const benefits = [
    "Acesso total e imediato",
    "Mais de 100 cursos",
    "+1000 atividades",
    "Lives privadas",
    "IA Tutor ilimitada",
    "Influencer Pro incluso",
    "E-commerce Pro incluso",
    "Certificados",
    "Trilhas exclusivas",
    "Ranking completo",
    "XP extra",
    "Medalha Elite Supreme"
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] rounded-3xl border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/50 animate-scaleIn">
        {/* Glow Effects */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#D4AF37]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all group"
        >
          <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
        </button>

        {/* Content */}
        <div className="relative z-10 p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full mb-6 animate-bounce-slow">
              <Crown className="w-10 h-10 text-black" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 mb-4 animate-shimmer">
              🔥 Seja Elite Hoje
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Você está a um passo de desbloquear todo o poder da Elite Life:
              <br />
              <span className="text-[#D4AF37] font-bold">
                Cursos completos, vídeos premium, IA ilimitada, influencer pro, e-commerce pro, medalhas exclusivas e uma evolução garantida.
              </span>
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 text-center border border-[#D4AF37]/20">
              <Trophy className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-2xl font-black text-white mb-1">100+</div>
              <div className="text-xs text-gray-400">Cursos</div>
            </div>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 text-center border border-[#D4AF37]/20">
              <Zap className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-2xl font-black text-white mb-1">1000+</div>
              <div className="text-xs text-gray-400">Atividades</div>
            </div>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 text-center border border-[#D4AF37]/20">
              <Star className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-2xl font-black text-white mb-1">∞</div>
              <div className="text-xs text-gray-400">IA Tutor</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <a
              href="/checkout?plan=elite"
              className="block w-full py-5 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-[#D4AF37]/60 transition-all transform hover:scale-105 text-center relative overflow-hidden group animate-pulse-glow"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Crown className="w-6 h-6" />
                Assinar Elite – R$ 79,90/mês
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="/checkout?plan=anual-elite"
              className="block w-full py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-green-500/60 transition-all transform hover:scale-105 text-center relative overflow-hidden group animate-pulse-glow"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Rocket className="w-6 h-6" />
                Assinar Anual Elite – R$ 497/ano
                <span className="text-sm bg-white/20 px-2 py-1 rounded-full">(2 meses grátis)</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <button
              onClick={onClose}
              className="w-full py-3 text-gray-400 hover:text-white transition-all font-semibold"
            >
              Fechar
            </button>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 pt-6 border-t border-[#D4AF37]/20">
            <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
              <span>Pagamento 100% seguro • Garantia de 7 dias • Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

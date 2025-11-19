"use client";

import { X, Crown, Check, Sparkles } from "lucide-react";
import { PremiumButton } from "./premium-button";
import { useRouter } from "next/navigation";

interface SejaEliteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SejaEliteModal({ isOpen, onClose }: SejaEliteModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleSubscribe = (planId: string) => {
    router.push(`/checkout?plan=${planId}`);
    onClose();
  };

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
    "Medalha Elite Supreme",
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] rounded-3xl border-2 border-[#D4AF37] shadow-[0_0_60px_rgba(212,175,55,0.4)] overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="relative p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full mb-4 animate-pulse-gold">
              <Crown className="w-10 h-10 text-[#0B0B0B]" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 mb-4">
              🔥 Seja Elite Hoje
            </h2>
            
            <p className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
              Você está a um passo de desbloquear todo o poder da Elite Life:
              Cursos completos, vídeos premium, IA ilimitada, influencer pro, e-commerce pro, medalhas exclusivas e uma evolução garantida.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-[#1A1A1A]/50 backdrop-blur-sm border border-[#D4AF37]/20 rounded-lg p-3 hover:border-[#D4AF37]/50 transition-all group"
              >
                <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Check className="w-3 h-3 text-[#0B0B0B]" />
                </div>
                <span className="text-white text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <PremiumButton
              variant="elite"
              size="lg"
              onClick={() => handleSubscribe('elite')}
              className="w-full"
            >
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span>Assinar Elite – R$ 79,90/mês</span>
              </div>
            </PremiumButton>

            <PremiumButton
              variant="default"
              size="lg"
              onClick={() => handleSubscribe('elite_anual')}
              className="w-full"
            >
              <div className="flex flex-col items-center">
                <span>Assinar Anual Elite – R$ 497/ano</span>
                <span className="text-xs opacity-90">(2 meses grátis)</span>
              </div>
            </PremiumButton>

            <button
              onClick={onClose}
              className="w-full py-2 text-white/60 hover:text-white text-sm transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

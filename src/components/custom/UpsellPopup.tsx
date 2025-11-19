"use client";

import { useState, useEffect } from "react";
import { X, Crown, Check, Zap, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

interface UpsellPopupProps {
  currentPlan: string;
  onClose: () => void;
}

export default function UpsellPopup({ currentPlan, onClose }: UpsellPopupProps) {
  const router = useRouter();
  const [countdown, setCountdown] = useState(24 * 60 * 60); // 24 horas em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleUpgrade = () => {
    router.push("/checkout?plan=elite&discount=10");
  };

  const handleContinue = () => {
    router.push("/");
  };

  // Só mostrar para planos menores que Elite
  if (!["pro", "pro-plus"].includes(currentPlan.toLowerCase())) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop dourado */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-black/90 to-black/95 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Pop-up */}
      <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-2 border-[#D4AF37] rounded-3xl p-8 shadow-2xl shadow-[#D4AF37]/50 max-w-3xl w-full animate-scale-in overflow-hidden">
        {/* Efeitos de brilho */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#D4AF37]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl animate-pulse" />

        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Conteúdo */}
        <div className="relative z-10">
          {/* Ícone de coroa */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/40 blur-2xl rounded-full animate-pulse" />
              <div className="relative bg-gradient-to-br from-[#D4AF37] to-amber-600 p-5 rounded-full">
                <Crown className="w-16 h-16 text-black" />
              </div>
            </div>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-3">
            🎉 Sua assinatura foi ativada!
          </h2>
          <p className="text-center text-xl text-[#D4AF37] font-bold mb-6">
            Agora você pode ir ainda mais longe.
          </p>

          {/* Texto */}
          <p className="text-center text-gray-300 text-lg mb-6">
            Você liberou seu novo plano, mas que tal desbloquear <span className="text-[#D4AF37] font-bold">TUDO</span> dentro da Elite Life?
          </p>

          {/* Oferta especial */}
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-amber-600/20 border-2 border-[#D4AF37] rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-[#D4AF37] animate-pulse" />
              <p className="text-2xl font-black text-white">
                Upgrade exclusivo para o Plano Elite com <span className="text-[#D4AF37]">10% OFF</span>
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-amber-400">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-semibold">Disponível apenas nas próximas {formatTime(countdown)}</span>
            </div>
          </div>

          {/* Benefícios do Elite */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4 text-center">💰 Benefícios do Upgrade Elite</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Influencer Pro incluso",
                "E-commerce Pro incluso",
                "Trilhas Elite",
                "Lives privadas",
                "Medalha Elite Supreme",
                "XP em dobro",
                "Ranking Elite",
                "Tutoria completa da IA"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-[#2A2A2A]/50 rounded-xl p-3 border border-[#D4AF37]/20">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preço com desconto */}
          <div className="bg-[#2A2A2A]/50 rounded-2xl p-6 mb-6 border border-[#D4AF37]/30">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-gray-400 text-sm line-through">R$ 89,90/mês</p>
                <p className="text-4xl font-black text-[#D4AF37]">R$ 80,91/mês</p>
                <p className="text-green-400 text-sm font-bold mt-1">Economize R$ 8,99 por mês!</p>
              </div>
            </div>
          </div>

          {/* Botões */}
          <div className="space-y-3">
            <button
              onClick={handleUpgrade}
              className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105 flex items-center justify-center gap-3 animate-pulse-glow"
            >
              <Crown className="w-6 h-6" />
              Fazer Upgrade com 10% OFF
            </button>

            <button
              onClick={handleContinue}
              className="w-full py-3 text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Continuar para Minha Área
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

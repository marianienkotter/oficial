"use client";

import { Lock, TrendingUp, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface CrossSellBannerProps {
  userPlan: string;
  contentType?: string;
}

export default function CrossSellBanner({ userPlan, contentType = "conteúdo" }: CrossSellBannerProps) {
  const router = useRouter();

  // Só mostrar para usuários Free e Pro
  if (!["free", "pro"].includes(userPlan.toLowerCase())) {
    return null;
  }

  const handleViewPlans = () => {
    router.push("/plans");
  };

  const handleRecommendedPlan = () => {
    router.push("/checkout?plan=pro-plus");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-slide-in-right">
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-2 border-[#D4AF37] rounded-2xl p-6 shadow-2xl shadow-[#D4AF37]/50 backdrop-blur-xl">
        {/* Efeito de brilho */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#D4AF37]/30 rounded-full blur-2xl" />

        {/* Conteúdo */}
        <div className="relative z-10">
          {/* Ícone */}
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-[#D4AF37] to-amber-600 p-3 rounded-xl">
              <Lock className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">🔓 Desbloqueie este conteúdo!</h3>
            </div>
          </div>

          {/* Texto */}
          <p className="text-gray-300 text-sm mb-6">
            Assine o plano ideal para acessar tudo e acelerar sua evolução.
          </p>

          {/* Botões */}
          <div className="space-y-3">
            <button
              onClick={handleRecommendedPlan}
              className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <TrendingUp className="w-5 h-5" />
              Plano Recomendado: Pro Plus – R$ 79,90
            </button>

            <button
              onClick={handleViewPlans}
              className="w-full py-3 bg-[#2A2A2A] text-white rounded-xl font-semibold text-sm hover:bg-[#3A3A3A] transition-all flex items-center justify-center gap-2 border border-[#D4AF37]/30"
            >
              Ver Todos os Planos
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Badge do plano atual */}
          <div className="mt-4 pt-4 border-t border-[#D4AF37]/20">
            <p className="text-xs text-gray-500 text-center">
              Seu plano atual: <span className="text-[#D4AF37] font-bold">{userPlan === "free" ? "Gratuito" : "Pro"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

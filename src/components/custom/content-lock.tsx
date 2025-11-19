"use client";

import { Lock, Crown, AlertCircle } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ContentLockProps {
  isLocked: boolean;
  children: ReactNode;
  title?: string;
  description?: string;
  requiredPlan?: string;
}

export default function ContentLock({
  isLocked,
  children,
  title = "Conteúdo Premium",
  description = "Ainda não disponível no seu plano.",
  requiredPlan = "Pro Plus"
}: ContentLockProps) {
  if (!isLocked) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Conteúdo desaturado/bloqueado */}
      <div className="opacity-30 grayscale pointer-events-none select-none blur-sm">
        {children}
      </div>

      {/* Overlay de bloqueio */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md rounded-2xl">
        <div className="text-center p-6 max-w-md">
          {/* Ícone de cadeado animado */}
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-[#D4AF37]/30 blur-2xl rounded-full animate-pulse" />
            <div className="relative bg-gradient-to-br from-[#D4AF37] to-amber-500 p-6 rounded-full shadow-2xl shadow-[#D4AF37]/50">
              <Lock className="w-12 h-12 text-black animate-pulse" />
            </div>
          </div>

          {/* Mensagem de aviso */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              <h3 className="text-xl font-black text-white">Ainda não disponível</h3>
            </div>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>

          {/* Badge do plano necessário */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full mb-6">
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm font-bold text-[#D4AF37]">Plano {requiredPlan} necessário</span>
          </div>

          {/* Botão de upgrade */}
          <Link
            href="/plans"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all hover:scale-105"
          >
            <Crown className="w-5 h-5" />
            Ver Planos
          </Link>

          <p className="text-xs text-gray-500 mt-4">
            Para desbloquear, assine um plano compatível
          </p>
        </div>
      </div>
    </div>
  );
}

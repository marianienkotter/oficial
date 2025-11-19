"use client";

import { Lock } from 'lucide-react';
import Link from 'next/link';

interface LockedContentProps {
  title: string;
  description?: string;
  requiredPlan: string;
  onUpgradeClick?: () => void;
}

export function LockedContent({ title, description, requiredPlan, onUpgradeClick }: LockedContentProps) {
  return (
    <div className="relative">
      {/* Overlay escurecido */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-10 rounded-2xl flex items-center justify-center">
        <div className="text-center p-8">
          {/* Cadeado dourado */}
          <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#D4AF37]/50 animate-pulse">
            <Lock className="w-10 h-10 text-black" />
          </div>

          {/* Título borrado */}
          <h3 className="text-2xl font-bold text-white mb-3 blur-sm select-none">
            {title}
          </h3>

          {/* Mensagem */}
          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/30 rounded-xl p-6 mb-6">
            <p className="text-white font-semibold text-lg mb-2">
              Ainda não disponível no seu plano
            </p>
            <p className="text-[#9A9A9A] text-sm mb-4">
              {description || "Para desbloquear este conteúdo, assine um plano compatível."}
            </p>
            <p className="text-[#D4AF37] font-bold">
              Plano necessário: {requiredPlan.toUpperCase()}
            </p>
          </div>

          {/* Botão */}
          <Link href="/plans">
            <button 
              onClick={onUpgradeClick}
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold rounded-xl hover:scale-105 transition-all shadow-lg hover:shadow-[#D4AF37]/50"
            >
              🔘 Ver Planos
            </button>
          </Link>
        </div>
      </div>

      {/* Conteúdo borrado de fundo */}
      <div className="opacity-30 blur-md pointer-events-none">
        {/* Placeholder content */}
        <div className="bg-[#2A2A2A] rounded-2xl p-8 border border-[#D4AF37]/20">
          <div className="h-40 bg-[#1A1A1A] rounded-xl mb-4"></div>
          <div className="h-6 bg-[#1A1A1A] rounded mb-2"></div>
          <div className="h-6 bg-[#1A1A1A] rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
}

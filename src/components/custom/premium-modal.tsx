"use client";

import { X, Lock, Crown, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: string;
  requiredPlan?: string;
}

export function PremiumModal({ isOpen, onClose, feature, requiredPlan = "Pro" }: PremiumModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-8 max-w-md w-full border border-[#D4AF37]/20 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#9A9A9A] hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center">
            <Crown className="w-10 h-10 text-[#0B0B0B]" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-3">
            Recurso Premium
          </h2>
          <p className="text-[#9A9A9A] mb-4">
            <span className="text-[#D4AF37] font-semibold">{feature}</span> é exclusivo para assinantes Elite Life Premium.
          </p>
          <p className="text-[#9A9A9A] text-sm">
            Assine o plano <span className="text-[#D4AF37] font-bold">{requiredPlan}</span> ou superior para desbloquear este recurso.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-[#2A2A2A] rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-white font-semibold">Ao assinar você ganha:</span>
          </div>
          <ul className="space-y-2 text-sm text-[#9A9A9A]">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
              Acesso a +100 cursos completos
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
              IA de suporte e automações
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
              Certificados profissionais
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
              Comunidade exclusiva
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Link
            href="/plans"
            className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all flex items-center justify-center gap-2"
          >
            Ver Planos
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button
            onClick={onClose}
            className="w-full py-3 bg-[#2A2A2A] text-white rounded-xl font-medium hover:bg-[#3A3A3A] transition-all"
          >
            Continuar com Plano Gratuito
          </button>
        </div>
      </div>
    </div>
  );
}

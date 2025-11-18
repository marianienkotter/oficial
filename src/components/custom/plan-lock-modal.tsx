"use client";

import { X, Crown, Zap, Sparkles } from "lucide-react";
import Link from "next/link";

interface PlanLockModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentType?: string;
}

export function PlanLockModal({ isOpen, onClose, contentType = "premium" }: PlanLockModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-3xl border-2 border-[#D4AF37]/50 max-w-md w-full p-6 sm:p-8 shadow-2xl shadow-[#D4AF37]/20 animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-[#D4AF37]/30 blur-2xl rounded-full animate-pulse" />
            <div className="relative w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-[#D4AF37]/50">
              <Crown className="w-10 h-10 text-black" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-black text-center text-white mb-3">
          Conteúdo Premium
        </h2>

        {/* Description */}
        <p className="text-center text-gray-300 mb-6 text-sm sm:text-base">
          Este conteúdo está disponível apenas para membros com plano{" "}
          <span className="text-[#D4AF37] font-bold">Premium</span> ou{" "}
          <span className="text-[#D4AF37] font-bold">Elite</span>.
        </p>

        {/* Benefits */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <span className="text-sm">Acesso ilimitado a todos os cursos</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <span className="text-sm">Certificados reconhecidos</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Crown className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <span className="text-sm">Suporte prioritário e comunidade exclusiva</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Link
            href="/plans"
            className="block w-full py-4 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-xl font-bold text-center hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105"
          >
            Ver Planos Premium
          </Link>
          <button
            onClick={onClose}
            className="block w-full py-4 bg-white/5 border border-[#D4AF37]/30 text-white rounded-xl font-semibold text-center hover:bg-white/10 transition-all"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

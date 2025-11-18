"use client";

import { useRouter } from "next/navigation";
import { X, Crown, Check, Sparkles } from "lucide-react";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentType?: string;
}

export function SubscriptionModal({ isOpen, onClose, contentType = "conteúdo" }: SubscriptionModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleViewPlans = () => {
    onClose();
    router.push("/plans");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl border border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/20 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Gradient */}
        <div className="relative bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 p-8 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
          
          <div className="relative">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <Crown className="w-10 h-10 text-white drop-shadow-lg" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 drop-shadow-lg">
              Conteúdo Exclusivo
            </h2>
            <p className="text-white/90 font-medium drop-shadow">
              Para Assinantes Elite Life
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <p className="text-white text-lg mb-2">
              Este {contentType} é exclusivo para assinantes da Elite Life.
            </p>
            <p className="text-[#9A9A9A]">
              Escolha um plano para desbloquear todo o conteúdo e transformar sua vida!
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3 p-3 bg-[#2A2A2A] rounded-lg border border-[#D4AF37]/20">
              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-[#0B0B0B]" />
              </div>
              <div>
                <p className="text-white font-semibold">Acesso Ilimitado</p>
                <p className="text-sm text-[#9A9A9A]">Todos os cursos, vídeos e atividades</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#2A2A2A] rounded-lg border border-[#D4AF37]/20">
              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-[#0B0B0B]" />
              </div>
              <div>
                <p className="text-white font-semibold">Certificados Oficiais</p>
                <p className="text-sm text-[#9A9A9A]">Reconhecidos no mercado</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#2A2A2A] rounded-lg border border-[#D4AF37]/20">
              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-[#0B0B0B]" />
              </div>
              <div>
                <p className="text-white font-semibold">Suporte Exclusivo</p>
                <p className="text-sm text-[#9A9A9A]">Mentoria e comunidade VIP</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#2A2A2A] rounded-lg border border-[#D4AF37]/20">
              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#0B0B0B]" />
              </div>
              <div>
                <p className="text-white font-semibold">Conteúdo Novo Toda Semana</p>
                <p className="text-sm text-[#9A9A9A]">Sempre atualizado com as melhores estratégias</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleViewPlans}
              className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all flex items-center justify-center gap-2"
            >
              <Crown className="w-5 h-5" />
              Ver Planos e Assinar
            </button>

            <button
              onClick={onClose}
              className="w-full py-3 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-xl font-semibold transition-all"
            >
              Voltar
            </button>
          </div>

          <p className="text-center text-xs text-[#9A9A9A] mt-6">
            Cancele quando quiser • Sem compromisso • Garantia de 7 dias
          </p>
        </div>
      </div>
    </div>
  );
}

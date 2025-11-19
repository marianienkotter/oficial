"use client";

import { useState, useEffect } from "react";
import { X, AlertTriangle, Check, Lock } from "lucide-react";

interface ExitIntentPopupProps {
  onClose: () => void;
  onContinue: () => void;
}

export default function ExitIntentPopup({ onClose, onContinue }: ExitIntentPopupProps) {
  const [showCount, setShowCount] = useState(0);
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    const count = parseInt(localStorage.getItem("exitPopupCount") || "0");
    setShowCount(count);
    setIsReduced(count >= 2);
    
    // Incrementar contador
    localStorage.setItem("exitPopupCount", (count + 1).toString());
  }, []);

  if (isReduced) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-end justify-center p-4 pointer-events-none">
        <div className="pointer-events-auto bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-2 border-[#D4AF37] rounded-2xl p-4 shadow-2xl shadow-[#D4AF37]/50 backdrop-blur-xl max-w-md w-full animate-slide-up">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-white font-bold text-sm">Não perca sua evolução!</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={onContinue}
            className="w-full py-2 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
          >
            Finalizar Assinatura
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop com blur */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Pop-up */}
      <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-2 border-[#D4AF37] rounded-3xl p-8 shadow-2xl shadow-[#D4AF37]/50 max-w-2xl w-full animate-scale-in">
        {/* Efeito de brilho */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-3xl" />

        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Conteúdo */}
        <div className="relative z-10">
          {/* Ícone */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/30 blur-xl rounded-full animate-pulse" />
              <div className="relative bg-gradient-to-br from-[#D4AF37] to-amber-600 p-4 rounded-full">
                <AlertTriangle className="w-12 h-12 text-black" />
              </div>
            </div>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-4">
            ⚠️ Quase lá! Não perca sua evolução.
          </h2>

          {/* Texto */}
          <p className="text-center text-gray-300 text-lg mb-8">
            Você estava a um passo de desbloquear todo o conteúdo da Elite Life.
            <br />
            <span className="text-[#D4AF37] font-bold">Retorne ao checkout para concluir sua assinatura!</span>
          </p>

          {/* Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {[
              "Conteúdos ilimitados",
              "+100 cursos",
              "+1000 atividades",
              "Certificados",
              "IA Tutor ilimitada",
              "Vantagens exclusivas"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-[#2A2A2A]/50 rounded-xl p-3 border border-[#D4AF37]/20">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Botões */}
          <div className="space-y-3">
            <button
              onClick={onContinue}
              className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105 flex items-center justify-center gap-3 animate-pulse-glow"
            >
              <Lock className="w-6 h-6" />
              Finalizar Assinatura Agora
            </button>

            <button
              onClick={onClose}
              className="w-full py-3 text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Continuar Navegando
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

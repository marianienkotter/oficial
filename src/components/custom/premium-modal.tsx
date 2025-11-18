"use client";

import { X, Crown, Check, Sparkles, Zap } from 'lucide-react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (planId: number) => void;
  feature?: string;
}

/**
 * Modal persuasivo para upgrade de plano
 * Aparece quando usuário tenta acessar conteúdo bloqueado
 */
export function PremiumModal({ isOpen, onClose, onSelectPlan, feature = "este conteúdo" }: PremiumModalProps) {
  if (!isOpen) return null;

  const plans = [
    {
      id: 2,
      name: "PRO",
      price: "R$ 49,90",
      period: "/mês",
      color: "from-purple-500 to-indigo-600",
      features: [
        "+ de 100 cursos desbloqueados",
        "1000 atividades e questionários",
        "Acesso à IA de suporte",
        "Certificado Elite Life"
      ]
    },
    {
      id: 3,
      name: "PRO PLUS",
      price: "R$ 79,90",
      period: "/mês",
      badge: "Mais Popular",
      color: "from-pink-500 to-purple-600",
      features: [
        "Tudo do PRO +",
        "Comunidade exclusiva",
        "Sistema de medalhas",
        "Desafios de 30 dias"
      ]
    },
    {
      id: 4,
      name: "ELITE",
      price: "R$ 89,90",
      period: "/mês",
      badge: "Acesso Total",
      color: "from-[#D4AF37] to-amber-600",
      features: [
        "Tudo do PRO PLUS +",
        "IA Premium",
        "Chat social",
        "Dashboards avançados"
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[200] p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] rounded-3xl p-6 sm:p-8 max-w-5xl w-full border-2 border-[#D4AF37]/30 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center">
                <Crown className="w-7 h-7 text-[#0B0B0B]" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Desbloqueie {feature}</h2>
                <p className="text-sm text-[#9A9A9A]">Escolha o plano perfeito para você</p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-[#D4AF37] transition-colors"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Benefícios */}
        <div className="bg-[#2A2A2A] rounded-2xl p-6 mb-8 border border-[#D4AF37]/20">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="text-white font-bold text-lg">O que você ganha ao assinar:</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-[#9A9A9A] text-sm">Acesso ilimitado a todos os vídeos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-[#9A9A9A] text-sm">+ de 100 cursos completos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-[#9A9A9A] text-sm">1000+ atividades práticas</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-[#9A9A9A] text-sm">Certificados reconhecidos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-[#9A9A9A] text-sm">Suporte IA 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-[#9A9A9A] text-sm">Comunidade exclusiva</span>
            </div>
          </div>
        </div>

        {/* Planos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:scale-105 transition-all duration-300 relative"
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] to-amber-600 px-3 py-1 rounded-full text-xs font-bold text-[#0B0B0B]">
                  {plan.badge}
                </div>
              )}

              {/* Nome e Preço */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-[#D4AF37]">{plan.price}</span>
                  <span className="text-[#9A9A9A] text-sm">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[#9A9A9A]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => onSelectPlan(plan.id)}
                className={`w-full py-3 rounded-xl font-bold transition-all duration-300 bg-gradient-to-r ${plan.color} text-white hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2`}
              >
                <Zap className="w-5 h-5" />
                Assinar Agora
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-[#9A9A9A] text-sm">
            🔒 Pagamento 100% seguro via Stripe • Cancele quando quiser
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, Lock, Crown, ArrowLeft } from "lucide-react";
import { PLANS } from "@/lib/plans";
import { PremiumButton } from "@/components/custom/premium-button";
import { useAuth } from "@/lib/auth-context";

export default function PlanosPage() {
  const { profile } = useAuth();
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const currentPlan = profile?.plano_atual || 'free';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Dashboard
          </Link>
          
          <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 mb-4">
            Escolha Seu Plano
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Desbloqueie todo o potencial da Elite Life e acelere sua evolução
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PLANS.map((plan) => {
            const isCurrentPlan = currentPlan === plan.id;
            const isHighlighted = plan.highlighted || plan.popular || plan.bestValue;

            return (
              <div
                key={plan.id}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`
                  relative bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border-2 transition-all duration-300
                  ${isHighlighted 
                    ? 'border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)] scale-105' 
                    : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                  }
                  ${hoveredPlan === plan.id ? 'scale-105' : ''}
                `}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r ${plan.badgeColor} rounded-full text-white text-xs font-bold shadow-lg`}>
                    {plan.badge}
                  </div>
                )}

                {/* Current Plan Badge */}
                {isCurrentPlan && (
                  <div className="absolute -top-3 right-4 px-3 py-1 bg-green-500 rounded-full text-white text-xs font-bold">
                    Plano Atual
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6 pt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-black text-[#D4AF37] mb-2">
                    {plan.priceLabel}
                  </div>
                </div>

                {/* Features - Compact */}
                <div className="space-y-2 mb-6 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-[#D4AF37]/20 scrollbar-track-transparent">
                  {plan.features.slice(0, 8).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      {feature.locked ? (
                        <Lock className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      ) : feature.included ? (
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-white" : "text-white/40"}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {isCurrentPlan ? (
                  <button
                    disabled
                    className="w-full py-3 bg-green-500/20 text-green-400 rounded-xl font-bold border border-green-500/30 cursor-not-allowed"
                  >
                    Plano Ativo
                  </button>
                ) : plan.id === 'influencer_pro' ? (
                  <button
                    disabled
                    className="w-full py-3 bg-gray-600/20 text-gray-400 rounded-xl font-bold border border-gray-500/30 cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    Desbloqueado com 5 vendas
                  </button>
                ) : (
                  <Link href={`/checkout?plan=${plan.id}`}>
                    <PremiumButton
                      variant={isHighlighted ? "elite" : "default"}
                      size="md"
                      className="w-full"
                    >
                      Assinar Agora
                    </PremiumButton>
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl border-2 border-[#D4AF37]/20 overflow-hidden">
          <div className="p-6 border-b border-[#D4AF37]/20">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Crown className="w-8 h-8 text-[#D4AF37]" />
              Comparação Completa dos Planos
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#D4AF37]/20">
                  <th className="text-left p-4 text-white font-bold sticky left-0 bg-[#1A1A1A] z-10">
                    Recursos
                  </th>
                  {PLANS.map((plan) => (
                    <th key={plan.id} className="p-4 text-center min-w-[120px]">
                      <div className="text-white font-bold mb-1">{plan.name}</div>
                      <div className="text-[#D4AF37] text-sm">{plan.priceLabel}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PLANS[0].features.map((_, featureIndex) => (
                  <tr key={featureIndex} className="border-b border-[#D4AF37]/10 hover:bg-[#2A2A2A]/50 transition-colors">
                    <td className="p-4 text-white sticky left-0 bg-[#1A1A1A] z-10">
                      {PLANS[0].features[featureIndex].name}
                    </td>
                    {PLANS.map((plan) => {
                      const feature = plan.features[featureIndex];
                      return (
                        <td key={plan.id} className="p-4 text-center">
                          {feature.locked ? (
                            <Lock className="w-5 h-5 text-orange-500 mx-auto" />
                          ) : feature.included ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Lock, Crown, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { PLANS, type PlanId } from "@/lib/types/subscription";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: string;
  requiredPlan?: PlanId;
}

export function UpgradeModal({ isOpen, onClose, feature, requiredPlan }: UpgradeModalProps) {
  const plan = requiredPlan ? PLANS[requiredPlan] : null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] border-2 border-[#D4AF37]/30 max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-500 flex items-center justify-center">
              <Lock className="w-8 h-8 text-black" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
            Recurso Premium
          </DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            {feature || "Este recurso"} faz parte dos planos premium da Elite Life
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {plan && (
            <div className={`bg-gradient-to-br from-black/50 to-black/30 rounded-2xl p-6 border-2 border-[#D4AF37]/30`}>
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-6 h-6 text-[#D4AF37]" />
                <div>
                  <h3 className="text-white font-bold">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                  R$ {plan.price}
                </span>
                <span className="text-gray-400">/{plan.interval === "monthly" ? "mês" : "ano"}</span>
              </div>
              <div className="space-y-2">
                {plan.features.slice(0, 4).map((feat, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                    <Sparkles className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-4">
            <p className="text-green-400 text-sm text-center font-semibold">
              ✨ Garantia de 7 dias - Teste sem riscos
            </p>
          </div>

          <div className="space-y-3">
            <Link
              href="/plans"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-full font-black text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105"
            >
              <span>Ver Planos</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={onClose}
              className="w-full px-6 py-3 text-gray-400 hover:text-white transition-colors font-semibold"
            >
              Voltar
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

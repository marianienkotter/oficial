"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CheckCircle, Sparkles, ArrowRight, Crown, Gift } from "lucide-react";
import Link from "next/link";
import { PLANS, type PlanId } from "@/lib/types/subscription";
import confetti from "canvas-confetti";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planId = searchParams.get("plan") as PlanId;
  const plan = planId ? PLANS[planId] : null;
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Efeito de confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#D4AF37", "#FFD700", "#FFA500"]
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#D4AF37", "#FFD700", "#FFA500"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // Countdown para redirecionamento
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          router.push("/dashboard");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [router]);

  if (!plan) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Erro ao processar pagamento</h1>
          <Link href="/plans" className="text-[#D4AF37] hover:underline">
            Voltar para planos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Card Principal */}
        <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-3xl p-8 md:p-12 border-2 border-[#D4AF37]/30 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-amber-500/10" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <div className="relative z-10 text-center">
            {/* Ícone de Sucesso */}
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 mb-6 animate-bounce">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 mb-4">
              Assinatura Ativada!
            </h1>

            {/* Subtítulo */}
            <p className="text-xl text-gray-300 mb-8">
              Bem-vindo ao plano <span className="text-[#D4AF37] font-bold">{plan.name}</span>
            </p>

            {/* Mensagem de Boas-vindas */}
            <div className="bg-black/50 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4 text-left">
                <Crown className="w-8 h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Parabéns! Você agora faz parte da Elite Life
                  </h3>
                  <p className="text-gray-400">
                    Todos os recursos do seu plano foram desbloqueados automaticamente. 
                    Comece agora mesmo sua jornada de transformação!
                  </p>
                </div>
              </div>
            </div>

            {/* Recursos Desbloqueados */}
            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-amber-500/10 border border-[#D4AF37]/30 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-2 justify-center mb-4">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-white font-bold">Recursos Desbloqueados</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                {plan.features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bônus */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-2 justify-center mb-3">
                <Gift className="w-5 h-5 text-purple-400" />
                <h3 className="text-white font-bold">Bônus de Boas-vindas</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Você ganhou <span className="text-purple-400 font-bold">500 XP</span> de bônus 
                e uma <span className="text-purple-400 font-bold">medalha exclusiva</span> de novo membro!
              </p>
            </div>

            {/* Botão de Ação */}
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-full font-black text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105 mb-6"
            >
              <span>Começar Agora</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Countdown */}
            <p className="text-gray-500 text-sm">
              Redirecionando automaticamente em {countdown} segundos...
            </p>
          </div>
        </div>

        {/* Próximos Passos */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 text-center">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-3">
              <span className="text-[#D4AF37] font-black text-xl">1</span>
            </div>
            <h4 className="text-white font-bold mb-2">Complete seu Perfil</h4>
            <p className="text-gray-400 text-sm">Personalize sua experiência</p>
          </div>

          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 text-center">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-3">
              <span className="text-[#D4AF37] font-black text-xl">2</span>
            </div>
            <h4 className="text-white font-bold mb-2">Escolha sua Trilha</h4>
            <p className="text-gray-400 text-sm">Comece pelo que mais importa</p>
          </div>

          <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 text-center">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-3">
              <span className="text-[#D4AF37] font-black text-xl">3</span>
            </div>
            <h4 className="text-white font-bold mb-2">Primeira Aula</h4>
            <p className="text-gray-400 text-sm">Dê o primeiro passo hoje</p>
          </div>
        </div>
      </div>
    </div>
  );
}

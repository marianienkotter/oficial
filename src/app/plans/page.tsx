"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Crown,
  Sparkles,
  Zap,
  Star,
  Shield,
  ShoppingBag,
  TrendingUp
} from "lucide-react";
import { useState } from "react";

export default function PlansPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Gratuito",
      description: "Comece sua jornada sem compromisso",
      monthlyPrice: 0,
      annualPrice: 0,
      icon: <Star className="w-8 h-8" />,
      gradient: "from-gray-500 to-gray-600",
      features: [
        "Acesso a 5 cursos básicos",
        "Comunidade geral",
        "Certificados básicos",
        "Suporte por e-mail",
        "Conteúdo limitado"
      ],
      popular: false
    },
    {
      name: "Pro",
      description: "Para quem quer evoluir constantemente",
      monthlyPrice: 49.90,
      annualPrice: 499,
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-600",
      features: [
        "Acesso a 50+ cursos profissionais",
        "IA Tutora personalizada",
        "Comunidade exclusiva Pro",
        "Certificados profissionais",
        "Suporte prioritário",
        "Atualizações semanais",
        "Material complementar"
      ],
      popular: true
    },
    {
      name: "Pro Plus",
      description: "Máximo desempenho e resultados",
      monthlyPrice: 79.90,
      annualPrice: 799,
      icon: <Crown className="w-8 h-8" />,
      gradient: "from-[#D4AF37] to-amber-600",
      features: [
        "Tudo do Pro +",
        "Acesso TOTAL a todos os cursos",
        "Mentorias ao vivo mensais",
        "Networking de elite",
        "Suporte 24/7",
        "Certificados premium",
        "Garantia de 7 dias",
        "Grupo VIP exclusivo"
      ],
      popular: false
    },
    {
      name: "Elite",
      description: "Para quem busca resultados extraordinários",
      monthlyPrice: 89.90,
      annualPrice: 899,
      icon: <Sparkles className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-600",
      features: [
        "Tudo do Pro Plus +",
        "Mentoria individual 1:1",
        "Acesso vitalício aos cursos",
        "Eventos presenciais VIP",
        "Consultoria personalizada",
        "Acesso antecipado",
        "Suporte VIP ilimitado",
        "Certificação Elite"
      ],
      popular: false
    },
    {
      name: "E-commerce Pro",
      description: "Especializado para vendedores online",
      monthlyPrice: 89.90,
      annualPrice: 899,
      icon: <ShoppingBag className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-600",
      features: [
        "Cursos de e-commerce avançados",
        "Estratégias de vendas online",
        "Marketing digital completo",
        "Automação de vendas",
        "Análise de métricas",
        "Suporte especializado",
        "Comunidade de vendedores",
        "Templates e ferramentas"
      ],
      popular: false
    },
    {
      name: "Influencer Pro",
      description: "Cresça sua presença digital",
      monthlyPrice: 39.99,
      annualPrice: 399,
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-pink-500 to-rose-600",
      features: [
        "Estratégias de crescimento",
        "Criação de conteúdo viral",
        "Monetização de redes sociais",
        "Análise de engajamento",
        "Parcerias e colaborações",
        "Branding pessoal",
        "Comunidade de criadores",
        "Ferramentas de edição"
      ],
      popular: false
    }
  ];

  const calculateSavings = (monthlyPrice: number, annualPrice: number) => {
    if (monthlyPrice === 0) return { savings: 0, percentage: 0 };
    const monthlyCost = monthlyPrice * 12;
    const savings = monthlyCost - annualPrice;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { savings, percentage };
  };

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/30 z-50 shadow-2xl shadow-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-full group-hover:bg-[#D4AF37]/30 transition-all" />
                <img
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e22a0287-4560-4daf-af81-6b17c1eb9768.jpg"
                  alt="Elite Life Logo"
                  className="relative h-10 w-10 sm:h-14 sm:w-14 object-contain rounded-lg drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] group-hover:drop-shadow-[0_0_30px_rgba(212,175,55,0.9)] transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 tracking-wider group-hover:from-amber-400 group-hover:to-yellow-600 transition-all">
                  ELITE LIFE
                </h1>
                <p className="text-[8px] sm:text-[10px] text-[#D4AF37]/70 font-semibold tracking-widest uppercase hidden sm:block">
                  Transforme sua vida
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/auth/login"
                className="hidden md:block px-6 py-2.5 text-white hover:text-[#D4AF37] transition-all font-semibold"
              >
                Entrar
              </Link>
              <Link
                href="/auth/signup"
                className="px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-full font-bold hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105 text-xs sm:text-base"
              >
                Começar Agora
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6">
              <Crown className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold">Planos Premium</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
              Escolha seu
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                Plano Ideal
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Invista em você e transforme sua vida. Todos os planos incluem garantia de 7 dias.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-full p-2">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  billingCycle === "monthly"
                    ? "bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2 rounded-full font-semibold transition-all relative ${
                  billingCycle === "annual"
                    ? "bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Anual
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  -17%
                </span>
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => {
              const { savings, percentage } = calculateSavings(plan.monthlyPrice, plan.annualPrice);
              const displayPrice = billingCycle === "monthly" ? plan.monthlyPrice : Math.round(plan.annualPrice / 12);

              return (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-3xl p-8 border-2 transition-all hover:scale-105 ${
                    plan.popular
                      ? "border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/30"
                      : "border-[#D4AF37]/20 hover:border-[#D4AF37]/60"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                      MAIS POPULAR
                    </div>
                  )}

                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-6 shadow-lg`}>
                    <div className="text-white">{plan.icon}</div>
                  </div>

                  <h3 className="text-3xl font-black text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      {plan.monthlyPrice === 0 ? (
                        <span className="text-5xl font-black text-white">Grátis</span>
                      ) : (
                        <>
                          <span className="text-5xl font-black text-white">R$ {displayPrice.toFixed(2)}</span>
                          <span className="text-gray-400">/mês</span>
                        </>
                      )}
                    </div>
                    {billingCycle === "annual" && plan.monthlyPrice > 0 && (
                      <>
                        <div className="text-sm text-green-400 font-semibold">
                          Economize R$ {savings.toFixed(2)} ({percentage}% OFF)
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Cobrado R$ {plan.annualPrice.toFixed(2)} anualmente
                        </div>
                      </>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/auth/signup"
                    className={`block w-full py-4 rounded-full font-bold text-center transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black hover:shadow-2xl hover:shadow-[#D4AF37]/50"
                        : "bg-white/5 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                    }`}
                  >
                    {plan.monthlyPrice === 0 ? "Começar Grátis" : "Começar Agora"}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2 group">
              <Shield className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white transition-colors">Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2 group">
              <CheckCircle className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white transition-colors">Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2 group">
              <Star className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white transition-colors">50K+ alunos satisfeitos</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold">Dúvidas Frequentes</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Perguntas
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                Frequentes
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Posso cancelar a qualquer momento?",
                a: "Sim! Você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas adicionais."
              },
              {
                q: "Como funciona a garantia de 7 dias?",
                a: "Se você não ficar satisfeito nos primeiros 7 dias, devolvemos 100% do seu investimento, sem perguntas."
              },
              {
                q: "Tenho acesso vitalício aos cursos?",
                a: "No plano Elite, sim! Nos outros planos, você tem acesso enquanto sua assinatura estiver ativa."
              },
              {
                q: "Os certificados são reconhecidos?",
                a: "Sim! Todos os nossos certificados são reconhecidos e podem ser adicionados ao seu LinkedIn."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Pronto para
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
              Transformar sua Vida?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Junte-se a mais de 50 mil alunos que já estão vivendo seus sonhos
          </p>
          <Link
            href="/auth/signup"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-full font-black text-xl hover:shadow-2xl hover:shadow-[#D4AF37]/60 transition-all transform hover:scale-105"
          >
            Começar Agora Grátis
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#D4AF37]/20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-gray-400 text-sm">
            © 2025 <span className="text-[#D4AF37] font-bold">ELITE LIFE</span>. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

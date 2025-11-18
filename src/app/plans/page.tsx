"use client";

import Link from "next/link";
import { Check, Crown, Zap, Sparkles, ArrowLeft, TrendingUp, Users, Briefcase } from "lucide-react";

export default function PlansPage() {
  const plans = [
    {
      id: "free",
      name: "Free",
      price: "R$ 0",
      period: "/mês",
      description: "Perfeito para começar sua jornada",
      features: [
        "Acesso limitado aos cursos",
        "1 trilha de aprendizado",
        "Comunidade básica",
        "Suporte por email"
      ],
      cta: "Começar Grátis",
      highlight: false,
      gradient: "from-gray-600 to-gray-800",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      id: "pro",
      name: "Pro",
      price: "R$ 97",
      period: "/mês",
      description: "Para quem quer resultados reais",
      features: [
        "Todos os cursos completos",
        "Vídeos ilimitados",
        "Atividades práticas",
        "Agenda completa",
        "Tracker avançado",
        "Certificados"
      ],
      cta: "Assinar Agora",
      highlight: false,
      gradient: "from-blue-500 to-cyan-600",
      icon: <TrendingUp className="w-8 h-8 text-white" />
    },
    {
      id: "pro-plus",
      name: "Pro Plus",
      price: "R$ 147",
      period: "/mês",
      description: "Tudo do Pro + Comunidade Elite",
      features: [
        "Tudo do plano Pro",
        "Comunidade exclusiva",
        "Desafios 30 dias",
        "Medalhas & Ranking",
        "Relatórios avançados"
      ],
      cta: "Assinar Agora",
      highlight: true,
      gradient: "from-purple-500 to-indigo-600",
      icon: <Crown className="w-8 h-8 text-white" />
    },
    {
      id: "elite",
      name: "Elite",
      price: "R$ 297",
      period: "/mês",
      description: "Transformação completa garantida",
      features: [
        "Tudo do Pro Plus",
        "IA Premium personalizada",
        "Carteira inteligente",
        "Dashboards milionários",
        "Relatório 360º",
        "Suporte prioritário"
      ],
      cta: "Assinar Agora",
      highlight: false,
      gradient: "from-amber-500 to-yellow-600",
      icon: <Sparkles className="w-8 h-8 text-black" />
    },
    {
      id: "anual",
      name: "Anual Master",
      price: "R$ 997",
      period: "/ano",
      description: "Acesso total por 12 meses",
      features: [
        "TUDO da plataforma desbloqueado",
        "12 meses de acesso total",
        "Economia de R$ 2.567",
        "Bônus exclusivos",
        "Garantia estendida"
      ],
      cta: "Assinar Agora",
      highlight: false,
      gradient: "from-green-500 to-emerald-600",
      icon: <Crown className="w-8 h-8 text-white" />
    },
    {
      id: "influencer-pro",
      name: "Influencer Pro",
      price: "R$ 197",
      period: "/mês",
      description: "Para criadores de conteúdo",
      features: [
        "IA para criadores",
        "400 dietas prontas",
        "Calendário de postagens",
        "Scripts virais",
        "Dicas de edição",
        "Hashtags virais"
      ],
      cta: "Assinar Agora",
      highlight: false,
      gradient: "from-pink-500 to-rose-600",
      icon: <Users className="w-8 h-8 text-white" />
    },
    {
      id: "ecommerce-pro",
      name: "E-commerce Pro",
      price: "R$ 197",
      period: "/mês",
      description: "Para empreendedores digitais",
      features: [
        "Vídeos de e-commerce",
        "Treinos de vendas",
        "Anúncios prontos",
        "Estratégias ML e Shopee",
        "Certificado e-commerce"
      ],
      cta: "Assinar Agora",
      highlight: false,
      gradient: "from-orange-500 to-red-600",
      icon: <Briefcase className="w-8 h-8 text-white" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Voltar</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <img
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e22a0287-4560-4daf-af81-6b17c1eb9768.jpg"
                alt="Elite Life"
                className="h-10 w-10 object-contain rounded-lg"
              />
              <h1 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                ELITE LIFE
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24 pb-24">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6">
            <Crown className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold">Escolha seu Plano</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            Invista no seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">Futuro</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Escolha o plano ideal para sua jornada de transformação
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-3xl p-6 border-2 transition-all hover:scale-105 ${
                plan.highlight
                  ? "border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20"
                  : "border-[#D4AF37]/20"
              }`}
            >
              {/* Popular Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full shadow-lg">
                  <span className="text-black font-bold text-sm flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-xs mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-400 mb-1 text-sm">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-xs">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={plan.id === "free" ? "/dashboard" : `/checkout/${plan.id}`}
                className={`block w-full py-3 rounded-xl font-bold transition-all text-center ${
                  plan.highlight
                    ? "bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black hover:shadow-lg hover:shadow-[#D4AF37]/50"
                    : "bg-white/5 border border-[#D4AF37]/30 text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="bg-gradient-to-r from-[#D4AF37]/10 to-amber-500/10 border border-[#D4AF37]/30 rounded-3xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-black" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Garantia de 7 Dias
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experimente qualquer plano por 7 dias. Se não gostar, devolvemos 100% do seu investimento, sem perguntas.
          </p>
        </div>
      </div>
    </div>
  );
}

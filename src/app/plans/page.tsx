"use client";

import Link from "next/link";
import {
  Check,
  Lock,
  Sparkles,
  Crown,
  Zap,
  TrendingUp,
  ShoppingCart,
  Video,
  ArrowRight,
  Star
} from "lucide-react";

export default function PlansPage() {
  // Dados dos planos EXATAMENTE como nas imagens
  const plans = [
    {
      id: "free",
      name: "GRATUITO",
      price: "R$ 0,00",
      period: "/mês",
      description: "Comece sua jornada",
      features: [
        "Acesso limitado",
        "Agenda simples",
        "Tracker básico",
        "Quiz inicial",
        "Relatório simples",
        "Cursos bloqueados",
        "Vídeos bloqueados"
      ],
      locked: [],
      color: "from-gray-500 to-gray-600",
      badge: null,
      buttonText: "Começar Grátis",
      highlighted: false
    },
    {
      id: "pro",
      name: "PRO",
      price: "R$ 49,90",
      period: "/mês",
      description: "Para quem quer evoluir",
      features: [
        "+100 cursos",
        "1000 atividades",
        "IA de suporte",
        "Relatórios semanais",
        "Agenda completa",
        "Tracker avançado",
        "Certificado"
      ],
      locked: [],
      color: "from-blue-500 to-blue-600",
      badge: null,
      buttonText: "Assinar Agora",
      highlighted: false
    },
    {
      id: "proplus",
      name: "PRO PLUS",
      price: "R$ 79,90",
      period: "/mês",
      description: "Experiência completa",
      features: [
        "Tudo do PRO",
        "Comunidade exclusiva",
        "Desafios 30 dias",
        "Medalhas e ranking",
        "Relatórios de performance",
        "Notificações avançadas"
      ],
      locked: [],
      color: "from-purple-500 to-purple-600",
      badge: "Popular",
      buttonText: "Assinar Agora",
      highlighted: true
    },
    {
      id: "elite",
      name: "ELITE",
      price: "R$ 89,90",
      period: "/mês",
      description: "O melhor da Elite Life",
      features: [
        "Tudo do PRO PLUS",
        "IA Premium com automações",
        "Chat da comunidade",
        "Carteira editável",
        "Dashboards avançados",
        "Relatórios detalhados"
      ],
      locked: [],
      color: "from-[#D4AF37] to-amber-600",
      badge: "Recomendado",
      buttonText: "Assinar Agora",
      highlighted: false
    },
    {
      id: "anual",
      name: "ANUAL",
      price: "R$ 299,00",
      period: "/ano",
      description: "Melhor economia",
      features: [
        "Todos os recursos ELITE",
        "Pagamento anual com desconto",
        "Acesso completo a certificados",
        "Agenda completa editável",
        "IA completa",
        "Suporte exclusivo"
      ],
      locked: [],
      color: "from-green-500 to-emerald-600",
      badge: "Melhor Economia",
      buttonText: "Assinar Agora",
      highlighted: false
    },
    {
      id: "influencer",
      name: "INFLUENCER PRO",
      price: "R$ 39,99",
      period: "/mês",
      description: "Para criadores de conteúdo",
      features: [
        "IA que cria thumbnails e scripts",
        "Relatórios virais",
        "Calendário de postagens",
        "400 dietas de famosos",
        "Tracker avançado",
        "Afiliado 15%",
        "❌ Sem acesso à carteira",
        "❌ Sem vídeos de finanças"
      ],
      locked: ["carteira", "financas"],
      color: "from-pink-500 to-rose-600",
      badge: "Criadores de Conteúdo",
      buttonText: "Assinar Agora",
      highlighted: false
    },
    {
      id: "ecommerce",
      name: "E-COMMERCE PRO",
      price: "R$ 89,90",
      period: "/mês",
      description: "Para empreendedores digitais",
      features: [
        "Mercado Livre, Amazon, Shopee",
        "+1000 atividades e vídeos",
        "Tráfego pago",
        "Estruturas profissionais",
        "Certificado E-commerce",
        "Integrar ML, Shopee, Amazon"
      ],
      locked: [],
      color: "from-orange-500 to-red-600",
      badge: "E-commerce",
      buttonText: "Assinar Agora",
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0B0B0B]/95 backdrop-blur-sm border-b border-[#D4AF37]/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-2xl font-bold text-white">ELITE LIFE</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="px-6 py-2 text-white hover:text-[#D4AF37] transition-colors font-medium"
              >
                Voltar ao Dashboard
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6">
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-semibold">Escolha o plano ideal para você</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Desbloqueie todo o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-600">
              potencial
            </span>
          </h1>
          
          <p className="text-xl text-[#9A9A9A] mb-8 max-w-3xl mx-auto">
            Escolha o plano que melhor se adapta aos seus objetivos e comece sua transformação hoje mesmo.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border transition-all ${
                  plan.highlighted
                    ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/50 scale-105"
                    : "border-[#D4AF37]/20 hover:border-[#D4AF37]/50"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`bg-gradient-to-r ${plan.color} text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4`}>
                    {plan.badge}
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-[#9A9A9A] text-sm mb-4">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#D4AF37]">{plan.price}</span>
                  <span className="text-[#9A9A9A]">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      {feature.startsWith("❌") ? (
                        <>
                          <Lock className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-[#9A9A9A] text-sm line-through">{feature.replace("❌ ", "")}</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                          <span className="text-[#9A9A9A] text-sm">{feature}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                    plan.id === "free"
                      ? "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]"
                      : plan.highlighted
                      ? "bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] hover:shadow-lg hover:shadow-[#D4AF37]/50"
                      : `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg`
                  }`}
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Compare os planos
            </h2>
            <p className="text-xl text-[#9A9A9A]">
              Veja qual plano oferece os recursos que você precisa
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-8 border border-[#D4AF37]/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#D4AF37]/20">
                    <th className="text-left py-4 px-4 text-white font-bold">Recursos</th>
                    <th className="text-center py-4 px-4 text-white font-bold">Free</th>
                    <th className="text-center py-4 px-4 text-white font-bold">Pro</th>
                    <th className="text-center py-4 px-4 text-white font-bold">Pro Plus</th>
                    <th className="text-center py-4 px-4 text-white font-bold">Elite</th>
                    <th className="text-center py-4 px-4 text-white font-bold">Anual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#D4AF37]/10">
                    <td className="py-4 px-4 text-[#9A9A9A]">Cursos</td>
                    <td className="text-center py-4 px-4"><Lock className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#D4AF37] mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#D4AF37] mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#D4AF37] mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#D4AF37] mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-[#D4AF37]/10">
                    <td className="py-4 px-4 text-[#9A9A9A]">Vídeos</td>
                    <td className="text-center py-4 px-4"><Lock className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#D4AF37] mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#D4AF37] mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#D4AF37] mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#D4AF37] mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-[#D4AF37]/10">
                    <td className="py-4 px-4 text-[#9A9A9A]">IA Premium</td>
                    <td className="text-center py-4 px-4"><Lock className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Lock className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Lock className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#D4AF37] mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#D4AF37] mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-[#D4AF37]/10">
                    <td className="py-4 px-4 text-[#9A9A9A]">Comunidade</td>
                    <td className="text-center py-4 px-4"><Lock className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Lock className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#D4AF37] mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#D4AF37] mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#D4AF37] mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-[#9A9A9A]">Carteira Editável</td>
                    <td className="text-center py-4 px-4"><Lock className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Lock className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Lock className="w-5 h-5 text-red-500 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#D4AF37] mx-auto" /></td>
                    <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-[#D4AF37] mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-[#9A9A9A]">
              Tire suas dúvidas sobre os planos
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Posso cancelar a qualquer momento?",
                a: "Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas ou multas."
              },
              {
                q: "Como funciona o pagamento?",
                a: "Aceitamos cartão de crédito, débito e PIX. O pagamento é processado de forma segura pelo Stripe."
              },
              {
                q: "Posso mudar de plano depois?",
                a: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento."
              },
              {
                q: "Há garantia de reembolso?",
                a: "Sim! Oferecemos garantia de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro."
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-6 border border-[#D4AF37]/20"
              >
                <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                <p className="text-[#9A9A9A]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#D4AF37]/10 to-amber-600/10 border-y border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto text-center">
          <Star className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-xl text-[#9A9A9A] mb-8">
            Fale com nossa equipe e descubra qual plano é ideal para você
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all">
            Falar com Especialista
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-2xl font-bold text-white">ELITE LIFE</span>
            </div>
            
            <div className="text-[#9A9A9A] text-sm">
              © 2025 Elite Life. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">
                Termos
              </Link>
              <Link href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">
                Privacidade
              </Link>
              <Link href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

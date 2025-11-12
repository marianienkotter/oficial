"use client";

import { Check, Lock, Crown, TrendingUp, Zap, ShoppingCart, Video } from "lucide-react";

export default function Home() {
  const plans = [
    {
      id: 1,
      name: "Gratuito",
      price: "R$ 0,00",
      period: "",
      badge: null,
      color: "from-gray-400 to-gray-600",
      icon: Lock,
      features: [
        "Acesso limitado",
        "Agenda personalizável (versão reduzida)",
        "Tracker básico (água, calorias e passos)",
        "Quiz inicial",
        "Relatório simples após 7 dias",
        { text: "Cursos e IA bloqueados", locked: true }
      ]
    },
    {
      id: 2,
      name: "PRO",
      price: "R$ 49,90",
      period: "/mês",
      badge: null,
      color: "from-purple-500 to-indigo-600",
      icon: Zap,
      features: [
        "+ de 100 cursos desbloqueados",
        "1000 atividades e 1000 questionários",
        "Acesso à IA de suporte",
        "Relatórios semanais",
        "Agenda completa",
        "Tracker avançado (alimentação e nutrição)",
        "Certificado Elite Life a cada módulo"
      ]
    },
    {
      id: 3,
      name: "PRO PLUS",
      price: "R$ 79,90",
      period: "/mês",
      badge: "Mais Popular",
      badgeColor: "bg-gradient-to-r from-orange-400 to-pink-600",
      color: "from-pink-500 to-purple-600",
      icon: Crown,
      features: [
        "Tudo do PRO +",
        "Comunidade exclusiva",
        "Desafios de 30 dias",
        "Sistema de medalhas e ranking",
        "Relatórios de performance completos",
        "Relatórios automáticos de evolução",
        "Notificações personalizadas"
      ]
    },
    {
      id: 4,
      name: "ELITE",
      price: "R$ 89,90",
      period: "/mês",
      badge: "Acesso Total",
      badgeColor: "bg-gradient-to-r from-yellow-400 to-amber-600",
      color: "from-amber-500 to-yellow-600",
      icon: Crown,
      features: [
        "Tudo do PRO PLUS +",
        "Funções premium da IA (planos automáticos fitness + financeiros)",
        "Chat social da comunidade",
        "Carteira de investimentos simulada",
        "Dashboards avançados",
        "Relatórios detalhados de progresso físico e financeiro"
      ]
    },
    {
      id: 5,
      name: "ANUAL",
      price: "R$ 299,00",
      period: "/ano",
      badge: "Economia de 2 meses",
      badgeColor: "bg-gradient-to-r from-green-400 to-emerald-600",
      color: "from-emerald-500 to-teal-600",
      icon: Crown,
      features: [
        "Todos os recursos do plano ELITE",
        "Pagamento anual com desconto",
        "Acesso completo a certificados",
        "Agenda completa",
        "Relatórios automáticos",
        "IA completa",
        "Suporte exclusivo"
      ]
    },
    {
      id: 6,
      name: "INFLUENCER PRO",
      price: "R$ 39,99",
      period: "/mês",
      badge: "Criadores de Conteúdo",
      badgeColor: "bg-gradient-to-r from-pink-400 to-rose-600",
      color: "from-rose-400 to-pink-600",
      icon: Video,
      features: [
        "IA cria thumbnails e scripts",
        "Relatórios de vídeos virais",
        "Calendários de postagens",
        "400 dietas de famosos (200 BR + 200 INT)",
        "Plano semanal de treino e alimentação",
        "Hashtags virais",
        "Ranking de influenciadores",
        "Tracker avançado",
        "Afiliação com comissões de 15%"
      ]
    },
    {
      id: 7,
      name: "E-COMMERCE PRO",
      price: "R$ 89,90",
      period: "/mês",
      badge: "Vendas Online",
      badgeColor: "bg-gradient-to-r from-blue-400 to-cyan-600",
      color: "from-cyan-500 to-blue-600",
      icon: ShoppingCart,
      features: [
        "Treinamentos Mercado Livre, Amazon, Shopee",
        "+1000 atividades e vídeos explicativos",
        "Tráfego pago e Google Ads",
        "Criação de anúncios profissionais",
        "Estratégias para escalar lojas",
        "Tracker financeiro",
        "Relatórios de resultados",
        "Certificado Elite Life E-commerce"
      ],
      marketplaces: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">ELITE LIFE</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Escolha Seu Plano
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2">
              Elite Life
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transforme sua vida com acesso a cursos, IA personalizada, comunidade exclusiva e muito mais
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isPopular = plan.id === 3;
            const isElite = plan.id === 4;
            
            return (
              <div
                key={plan.id}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl ${
                  isPopular || isElite ? 'ring-2 ring-purple-500/50' : ''
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 ${plan.badgeColor} text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg`}>
                    {plan.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400 text-lg">{plan.period}</span>
                  )}
                </div>

                {/* Marketplaces Icons (E-commerce) */}
                {plan.marketplaces && (
                  <div className="flex justify-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-xs font-bold">
                      ML
                    </div>
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                      A
                    </div>
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                      S
                    </div>
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => {
                    const isLocked = typeof feature === 'object' && feature.locked;
                    const text = typeof feature === 'string' ? feature : feature.text;
                    
                    return (
                      <li key={index} className="flex items-start gap-2">
                        {isLocked ? (
                          <Lock className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${isLocked ? 'text-gray-500' : 'text-gray-300'}`}>
                          {text}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    plan.id === 1
                      ? 'bg-gradient-to-r from-gray-600 to-gray-700'
                      : `bg-gradient-to-r ${plan.color}`
                  }`}
                >
                  {plan.id === 1 ? 'Começar Grátis' : 'Assinar Agora'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Affiliate Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <div className="text-center mb-8">
            <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Programa de Afiliados
            </h3>
            <p className="text-gray-300 text-lg">
              Ganhe comissões compartilhando Elite Life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">20%</div>
              <div className="text-gray-300">Primeira venda</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">15%</div>
              <div className="text-gray-300">Vendas seguintes</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">R$ 250</div>
              <div className="text-gray-300">Bônus em R$ 3.500</div>
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-gray-300">
              <Check className="w-5 h-5 text-green-400" />
              Link único de afiliado personalizado
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Check className="w-5 h-5 text-green-400" />
              Cupom de 5% para seus clientes (uso único)
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Check className="w-5 h-5 text-green-400" />
              Ranking de afiliados com métricas reais
            </li>
          </ul>

          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-4 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            Tornar-se Afiliado
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>© 2024 Elite Life. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

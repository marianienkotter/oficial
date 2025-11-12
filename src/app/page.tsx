"use client";

import { useState } from "react";
import { 
  Bell, Globe, User, Crown, Lock, Check, Star, TrendingUp, 
  Zap, Video, ShoppingCart, Calendar, Activity, Wallet, 
  Users, BarChart3, Award, MessageSquare, Menu, X,
  ChevronDown, Play, BookOpen, Film, Sparkles
} from "lucide-react";

export default function EliteLifeHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("pt");
  const [showNotifications, setShowNotifications] = useState(false);

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
      badgeColor: "bg-[#D4AF37] text-[#0B0B0B]",
      color: "from-[#D4AF37] to-amber-600",
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
      badge: "Melhor Economia",
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

  const stats = [
    { label: "+ de 50.000 alunos", value: "50k+" },
    { label: "+ de 100 cursos", value: "100+" },
    { label: "+ de 1000 atividades", value: "1000+" },
    { label: "Certificados ELITE LIFE", value: "✓" }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#D4AF37]/20 bg-[#0B0B0B]/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-4 border-b border-white/5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center">
                <Crown className="w-6 h-6 text-[#0B0B0B]" />
              </div>
              <h1 className="text-2xl font-bold text-[#D4AF37]">ELITE LIFE</h1>
            </div>

            {/* Right Side - Notifications, Language, User */}
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <Bell className="w-5 h-5 text-[#9A9A9A]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#D4AF37] rounded-full"></span>
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button className="flex items-center gap-2 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors">
                  <Globe className="w-5 h-5 text-[#9A9A9A]" />
                  <span className="text-sm text-[#9A9A9A] uppercase">{language}</span>
                  <ChevronDown className="w-4 h-4 text-[#9A9A9A]" />
                </button>
              </div>

              {/* User Menu */}
              <button className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-[#0B0B0B]" />
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium text-white">Visitante</div>
                  <div className="text-xs text-[#9A9A9A]">Criar conta</div>
                </div>
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block py-4`}>
            <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-1 md:gap-6 text-sm">
              <li><a href="#" className="block px-4 py-2 text-[#D4AF37] hover:bg-white/5 rounded-lg transition-colors font-medium">Início</a></li>
              <li><a href="#cursos" className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Cursos</a></li>
              <li><a href="#cursos" className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">+ de 100 Cursos</a></li>
              <li><a href="#videos" className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Vídeos</a></li>
              <li><a href="#agenda" className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Agenda</a></li>
              <li><a href="#tracker" className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Tracker</a></li>
              <li><a href="#carteira" className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Carteira</a></li>
              <li><a href="#influencer" className="block px-4 py-2 text-pink-400 hover:text-pink-300 hover:bg-white/5 rounded-lg transition-colors">Influencer Pro</a></li>
              <li><a href="#ecommerce" className="block px-4 py-2 text-cyan-400 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-colors">E-commerce</a></li>
              <li><a href="#afilhados" className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Afilhados</a></li>
              <li><a href="#ranking" className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Ranking</a></li>
              <li><a href="#dashboard" className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Dashboard</a></li>
              <li><a href="#certificados" className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Certificados</a></li>
              <li><a href="#suporte" className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Suporte IA</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-purple-900/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm text-[#D4AF37] font-medium">Método Exclusivo ELITE LIFE</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transforme sua vida em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                90 dias
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-[#9A9A9A] mb-12 max-w-2xl mx-auto">
              Corpo, mente e dinheiro no mesmo lugar. + de 50 mil alunos transformados.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-[#D4AF37]/20">
                Criar Conta
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                Entrar
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-xl hover:bg-[#D4AF37]/10 transition-all duration-300">
                Teste Grátis
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-[#9A9A9A]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 text-center">
              <Star className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-[#9A9A9A]">Avaliação média</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">50k+</div>
              <div className="text-[#9A9A9A]">Vidas transformadas</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">R$ 10M+</div>
              <div className="text-[#9A9A9A]">Valor gerado por alunos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Escolha Seu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                Plano
              </span>
            </h3>
            <p className="text-xl text-[#9A9A9A] max-w-2xl mx-auto">
              Acesso completo a cursos, IA personalizada, comunidade exclusiva e muito mais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const isPopular = plan.id === 3;
              const isElite = plan.id === 4;
              
              return (
                <div
                  key={plan.id}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/10 ${
                    isPopular || isElite ? 'ring-2 ring-[#D4AF37]/50' : ''
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
                      <span className="text-[#9A9A9A] text-lg">{plan.period}</span>
                    )}
                  </div>

                  {/* Marketplaces Icons (E-commerce) */}
                  {plan.marketplaces && (
                    <div className="flex justify-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-xs font-bold text-black">
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
                            <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`text-sm ${isLocked ? 'text-gray-500' : 'text-[#9A9A9A]'}`}>
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
        </div>
      </section>

      {/* Affiliate Section */}
      <section id="afilhados" className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border-2 border-green-500/50 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-sm text-green-400 font-medium">Seja Afilhado - 0 custo</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Programa de Afiliados
              </h3>
              <p className="text-[#9A9A9A] text-lg">
                Ganhe comissões compartilhando Elite Life
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">20%</div>
                <div className="text-[#9A9A9A]">Primeira venda</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
                <div className="text-4xl font-bold text-pink-400 mb-2">15%</div>
                <div className="text-[#9A9A9A]">Vendas seguintes</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
                <div className="text-4xl font-bold text-green-400 mb-2">R$ 250</div>
                <div className="text-[#9A9A9A]">Bônus em R$ 3.500</div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-[#9A9A9A]">
                <Check className="w-5 h-5 text-[#D4AF37]" />
                Link único de afiliado personalizado
              </li>
              <li className="flex items-center gap-3 text-[#9A9A9A]">
                <Check className="w-5 h-5 text-[#D4AF37]" />
                Cupom de 5% para seus clientes (uso único)
              </li>
              <li className="flex items-center gap-3 text-[#9A9A9A]">
                <Check className="w-5 h-5 text-[#D4AF37]" />
                Ranking de afiliados com métricas reais
              </li>
            </ul>

            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20">
              Tornar-se Afiliado
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-[#0B0B0B]" />
                </div>
                <h1 className="text-2xl font-bold text-[#D4AF37]">ELITE LIFE</h1>
              </div>
              <p className="text-[#9A9A9A] text-sm">
                Transforme sua vida em 90 dias. Corpo, mente e dinheiro no mesmo lugar.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Suporte</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://instagram.com/elitelife_experience" target="_blank" rel="noopener noreferrer" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">
                    @elitelife_experience
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">
                    Telegram (Canal)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-[#9A9A9A] text-sm">
            <p>© 2024 Elite Life. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

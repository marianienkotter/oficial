"use client";

import { useState } from "react";
import { 
  Bell, Globe, User, Crown, Lock, Check, Star, TrendingUp, 
  Zap, Video, ShoppingCart, Calendar, Activity, Wallet, 
  Users, BarChart3, Award, MessageSquare, Menu, X,
  ChevronDown, Play, BookOpen, Film, Sparkles, Clock,
  Heart, Brain, Dumbbell, Apple, Droplet, Moon, Smile,
  AlertCircle, Upload, ExternalLink, Trophy, Medal,
  Target, Flame, CheckCircle, XCircle, Plus, Minus,
  DollarSign, PieChart, TrendingDown, Send, Image as ImageIcon
} from "lucide-react";

export default function EliteLifeHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("pt");
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  const notifications = [
    { id: 1, title: "Boas-vindas!", message: "Bem-vindo à Elite Life", time: "Agora", read: false },
    { id: 2, title: "Desconto disponível", message: "Cupom de 5% liberado", time: "1h atrás", read: false },
    { id: 3, title: "Lembrete de agenda", message: "Treino em 30 minutos", time: "2h atrás", read: true },
  ];

  const ecommerceModules = [
    {
      platform: "Mercado Livre",
      icon: "ML",
      color: "bg-yellow-400 text-black",
      courses: 15,
      activities: 350
    },
    {
      platform: "Amazon",
      icon: "A",
      color: "bg-orange-500 text-white",
      courses: 12,
      activities: 300
    },
    {
      platform: "Shopee",
      icon: "S",
      color: "bg-orange-600 text-white",
      courses: 10,
      activities: 350
    }
  ];

  const certificates = [
    { id: 1, name: "Finanças Pessoais Avançadas", date: "15/01/2024", status: "completed" },
    { id: 2, name: "Fitness & Nutrição", date: "10/01/2024", status: "completed" },
    { id: 3, name: "Marketing Digital", date: "05/01/2024", status: "completed" },
    { id: 4, name: "E-commerce Mastery", date: "-", status: "locked" },
  ];

  const rankingData = [
    { position: 1, name: "João Silva", points: 15420, medal: "🥇" },
    { position: 2, name: "Maria Santos", points: 14890, medal: "🥈" },
    { position: 3, name: "Pedro Costa", points: 13750, medal: "🥉" },
    { position: 4, name: "Ana Oliveira", points: 12340, medal: "" },
    { position: 5, name: "Carlos Souza", points: 11890, medal: "" },
  ];

  const affiliateStats = [
    { label: "Total de Vendas", value: "R$ 2.450,00", icon: DollarSign },
    { label: "Comissões Ganhas", value: "R$ 367,50", icon: TrendingUp },
    { label: "Cliques no Link", value: "1.234", icon: Users },
    { label: "Taxa de Conversão", value: "3.2%", icon: Target },
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
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Bell className="w-5 h-5 text-[#9A9A9A]" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                    <div className="p-4 border-b border-white/10">
                      <h3 className="text-white font-bold">Notificações</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div 
                          key={notif.id}
                          className={`p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer ${
                            !notif.read ? 'bg-[#D4AF37]/5' : ''
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-white font-medium text-sm">{notif.title}</h4>
                              <p className="text-[#9A9A9A] text-xs mt-1">{notif.message}</p>
                            </div>
                            <span className="text-[#9A9A9A] text-xs">{notif.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

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
              <li><a href="#" onClick={() => setActiveSection("home")} className="block px-4 py-2 text-[#D4AF37] hover:bg-white/5 rounded-lg transition-colors font-medium">Início</a></li>
              <li><a href="#cursos" onClick={() => setActiveSection("cursos")} className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Cursos</a></li>
              <li><a href="#cursos" className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">+ de 100 Cursos</a></li>
              <li><a href="#videos" className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Vídeos</a></li>
              <li><a href="#agenda" onClick={() => setActiveSection("agenda")} className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Agenda</a></li>
              <li><a href="#tracker" onClick={() => setActiveSection("tracker")} className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Tracker</a></li>
              <li><a href="#carteira" onClick={() => setActiveSection("carteira")} className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Carteira</a></li>
              <li><a href="#influencer" className="block px-4 py-2 text-pink-400 hover:text-pink-300 hover:bg-white/5 rounded-lg transition-colors">Influencer Pro</a></li>
              <li><a href="#ecommerce" onClick={() => setActiveSection("ecommerce")} className="block px-4 py-2 text-cyan-400 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-colors">E-commerce</a></li>
              <li><a href="#afilhados" onClick={() => setActiveSection("afilhados")} className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Afilhados</a></li>
              <li><a href="#ranking" onClick={() => setActiveSection("ranking")} className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Ranking</a></li>
              <li><a href="#dashboard" className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Dashboard</a></li>
              <li><a href="#certificados" onClick={() => setActiveSection("certificados")} className="block px-4 py-2 text-[#9A9A9A] hover:text-white hover:bg-white/5 rounded-lg transition-colors">Certificados</a></li>
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

      {/* E-commerce Section */}
      <section id="ecommerce" className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Treinamentos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                E-commerce
              </span>
            </h3>
            <p className="text-xl text-[#9A9A9A] max-w-2xl mx-auto">
              Domine as principais plataformas de vendas online
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ecommerceModules.map((module, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                <div className={`w-20 h-20 ${module.color} rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6`}>
                  {module.icon}
                </div>
                <h4 className="text-2xl font-bold text-white text-center mb-4">{module.platform}</h4>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-[#9A9A9A]">
                    <span className="flex items-center gap-2">
                      <Video className="w-4 h-4" />
                      Cursos
                    </span>
                    <span className="text-white font-bold">{module.courses}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#9A9A9A]">
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Atividades
                    </span>
                    <span className="text-white font-bold">{module.activities}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 rounded-xl hover:scale-105 transition-all duration-300">
                  Acessar Módulo
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#9A9A9A] mb-4">+ de 1000 atividades sobre:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Tráfego Pago", "Google Ads", "Criativos", "Copywriting", "Anúncios"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Agenda &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                  Lembretes
                </span>
              </h3>
              <p className="text-xl text-[#9A9A9A]">
                Organize sua rotina e conquiste seus objetivos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Calendar View */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-white">Janeiro 2024</h4>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-lg text-sm">Dia</button>
                    <button className="px-3 py-1 bg-white/5 text-[#9A9A9A] rounded-lg text-sm">Semana</button>
                    <button className="px-3 py-1 bg-white/5 text-[#9A9A9A] rounded-lg text-sm">Mês</button>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                    <div className="flex-1">
                      <div className="text-white font-medium">Treino Manhã</div>
                      <div className="text-[#9A9A9A] text-sm">07:00 - 08:00</div>
                    </div>
                    <span className="text-xs bg-[#D4AF37] text-[#0B0B0B] px-2 py-1 rounded-full">(recomendado)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <Clock className="w-5 h-5 text-[#9A9A9A]" />
                    <div className="flex-1">
                      <div className="text-white font-medium">Foco & Trabalho</div>
                      <div className="text-[#9A9A9A] text-sm">09:00 - 12:00</div>
                    </div>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">(recomendado)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <Clock className="w-5 h-5 text-[#9A9A9A]" />
                    <div className="flex-1">
                      <div className="text-white font-medium">Rotina Noite</div>
                      <div className="text-[#9A9A9A] text-sm">21:00 - 22:00</div>
                    </div>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">(recomendado)</span>
                  </div>
                </div>
              </div>

              {/* Streaks */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-white mb-6">Sequências (Streaks)</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-4 text-center">
                    <Flame className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white mb-1">3</div>
                    <div className="text-[#9A9A9A] text-sm">dias</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-4 text-center">
                    <Flame className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white mb-1">7</div>
                    <div className="text-[#9A9A9A] text-sm">dias</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4 text-center">
                    <Flame className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white mb-1">21</div>
                    <div className="text-[#9A9A9A] text-sm">dias</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#D4AF37]/20 to-amber-500/20 border border-[#D4AF37]/30 rounded-xl p-4 text-center">
                    <Crown className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white mb-1">30</div>
                    <div className="text-[#9A9A9A] text-sm">dias</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300">
                Editar Agenda
              </button>
              <p className="text-[#9A9A9A] text-sm mt-4">
                <Bell className="w-4 h-4 inline mr-1" />
                Lembretes automáticos 30 minutos antes de cada atividade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracker Section */}
      <section id="tracker" className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Tracker de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                  Saúde & Nutrição
                </span>
              </h3>
              <p className="text-xl text-[#9A9A9A]">
                Monitore seu progresso diário com base em evidências científicas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Water */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Droplet className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-medium">Água</span>
                  </div>
                  <span className="text-[#D4AF37] font-bold">1500ml</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
                <p className="text-[#9A9A9A] text-xs mt-2">Meta: 2500ml</p>
              </div>

              {/* Calories */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Flame className="w-6 h-6 text-orange-400" />
                    <span className="text-white font-medium">Calorias</span>
                  </div>
                  <span className="text-[#D4AF37] font-bold">1800</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <p className="text-[#9A9A9A] text-xs mt-2">Meta: 2400 kcal</p>
              </div>

              {/* Steps */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Activity className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">Passos</span>
                  </div>
                  <span className="text-[#D4AF37] font-bold">7.234</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{width: '72%'}}></div>
                </div>
                <p className="text-[#9A9A9A] text-xs mt-2">Meta: 10.000 passos</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Macros */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h4 className="text-white font-bold mb-4">Macronutrientes</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#9A9A9A]">Proteína</span>
                      <span className="text-white">85g / 120g</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-400 to-pink-500 h-2 rounded-full" style={{width: '71%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#9A9A9A]">Carboidratos</span>
                      <span className="text-white">180g / 250g</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full" style={{width: '72%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#9A9A9A]">Gorduras</span>
                      <span className="text-white">45g / 70g</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{width: '64%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wellness */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h4 className="text-white font-bold mb-4">Bem-estar</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Moon className="w-5 h-5 text-indigo-400" />
                    <div>
                      <div className="text-white font-medium">7.5h</div>
                      <div className="text-[#9A9A9A] text-xs">Sono</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Smile className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-white font-medium">Bom</div>
                      <div className="text-[#9A9A9A] text-xs">Humor</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-white font-medium">Baixo</div>
                      <div className="text-[#9A9A9A] text-xs">Estresse</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Dumbbell className="w-5 h-5 text-red-400" />
                    <div>
                      <div className="text-white font-medium">45min</div>
                      <div className="text-[#9A9A9A] text-xs">Treino</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-amber-500/10 border border-[#D4AF37]/30 rounded-2xl p-6 text-center">
              <AlertCircle className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
              <p className="text-white mb-4">
                Plano personalizado gerado pela IA com base em evidências científicas
              </p>
              <p className="text-[#9A9A9A] text-sm mb-4">
                Baseado em pesquisas de Stanford, Harvard, Oxford, USP, PUC e outras instituições
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300">
                Gerar Relatório Semanal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Carteira Section */}
      <section id="carteira" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Carteira{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                  Inteligente
                </span>
              </h3>
              <p className="text-xl text-[#9A9A9A] mb-2">
                Simulação educacional de gestão financeira
              </p>
              <p className="text-yellow-400 text-sm flex items-center justify-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Simulação educacional (não verídica)
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-white font-medium">Reserva</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">R$ 5.420</div>
                <div className="text-green-400 text-sm">+12% este mês</div>
              </div>

              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="text-white font-medium">Dívida Zero</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">R$ 0</div>
                <div className="text-green-400 text-sm">✓ Sem dívidas</div>
              </div>

              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-amber-500/20 border border-[#D4AF37]/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-white font-medium">Investir</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">R$ 12.890</div>
                <div className="text-[#D4AF37] text-sm">+8.5% rendimento</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-white font-medium">Renda Extra</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">R$ 2.340</div>
                <div className="text-purple-400 text-sm">Este mês</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h4 className="text-white font-bold mb-4">Entradas & Saídas</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Plus className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="text-white font-medium">Salário</div>
                        <div className="text-[#9A9A9A] text-sm">01/01/2024</div>
                      </div>
                    </div>
                    <span className="text-green-400 font-bold">+R$ 5.000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Minus className="w-5 h-5 text-red-400" />
                      <div>
                        <div className="text-white font-medium">Aluguel</div>
                        <div className="text-[#9A9A9A] text-sm">05/01/2024</div>
                      </div>
                    </div>
                    <span className="text-red-400 font-bold">-R$ 1.200</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h4 className="text-white font-bold mb-4">Gráfico Mensal</h4>
                <div className="h-32 flex items-end justify-between gap-2">
                  {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-[#D4AF37] to-amber-500 rounded-t-lg" style={{height: `${height}%`}}></div>
                  ))}
                </div>
                <div className="flex justify-between text-[#9A9A9A] text-xs mt-2">
                  <span>Seg</span>
                  <span>Ter</span>
                  <span>Qua</span>
                  <span>Qui</span>
                  <span>Sex</span>
                  <span>Sáb</span>
                  <span>Dom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Section */}
      <section id="afilhados" className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-sm text-green-400 font-medium">Seja Afilhado - 0 custo</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Programa de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                  Afiliados
                </span>
              </h3>
              <p className="text-xl text-[#9A9A9A]">
                Ganhe comissões compartilhando Elite Life
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {affiliateStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                    <Icon className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-[#9A9A9A] text-sm">{stat.label}</div>
                  </div>
                );
              })}
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

            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border-2 border-green-500/50 p-8">
              <div className="mb-6">
                <h4 className="text-white font-bold mb-4">Progresso para Bônus R$ 250</h4>
                <div className="w-full bg-white/10 rounded-full h-4 mb-2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-4 rounded-full flex items-center justify-end pr-2" style={{width: '70%'}}>
                    <span className="text-white text-xs font-bold">70%</span>
                  </div>
                </div>
                <p className="text-[#9A9A9A] text-sm">R$ 2.450 / R$ 3.500</p>
              </div>

              <ul className="space-y-3 mb-6">
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

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 rounded-xl hover:scale-105 transition-all duration-300">
                  Tornar-se Afiliado
                </button>
                <button className="w-full bg-white/5 border border-white/10 text-white font-bold py-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                  Ver Métricas de Vendas
                </button>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-xl hover:bg-blue-500/30 transition-all">
                  <Upload className="w-5 h-5" />
                  Enviar Resultados
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/30 transition-all">
                  <Send className="w-5 h-5" />
                  Telegram
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ranking Section */}
      <section id="ranking" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ranking &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                  Gamificação
                </span>
              </h3>
              <p className="text-xl text-[#9A9A9A]">
                Compete com outros alunos e conquiste medalhas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <button className="px-6 py-3 bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] rounded-xl font-bold">
                Ranking de Pontos
              </button>
              <button className="px-6 py-3 bg-white/5 border border-white/10 text-[#9A9A9A] rounded-xl font-bold hover:bg-white/10">
                Ranking de Medalhas
              </button>
              <button className="px-6 py-3 bg-white/5 border border-white/10 text-[#9A9A9A] rounded-xl font-bold hover:bg-white/10">
                Ranking de Afilhados
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h4 className="text-white font-bold">Top 5 - Ranking Global</h4>
                <p className="text-[#9A9A9A] text-sm">Ganhe pontos por 2h/dia na plataforma, concluir vídeos, atividades e questionários</p>
              </div>
              <div className="divide-y divide-white/5">
                {rankingData.map((user) => (
                  <div key={user.position} className="p-6 hover:bg-white/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${
                          user.position === 1 ? 'bg-gradient-to-br from-yellow-400 to-amber-500' :
                          user.position === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-400' :
                          user.position === 3 ? 'bg-gradient-to-br from-orange-400 to-amber-600' :
                          'bg-white/10'
                        }`}>
                          {user.medal || user.position}
                        </div>
                        <div>
                          <div className="text-white font-bold">{user.name}</div>
                          <div className="text-[#9A9A9A] text-sm">{user.points.toLocaleString()} pontos</div>
                        </div>
                      </div>
                      {user.position <= 3 && (
                        <Trophy className="w-6 h-6 text-[#D4AF37]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#D4AF37]/10 to-amber-500/10 border border-[#D4AF37]/30 rounded-2xl p-6 text-center">
              <Medal className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Sua Posição</h4>
              <p className="text-[#9A9A9A] mb-4">Faça upgrade para participar do ranking e ganhar pontos</p>
              <button className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold rounded-xl hover:scale-105 transition-all duration-300">
                Ver Planos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificados" className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Certificados{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                  ELITE LIFE
                </span>
              </h3>
              <p className="text-xl text-[#9A9A9A]">
                Certificados emitidos após conclusão de módulos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert) => (
                <div 
                  key={cert.id}
                  className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 ${
                    cert.status === 'locked' ? 'border-white/10 opacity-50' : 'border-[#D4AF37]/30'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-white font-bold mb-2">{cert.name}</h4>
                      <p className="text-[#9A9A9A] text-sm">Emitido em: {cert.date}</p>
                    </div>
                    {cert.status === 'locked' ? (
                      <Lock className="w-6 h-6 text-gray-500" />
                    ) : (
                      <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
                    )}
                  </div>
                  <button 
                    className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                      cert.status === 'locked'
                        ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] hover:scale-105'
                    }`}
                    disabled={cert.status === 'locked'}
                  >
                    {cert.status === 'locked' ? 'Bloqueado' : 'Baixar Certificado'}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#D4AF37]/10 to-amber-500/10 border border-[#D4AF37]/30 rounded-2xl p-6 text-center">
              <Award className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
              <p className="text-white mb-2">
                Certificados gerados após conclusão de vídeo + quiz + tempo mínimo (2h/dia)
              </p>
              <p className="text-[#9A9A9A] text-sm">
                Certificado próprio ELITE LIFE com assinatura e selo oficial
              </p>
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

      {/* AI Support Chat Button */}
      <button className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full shadow-2xl shadow-[#D4AF37]/30 flex items-center justify-center hover:scale-110 transition-all duration-300 z-50">
        <MessageSquare className="w-8 h-8 text-[#0B0B0B]" />
      </button>

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
            <p className="mt-2 text-xs">
              Simulações educacionais não representam valores reais. Certificados emitidos pela Elite Life.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

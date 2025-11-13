"use client";

import { useState } from "react";
import { 
  Bell, Globe, User, Crown, Lock, Check, Star, TrendingUp, 
  Zap, Video, ShoppingCart, Calendar, Activity, Wallet, 
  Users, Award, MessageSquare, Menu, X,
  ChevronDown, GraduationCap, Trophy, Medal,
  Send, Instagram, Mail, MessageCircle, Home
} from "lucide-react";

export default function EliteLifeHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("pt");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("https://i.pravatar.cc/150?img=12");

  const translations = {
    pt: {
      home: "Início",
      courses: "Cursos",
      videos: "Vídeos",
      agenda: "Agenda",
      tracker: "Tracker",
      wallet: "Carteira",
      influencer: "Influencer Pro",
      ecommerce: "E-commerce",
      affiliates: "Afiliados",
      ranking: "Ranking",
      login: "Entrar",
      signup: "Criar Conta",
      hero: {
        title: "Transforme sua vida em 90 dias",
        subtitle: "Corpo, mente e dinheiro no mesmo lugar. + de 50K alunos transformados."
      }
    },
    en: {
      home: "Home",
      courses: "Courses",
      videos: "Videos",
      agenda: "Schedule",
      tracker: "Tracker",
      wallet: "Wallet",
      influencer: "Influencer Pro",
      ecommerce: "E-commerce",
      affiliates: "Affiliates",
      ranking: "Ranking",
      login: "Login",
      signup: "Sign Up",
      hero: {
        title: "Transform your life in 90 days",
        subtitle: "Body, mind and money in one place. + 50K students transformed."
      }
    },
    es: {
      home: "Inicio",
      courses: "Cursos",
      videos: "Videos",
      agenda: "Agenda",
      tracker: "Tracker",
      wallet: "Cartera",
      influencer: "Influencer Pro",
      ecommerce: "E-commerce",
      affiliates: "Afiliados",
      ranking: "Ranking",
      login: "Entrar",
      signup: "Crear Cuenta",
      hero: {
        title: "Transforma tu vida en 90 días",
        subtitle: "Cuerpo, mente y dinero en un solo lugar. + de 50K alumnos transformados."
      }
    }
  };

  const t = translations[language as keyof typeof translations];

  const languages = [
    { code: "pt", label: "Português", flag: "🇧🇷" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ];

  const notifications = [
    { id: 1, title: "Boas-vindas!", message: "Bem-vindo à Elite Life!", time: "Agora", read: false },
    { id: 2, title: "Desconto disponível", message: "Cupom de 5% liberado: ELITE5OFF", time: "1h atrás", read: false },
  ];

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
        "Agenda básica",
        "Tracker básico",
        "Quiz inicial"
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
        "+ de 100 cursos",
        "1000 atividades",
        "IA de suporte",
        "Certificados"
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
        "Sistema de medalhas"
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
        "IA Premium",
        "Chat social",
        "Carteira Personalizada"
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
        "Todos os recursos ELITE",
        "Pagamento anual",
        "Certificados completos",
        "Suporte exclusivo"
      ]
    },
    {
      id: 6,
      name: "INFLUENCER PRO",
      price: "R$ 39,99",
      period: "/mês",
      badge: "Criadores",
      badgeColor: "bg-gradient-to-r from-pink-400 to-rose-600",
      color: "from-rose-400 to-pink-600",
      icon: Video,
      features: [
        "IA cria thumbnails",
        "Scripts virais",
        "400 dietas de famosos",
        "Hashtags virais"
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
        "Mercado Livre, Amazon",
        "+1000 atividades",
        "Tráfego pago",
        "Certificado E-commerce"
      ]
    }
  ];

  const stats = [
    { label: "+ de 50K alunos transformados", value: "50K+" },
    { label: "+ de 100 cursos", value: "100+" },
    { label: "+ de 1000 atividades", value: "1000+" },
    { label: "Certificados ELITE LIFE", value: "✓" }
  ];

  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Empreendedora Digital",
      image: "https://i.pravatar.cc/150?img=1",
      text: "Elite Life mudou completamente minha vida! Em 3 meses perdi 12kg e aumentei minha renda em 40%.",
      rating: 5
    },
    {
      name: "Carlos Eduardo",
      role: "Influencer",
      image: "https://i.pravatar.cc/150?img=3",
      text: "O módulo Influencer Pro me ajudou a crescer de 5k para 50k seguidores em 2 meses.",
      rating: 5
    },
    {
      name: "Juliana Costa",
      role: "Vendedora E-commerce",
      image: "https://i.pravatar.cc/150?img=5",
      text: "Faturei R$ 15 mil no primeiro mês aplicando as estratégias do curso de E-commerce.",
      rating: 5
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] w-full overflow-x-hidden">
      {/* HEADER FIXO */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] border-b border-[#D4AF37]/20 backdrop-blur-lg">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo e Nome */}
            <div className="flex items-center gap-3">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/63e7ff74-0183-4d37-90a3-89096c2f65ac.jpg" 
                alt="Elite Life Logo" 
                className="h-12 w-12 rounded-xl shadow-lg object-cover"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-amber-600 bg-clip-text text-transparent">
                Elite Life
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">{t.home}</span>
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300">
                <GraduationCap className="w-5 h-5" />
                <span className="font-medium">{t.courses}</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-red-500/10 hover:text-red-400 transition-all duration-300">
                <Video className="w-5 h-5" />
                <span className="font-medium">{t.videos}</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{t.agenda}</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-green-500/10 hover:text-green-400 transition-all duration-300">
                <Activity className="w-5 h-5" />
                <span className="font-medium">{t.tracker}</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300">
                <Wallet className="w-5 h-5" />
                <span className="font-medium">{t.wallet}</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-pink-500/10 hover:text-pink-400 transition-all duration-300">
                <Video className="w-5 h-5" />
                <span className="font-medium text-sm">{t.influencer}</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300">
                <ShoppingCart className="w-5 h-5" />
                <span className="font-medium">{t.ecommerce}</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300">
                <Users className="w-5 h-5" />
                <span className="font-medium">{t.affiliates}</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white hover:bg-yellow-500/10 hover:text-yellow-400 transition-all duration-300">
                <Trophy className="w-5 h-5" />
                <span className="font-medium">{t.ranking}</span>
              </button>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Social Links */}
              <div className="hidden md:flex items-center gap-2">
                <a 
                  href="https://www.instagram.com/elitelife_experience?igsh=MWlhZzh0NGgxNTR1ag%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://t.me/boost/elitelifeApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  <Send className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://discord.gg/yVPMQG8tkh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://whatsapp.com/channel/0029Vb79nXTBvvsjVktkoE05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                </a>
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#D4AF37]/10 transition-all duration-300"
                >
                  <Bell className="w-5 h-5 text-white" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-bold">
                    2
                  </span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-[#1A1A1A] rounded-2xl shadow-2xl border border-[#D4AF37]/20 p-4 z-50">
                    <h3 className="text-white font-bold mb-4">Notificações</h3>
                    <div className="space-y-3">
                      {notifications.map(notif => (
                        <div 
                          key={notif.id} 
                          className={`p-3 rounded-xl ${notif.read ? 'bg-[#2A2A2A]' : 'bg-[#D4AF37]/10'} cursor-pointer hover:bg-[#D4AF37]/20 transition-all`}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="text-white font-semibold text-sm">{notif.title}</h4>
                            <span className="text-xs text-[#9A9A9A]">{notif.time}</span>
                          </div>
                          <p className="text-[#9A9A9A] text-sm">{notif.message}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Language */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#D4AF37]/10 transition-all duration-300"
                >
                  <Globe className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium text-white">{language.toUpperCase()}</span>
                </button>

                {showLanguageMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-[#1A1A1A] rounded-2xl shadow-2xl border border-[#D4AF37]/20 p-2 z-50">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLanguageMenu(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#D4AF37]/10 transition-all text-left"
                      >
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="text-white font-medium">{lang.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* User Menu */}
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 hover:shadow-lg transition-all duration-300"
                  >
                    <img src={userAvatar} alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                    <span className="hidden sm:block text-sm font-bold text-[#0B0B0B]">{userName}</span>
                    <ChevronDown className="w-4 h-4 text-[#0B0B0B]" />
                  </button>
                </div>
              ) : (
                <div className="hidden sm:flex items-center gap-2">
                  <button className="px-4 py-2.5 rounded-xl text-white hover:bg-[#1A1A1A] transition-all duration-300 font-medium">
                    {t.login}
                  </button>
                  <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold hover:shadow-lg transition-all duration-300">
                    {t.signup}
                  </button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#1A1A1A] border-t border-[#D4AF37]/20">
            <div className="w-full max-w-[1920px] mx-auto px-4 py-4 space-y-2">
              {/* Social Links Mobile */}
              <div className="grid grid-cols-2 gap-2 pb-4 border-b border-[#D4AF37]/20">
                <a 
                  href="https://www.instagram.com/elitelife_experience?igsh=MWlhZzh0NGgxNTR1ag%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600"
                >
                  <Instagram className="w-5 h-5 text-white" />
                  <span className="text-white font-medium text-sm">Instagram</span>
                </a>
                <a 
                  href="https://t.me/boost/elitelifeApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600"
                >
                  <Send className="w-5 h-5 text-white" />
                  <span className="text-white font-medium text-sm">Telegram</span>
                </a>
                <a 
                  href="https://discord.gg/yVPMQG8tkh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-medium text-sm">Discord</span>
                </a>
                <a 
                  href="https://whatsapp.com/channel/0029Vb79nXTBvvsjVktkoE05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span className="text-white font-medium text-sm">WhatsApp</span>
                </a>
              </div>

              <button onClick={scrollToTop} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-[#D4AF37]/10 transition-all">
                <Home className="w-5 h-5" />
                <span>{t.home}</span>
              </button>

              {!isLoggedIn && (
                <div className="pt-4 border-t border-[#D4AF37]/20 space-y-2">
                  <button className="w-full px-4 py-3 rounded-xl text-white bg-[#2A2A2A] hover:bg-[#3A3A3A] transition-all font-medium">
                    {t.login}
                  </button>
                  <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] font-bold">
                    {t.signup}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent"></div>
        
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-[#9A9A9A] mb-8 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Começar Agora Grátis
              </button>
              <button 
                onClick={() => window.location.href = "#planos"}
                className="px-8 py-4 bg-[#1A1A1A] text-white rounded-xl font-bold text-lg hover:bg-[#2A2A2A] transition-all duration-300"
              >
                Ver Planos
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">{stat.value}</div>
                  <div className="text-sm text-[#9A9A9A]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS SECTION */}
      <section id="planos" className="py-20 px-4 bg-[#0B0B0B] w-full">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Escolha Seu Plano
            </h2>
            <p className="text-xl text-[#9A9A9A]">
              Transforme sua vida com o plano perfeito para você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-[#1A1A1A] rounded-3xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                {plan.badge && (
                  <div className={`absolute top-4 right-4 ${plan.badgeColor} px-3 py-1 rounded-full text-xs font-bold`}>
                    {plan.badge}
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-[#D4AF37]">{plan.price}</span>
                  <span className="text-[#9A9A9A]">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-[#9A9A9A]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                  plan.id === 1
                    ? 'bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]'
                    : `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg`
                }`}>
                  {plan.id === 1 ? 'Começar Grátis' : 'Assinar Agora'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 bg-[#0B0B0B] w-full">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Resultados Reais
            </h2>
            <p className="text-xl text-[#9A9A9A]">
              Veja o que nossos alunos estão conquistando
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-3xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-[#D4AF37]"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-[#9A9A9A]">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                
                <p className="text-[#9A9A9A]">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1A1A] border-t border-[#D4AF37]/20 py-12 px-4 w-full">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/63e7ff74-0183-4d37-90a3-89096c2f65ac.jpg" 
                  alt="Elite Life Logo" 
                  className="h-12 w-12 rounded-xl object-cover"
                />
                <h3 className="text-xl font-bold text-white">Elite Life</h3>
              </div>
              <p className="text-[#9A9A9A] text-sm">
                Transformando vidas através de educação de qualidade
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Plataforma</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Cursos</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Vídeos</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Certificados</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Afiliados</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Política de Privacidade</a></li>
                <li><a href="mailto:elitelife.norply@gmail.com" className="text-[#9A9A9A] hover:text-[#D4AF37] transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/elitelife_experience?igsh=MWlhZzh0NGgxNTR1ag%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#2A2A2A] rounded-xl flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="https://t.me/boost/elitelifeApp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#2A2A2A] rounded-xl flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all">
                  <Send className="w-5 h-5 text-white" />
                </a>
                <a href="https://discord.gg/yVPMQG8tkh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#2A2A2A] rounded-xl flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all">
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
                <a href="https://whatsapp.com/channel/0029Vb79nXTBvvsjVktkoE05" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#2A2A2A] rounded-xl flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all">
                  <MessageSquare className="w-5 h-5 text-white" />
                </a>
                <a href="mailto:elitelife.norply@gmail.com" className="w-10 h-10 bg-[#2A2A2A] rounded-xl flex items-center justify-center hover:bg-[#D4AF37]/10 transition-all">
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D4AF37]/20 pt-8 text-center">
            <p className="text-[#9A9A9A] text-sm">
              © 2024 Elite Life. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* AI CHAT BUTTON */}
      <button className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-40">
        <MessageSquare className="w-8 h-8 text-[#0B0B0B]" />
      </button>
    </div>
  );
}

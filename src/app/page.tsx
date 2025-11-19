"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  BookOpen,
  Target,
  Shield,
  Trophy,
  Sparkles,
  Zap,
  Crown,
  Gem,
  Rocket,
  DollarSign,
  BarChart3,
  Brain,
  Heart,
  Briefcase,
  Clock,
  ChevronRight,
  Play,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { NotificationBell } from "@/components/custom/notification-bell";
import { LanguageSwitcher } from "@/components/custom/language-switcher";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  // Redirecionar usuários autenticados para /home (com controle de estado)
  useEffect(() => {
    if (isAuthenticated && !shouldRedirect) {
      setShouldRedirect(true);
      // Usar replace em vez de push para evitar loops
      router.replace("/home");
    }
  }, [isAuthenticated, shouldRedirect, router]);

  // Se está autenticado e vai redirecionar, mostrar loading
  if (isAuthenticated && shouldRedirect) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#D4AF37] font-semibold">Redirecionando...</p>
        </div>
      </div>
    );
  }

  const benefits = [
    {
      icon: <Crown className="w-10 h-10" />,
      title: "Educação Premium",
      description: "Cursos exclusivos desenvolvidos por especialistas milionários e referências de mercado",
      gradient: "from-amber-500 to-yellow-600"
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Retorno Garantido",
      description: "Metodologia comprovada que já gerou mais de R$ 100 milhões em resultados para nossos alunos",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Networking de Elite",
      description: "Conecte-se com empreendedores de alto nível e faça parte de uma comunidade exclusiva",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Aceleração de Resultados",
      description: "Sistema gamificado que acelera seu progresso e mantém você no topo da performance",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "IA Personalizada",
      description: "Inteligência artificial que cria seu plano de ação personalizado baseado em seus objetivos",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Garantia Total",
      description: "7 dias para testar. Não gostou? Devolvemos 100% do investimento sem perguntas",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const modules = [
    {
      name: "Finanças & Investimentos",
      description: "Do zero ao primeiro milhão: estratégias reais de quem já chegou lá",
      color: "from-green-400 via-emerald-500 to-teal-600",
      icon: <DollarSign className="w-8 h-8" />,
      lessons: "48 aulas"
    },
    {
      name: "Mindset Milionário",
      description: "Reprograme sua mente para o sucesso e desenvolva mentalidade de abundância",
      color: "from-purple-400 via-violet-500 to-indigo-600",
      icon: <Brain className="w-8 h-8" />,
      lessons: "36 aulas"
    },
    {
      name: "Alta Performance",
      description: "Técnicas de produtividade dos CEOs mais bem-sucedidos do mundo",
      color: "from-blue-400 via-cyan-500 to-sky-600",
      icon: <Zap className="w-8 h-8" />,
      lessons: "42 aulas"
    },
    {
      name: "Saúde & Energia",
      description: "Corpo e mente de atleta: a base física do sucesso sustentável",
      color: "from-pink-400 via-rose-500 to-red-600",
      icon: <Heart className="w-8 h-8" />,
      lessons: "30 aulas"
    },
    {
      name: "E-commerce Avançado",
      description: "Construa um império digital: do primeiro produto ao primeiro milhão",
      color: "from-orange-400 via-amber-500 to-yellow-600",
      icon: <Briefcase className="w-8 h-8" />,
      lessons: "54 aulas"
    },
    {
      name: "Marketing de Impacto",
      description: "Domine as estratégias que geram vendas milionárias todos os dias",
      color: "from-red-400 via-pink-500 to-rose-600",
      icon: <BarChart3 className="w-8 h-8" />,
      lessons: "45 aulas"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Empreendedor Digital",
      avatar: "https://i.pravatar.cc/150?img=12",
      text: "Faturei R$ 180 mil no primeiro ano aplicando as estratégias da Elite Life. Hoje tenho liberdade financeira e tempo para minha família.",
      revenue: "R$ 180K",
      time: "8 meses"
    },
    {
      name: "Juliana Costa",
      role: "Investidora",
      avatar: "https://i.pravatar.cc/150?img=45",
      text: "Saí do zero para uma carteira de R$ 500 mil em investimentos. A metodologia é simplesmente transformadora!",
      revenue: "R$ 500K",
      time: "1 ano"
    },
    {
      name: "Ricardo Alves",
      role: "CEO E-commerce",
      avatar: "https://i.pravatar.cc/150?img=33",
      text: "Meu e-commerce passou de R$ 10K para R$ 250K/mês em 8 meses. Elite Life foi o melhor investimento da minha vida.",
      revenue: "R$ 250K/mês",
      time: "8 meses"
    }
  ];

  const stats = [
    { value: "50K+", label: "Alunos Elite", icon: <Users className="w-8 h-8" /> },
    { value: "R$ 100M+", label: "Gerados pelos Alunos", icon: <DollarSign className="w-8 h-8" /> },
    { value: "100+", label: "Cursos Premium", icon: <BookOpen className="w-8 h-8" /> },
    { value: "98%", label: "Satisfação", icon: <Star className="w-8 h-8" /> }
  ];

  const features = [
    { icon: <Target className="w-6 h-6" />, text: "Aulas em vídeo 4K" },
    { icon: <BookOpen className="w-6 h-6" />, text: "Material complementar" },
    { icon: <Award className="w-6 h-6" />, text: "Certificado reconhecido" },
    { icon: <Users className="w-6 h-6" />, text: "Comunidade exclusiva" },
    { icon: <Zap className="w-6 h-6" />, text: "Suporte prioritário" },
    { icon: <Trophy className="w-6 h-6" />, text: "Sistema de gamificação" }
  ];

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Header Premium com Logo e Sino de Notificações */}
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
                <p className="text-[8px] sm:text-[10px] text-[#D4AF37]/70 font-semibold tracking-widest uppercase hidden sm:block">Transforme sua vida</p>
              </div>
            </Link>
            
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Ícone de Idiomas */}
              <LanguageSwitcher />
              
              {/* Sino de Notificações */}
              <NotificationBell />
              
              <Link
                href="/auth/login"
                className="hidden md:block px-4 sm:px-6 py-2 sm:py-2.5 text-white hover:text-[#D4AF37] transition-all font-semibold text-sm sm:text-base"
              >
                Entrar
              </Link>
              <Link
                href="/plans"
                className="px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-full font-bold hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105 text-xs sm:text-base"
              >
                Começar Agora
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-white hover:text-[#D4AF37] transition-colors"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/98 border-t border-[#D4AF37]/30 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/auth/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all font-semibold"
              >
                Entrar na Plataforma
              </Link>
              <Link
                href="/plans"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-lg font-bold text-center"
              >
                Ver Planos
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section Ultra Premium */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent" />
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Logo Central */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#D4AF37]/30 blur-3xl rounded-full animate-pulse" />
                <img
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e22a0287-4560-4daf-af81-6b17c1eb9768.jpg"
                  alt="Elite Life"
                  className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 object-contain rounded-2xl drop-shadow-[0_0_50px_rgba(212,175,55,0.9)] group-hover:drop-shadow-[0_0_70px_rgba(212,175,55,1)] transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Nome ELITE LIFE */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 tracking-wider mb-3 drop-shadow-[0_0_40px_rgba(212,175,55,0.6)]">
                ELITE LIFE
              </h1>
              <div className="flex items-center justify-center gap-3">
                <div className="h-1 w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse" />
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] animate-pulse" />
                <div className="h-1 w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse" />
              </div>
            </div>

            {/* Badge Premium */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37]/20 to-amber-500/20 border border-[#D4AF37]/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 backdrop-blur-sm hover:border-[#D4AF37] transition-all group">
              <Gem className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
              <span className="text-[#D4AF37] font-bold text-xs sm:text-base">Mais de 50 mil vidas transformadas</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:-rotate-12 transition-transform" />
            </div>
            
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight px-4">
              Transforme sua vida
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                em 90 dias
              </span>
            </h2>
            
            {/* Subheadline */}
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2 sm:mb-3 font-light max-w-4xl mx-auto px-4">
              A plataforma completa para quem quer alcançar
            </p>
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Liberdade Financeira</span>
              {" • "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">Corpo Saudável</span>
              {" • "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Mente Poderosa</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4">
              <Link
                href="/plans"
                className="w-full sm:w-auto group px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-full font-black text-base sm:text-xl hover:shadow-2xl hover:shadow-[#D4AF37]/60 transition-all transform hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <span className="relative z-10">Começar Agora Grátis</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="/plans"
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white/5 backdrop-blur-sm border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-bold text-base sm:text-xl hover:bg-[#D4AF37] hover:text-black transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Ver Planos Premium
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-gray-400 text-sm sm:text-base px-4">
              <div className="flex items-center gap-2 group">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2 group">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">Cancele quando quiser</span>
              </div>
              <div className="flex items-center gap-2 group">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#D4AF37]/10 via-amber-500/10 to-yellow-600/10 border-y border-[#D4AF37]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-amber-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-[#D4AF37]/30">
                  <div className="text-black">{stat.icon}</div>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-4 sm:mb-6 hover:bg-[#D4AF37]/20 transition-all">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold text-sm sm:text-base">Benefícios Exclusivos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 px-4">
              Por que a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">ELITE LIFE</span> é
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                diferente de tudo
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Não é apenas mais um curso. É uma transformação completa do seu estilo de vida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all" />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm sm:text-base">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-4 sm:mb-6 hover:bg-[#D4AF37]/20 transition-all">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold text-sm sm:text-base">Conteúdo Premium</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 px-4">
              Módulos de
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                Transformação Total
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Cada área da sua vida otimizada com metodologias comprovadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${module.color} group-hover:scale-110 transition-transform shadow-lg`}>
                      <div className="text-white">{module.icon}</div>
                    </div>
                    <div className="flex items-center gap-2 text-[#D4AF37] text-xs sm:text-sm font-semibold">
                      <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{module.lessons}</span>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {module.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-300 transition-colors text-sm sm:text-base">{module.description}</p>
                  
                  <div className="flex items-center gap-2 text-[#D4AF37] font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-sm sm:text-base">
                    <span>Explorar módulo</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-2 sm:gap-3 p-4 sm:p-6 bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105 cursor-pointer group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-black">{feature.icon}</div>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-4 sm:mb-6 hover:bg-[#D4AF37]/20 transition-all">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold text-sm sm:text-base">Resultados Reais</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 px-4">
              Histórias de
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
                Sucesso Comprovado
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Mais de 50 mil alunos já transformaram suas vidas com a <span className="text-[#D4AF37] font-bold">ELITE LIFE</span>. Você é o próximo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105 overflow-hidden group"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all" />
                
                <div className="absolute -top-4 right-4 sm:right-8 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg">
                  <span className="text-white font-bold text-xs sm:text-sm">{testimonial.revenue}</span>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#D4AF37]"
                      />
                      <div>
                        <div className="text-white font-bold text-base sm:text-lg">{testimonial.name}</div>
                        <div className="text-[#D4AF37] text-xs sm:text-sm font-semibold">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{testimonial.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent border-y border-[#D4AF37]/20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#D4AF37]/30 blur-3xl rounded-full animate-pulse" />
              <img
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e22a0287-4560-4daf-af81-6b17c1eb9768.jpg"
                alt="Elite Life"
                className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain rounded-2xl drop-shadow-[0_0_50px_rgba(212,175,55,0.9)] group-hover:drop-shadow-[0_0_70px_rgba(212,175,55,1)] transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 mb-4 tracking-wider drop-shadow-[0_0_40px_rgba(212,175,55,0.5)]">
            ELITE LIFE
          </h2>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 px-4">
            Pronto para se tornar
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">
              a melhor versão de si mesmo?
            </span>
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Junte-se a mais de 50 mil alunos que já estão vivendo a vida dos seus sonhos
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <Link
              href="/plans"
              className="w-full sm:w-auto group px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-full font-black text-base sm:text-xl hover:shadow-2xl hover:shadow-[#D4AF37]/60 transition-all transform hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden"
            >
              <span className="relative z-10">Começar Agora Gratuitamente</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/plans"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white/5 backdrop-blur-sm border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-bold text-base sm:text-xl hover:bg-[#D4AF37] hover:text-black transition-all transform hover:scale-105"
            >
              Ver Todos os Planos
            </Link>
          </div>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-gray-400 text-sm sm:text-base px-4">
            <div className="flex items-center gap-2 group">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="font-semibold group-hover:text-white transition-colors">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2 group">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="font-semibold group-hover:text-white transition-colors">Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2 group">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="font-semibold group-hover:text-white transition-colors">Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#D4AF37]/20 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-3 sm:gap-4 mb-4 group w-fit">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-full group-hover:bg-[#D4AF37]/30 transition-all" />
                  <img
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e22a0287-4560-4daf-af81-6b17c1eb9768.jpg"
                    alt="Elite Life Logo"
                    className="relative w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.8)] transition-all group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-400 to-yellow-500 tracking-wider group-hover:from-amber-400 group-hover:to-yellow-600 transition-all">
                    ELITE LIFE
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#D4AF37]/70 font-semibold tracking-widest uppercase">Transforme sua vida</p>
                </div>
              </Link>
              <p className="text-gray-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                A plataforma completa para transformar sua vida financeira, física e mental. 
                Mais de 50 mil alunos já alcançaram seus objetivos.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-gray-400 font-semibold text-xs sm:text-sm">4.9/5 (12.450 avaliações)</span>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-4">Plataforma</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/plans" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group text-sm sm:text-base">
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Planos e Preços
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group text-sm sm:text-base">
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Área do Aluno
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group text-sm sm:text-base">
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group text-sm sm:text-base">
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-[#D4AF37]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-gray-400 text-center md:text-left">
              © 2025 <span className="text-[#D4AF37] font-bold">ELITE LIFE</span>. Todos os direitos reservados.
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs sm:text-sm">Pagamento 100% Seguro</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs sm:text-sm">Certificado Reconhecido</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { useBackupSystem } from "@/lib/backup-system";
import ProgressChart from "@/components/custom/progress-chart";
import {
  BookOpen,
  Video,
  Calendar,
  Target,
  Trophy,
  Sparkles,
  Wallet,
  CreditCard,
  Users,
  Activity,
  Award,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
  TrendingUp,
  Clock,
  Star,
  Zap,
  Crown,
  Lock,
  Menu,
  X
} from "lucide-react";

export default function HomePage() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const { autoBackup } = useBackupSystem();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, router]);

  // Backup automático no login
  useEffect(() => {
    if (user && isAuthenticated) {
      autoBackup(user.id, user, "login");
    }
  }, [user, isAuthenticated]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const handleLockedFeature = () => {
    setShowUpgradePopup(true);
    setTimeout(() => setShowUpgradePopup(false), 3000);
  };

  const mainFeatures = [
    {
      title: "Cursos",
      description: "Acesse todos os cursos disponíveis",
      icon: <BookOpen className="w-8 h-8" />,
      href: "/courses",
      gradient: "from-blue-500 to-cyan-600",
      locked: false
    },
    {
      title: "Vídeos",
      description: "Biblioteca completa de vídeos",
      icon: <Video className="w-8 h-8" />,
      href: "/videos",
      gradient: "from-purple-500 to-pink-600",
      locked: false
    },
    {
      title: "Agenda",
      description: "Organize sua rotina de estudos",
      icon: <Calendar className="w-8 h-8" />,
      href: "/agenda",
      gradient: "from-green-500 to-emerald-600",
      locked: false
    },
    {
      title: "Tracker",
      description: "Acompanhe seu progresso",
      icon: <Target className="w-8 h-8" />,
      href: "/tracker",
      gradient: "from-orange-500 to-red-600",
      locked: false
    },
    {
      title: "Ranking",
      description: "Veja sua posição e medalhas",
      icon: <Trophy className="w-8 h-8" />,
      href: "/ranking",
      gradient: "from-amber-500 to-yellow-600",
      locked: false
    },
    {
      title: "Influencer Pro",
      description: "IA para criadores de conteúdo",
      icon: <Sparkles className="w-8 h-8" />,
      href: "/influencer-pro",
      gradient: "from-pink-500 to-rose-600",
      locked: user.plano_atual === "free"
    },
    {
      title: "Carteira",
      description: "Gestão de investimentos",
      icon: <Wallet className="w-8 h-8" />,
      href: "/carteira",
      gradient: "from-teal-500 to-cyan-600",
      locked: false
    },
    {
      title: "E-commerce",
      description: "Loja e produtos digitais",
      icon: <CreditCard className="w-8 h-8" />,
      href: "/ecommerce",
      gradient: "from-indigo-500 to-purple-600",
      locked: false
    },
    {
      title: "Atividades",
      description: "Exercícios e tarefas",
      icon: <Activity className="w-8 h-8" />,
      href: "/activities",
      gradient: "from-rose-500 to-pink-600",
      locked: false
    },
    {
      title: "Quizzes",
      description: "Teste seus conhecimentos",
      icon: <Award className="w-8 h-8" />,
      href: "/quizzes",
      gradient: "from-violet-500 to-purple-600",
      locked: false
    },
    {
      title: "Certificados",
      description: "Seus certificados conquistados",
      icon: <FileText className="w-8 h-8" />,
      href: "/certificados",
      gradient: "from-sky-500 to-blue-600",
      locked: false
    },
    {
      title: "Afiliados",
      description: "Programa de indicação",
      icon: <Users className="w-8 h-8" />,
      href: "/afiliados",
      gradient: "from-emerald-500 to-teal-600",
      locked: true
    },
    {
      title: "IA de Saúde",
      description: "Dieta e treino personalizados",
      icon: <Activity className="w-8 h-8" />,
      href: "/health-ai",
      gradient: "from-green-500 to-emerald-600",
      locked: false
    },
    {
      title: "IA Financeira",
      description: "Coach de finanças pessoais",
      icon: <TrendingUp className="w-8 h-8" />,
      href: "/finance-ai",
      gradient: "from-blue-500 to-cyan-600",
      locked: false
    },
    {
      title: "IA de Saúde",
      description: "Dieta e treino personalizados",
      icon: <Activity className="w-8 h-8" />,
      href: "/health-ai",
      gradient: "from-green-500 to-emerald-600",
      locked: false
    },
    {
      title: "IA Financeira",
      description: "Coach de finanças pessoais",
      icon: <TrendingUp className="w-8 h-8" />,
      href: "/finance-ai",
      gradient: "from-blue-500 to-cyan-600",
      locked: false
    },
    {
      title: "IA de Saúde",
      description: "Dieta e treino personalizados",
      icon: <Activity className="w-8 h-8" />,
      href: "/health-ai",
      gradient: "from-green-500 to-emerald-600",
      locked: false
    },
    {
      title: "IA Financeira",
      description: "Coach de finanças pessoais",
      icon: <TrendingUp className="w-8 h-8" />,
      href: "/finance-ai",
      gradient: "from-blue-500 to-cyan-600",
      locked: false
    },
    {
      title: "IA de Saúde",
      description: "Dieta e treino personalizados",
      icon: <Activity className="w-8 h-8" />,
      href: "/health-ai",
      gradient: "from-green-500 to-emerald-600",
      locked: false
    },
    {
      title: "IA Financeira",
      description: "Coach de finanças pessoais",
      icon: <TrendingUp className="w-8 h-8" />,
      href: "/finance-ai",
      gradient: "from-blue-500 to-cyan-600",
      locked: false
    },
    {
      title: "IA de Saúde",
      description: "Dieta e treino personalizados",
      icon: <Activity className="w-8 h-8" />,
      href: "/health-ai",
      gradient: "from-green-500 to-emerald-600",
      locked: false
    },
    {
      title: "IA Financeira",
      description: "Coach de finanças pessoais",
      icon: <TrendingUp className="w-8 h-8" />,
      href: "/finance-ai",
      gradient: "from-blue-500 to-cyan-600",
      locked: false
    },
    {
      title: "IA de Saúde",
      description: "Dieta e treino personalizados",
      icon: <Activity className="w-8 h-8" />,
      href: "/health-ai",
      gradient: "from-green-500 to-emerald-600",
      locked: false
    },
    {
      title: "IA Financeira",
      description: "Coach de finanças pessoais",
      icon: <TrendingUp className="w-8 h-8" />,
      href: "/finance-ai",
      gradient: "from-blue-500 to-cyan-600",
      locked: false
    }
  ];

  const stats = [
    { label: "XP Total", value: user.pontos || 0, icon: <Zap className="w-5 h-5" />, color: "text-yellow-400" },
    { label: "Cursos Concluídos", value: user.cursos_concluidos || 0, icon: <BookOpen className="w-5 h-5" />, color: "text-blue-400" },
    { label: "Medalha Atual", value: user.medalha_atual || "Iniciante", icon: <Trophy className="w-5 h-5" />, color: "text-amber-400" },
    { label: "Plano", value: user.plano_atual === "free" ? "Gratuito" : user.plano_atual?.toUpperCase(), icon: <Crown className="w-5 h-5" />, color: "text-purple-400" }
  ];

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/30 z-50 shadow-2xl shadow-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/home" className="flex items-center gap-2 sm:gap-3 group">
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
                <p className="text-[8px] sm:text-[10px] text-[#D4AF37]/70 font-semibold tracking-widest uppercase hidden sm:block">Dashboard</p>
              </div>
            </Link>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                href="/profile"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-white hover:text-[#D4AF37] transition-all"
              >
                <img
                  src={user.foto_perfil || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
                  alt="Perfil"
                  className="w-8 h-8 rounded-full border-2 border-[#D4AF37]"
                />
                <span className="font-semibold">{user.nome || user.email}</span>
              </Link>
              
              <Link
                href="/settings"
                className="hidden md:block p-2 text-white hover:text-[#D4AF37] transition-all"
              >
                <Settings className="w-6 h-6" />
              </Link>
              
              <button
                onClick={handleLogout}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition-all"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-semibold">Sair</span>
              </button>
              
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
                href="/profile"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all"
              >
                <img
                  src={user.foto_perfil || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
                  alt="Perfil"
                  className="w-8 h-8 rounded-full border-2 border-[#D4AF37]"
                />
                <span className="font-semibold">{user.nome || user.email}</span>
              </Link>
              <Link
                href="/settings"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all"
              >
                <Settings className="w-5 h-5" />
                <span className="font-semibold">Configurações</span>
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleLogout();
                }}
                className="w-full flex items-center gap-3 px-4 py-3 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition-all"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-semibold">Sair</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
              Bem-vindo de volta, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">{user.nome || "Elite"}</span>!
            </h2>
            <p className="text-gray-400 text-lg">Continue sua jornada de transformação</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-4 sm:p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={stat.color}>{stat.icon}</div>
                  <span className="text-gray-400 text-sm font-medium">{stat.label}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Progress Chart */}
          <div className="mb-8 sm:mb-12">
            <ProgressChart />
          </div>

          {/* Progress Chart */}
          <div className="mb-8 sm:mb-12">
            <ProgressChart />
          </div>

          {/* Progress Chart */}
          <div className="mb-8 sm:mb-12">
            <ProgressChart />
          </div>

          {/* Progress Chart */}
          <div className="mb-8 sm:mb-12">
            <ProgressChart />
          </div>

          {/* Progress Chart */}
          <div className="mb-8 sm:mb-12">
            <ProgressChart />
          </div>

          {/* Quick Actions */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl sm:text-3xl font-black text-white">Acesso Rápido</h3>
              <Link
                href="/plans"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black rounded-full font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
              >
                <Crown className="w-5 h-5" />
                <span className="hidden sm:inline">Upgrade</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {mainFeatures.map((feature, index) => (
                <div key={index}>
                  {feature.locked ? (
                    <button
                      onClick={handleLockedFeature}
                      className="w-full group relative bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105 cursor-pointer overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      <div className="absolute top-4 right-4">
                        <Lock className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div className="relative z-10">
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                          <div className="text-white">{feature.icon}</div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{feature.description}</p>
                      </div>
                    </button>
                  ) : (
                    <Link
                      href={feature.href}
                      className="block group relative bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all hover:scale-105 cursor-pointer overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      <div className="relative z-10">
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                          <div className="text-white">{feature.icon}</div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{feature.description}</p>
                        <div className="flex items-center gap-2 text-[#D4AF37] font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Acessar</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Upgrade Popup */}
      {showUpgradePopup && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
          <div className="bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black px-6 py-4 rounded-2xl shadow-2xl shadow-[#D4AF37]/50 border-2 border-yellow-400 flex items-center gap-3">
            <Lock className="w-6 h-6" />
            <div>
              <p className="font-black text-lg">Recurso Exclusivo</p>
              <p className="text-sm font-semibold">Assine um plano Elite Life para desbloquear</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

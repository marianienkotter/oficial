"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Trophy,
  Medal,
  Crown,
  Star,
  TrendingUp,
  Flame,
  Zap,
  Target,
  Award,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  ArrowUp,
  ArrowDown,
  Minus
} from "lucide-react";
import { useAuth } from "@/lib/auth-context";

interface RankingUser {
  id: string;
  name: string;
  avatar: string;
  level: number;
  totalPoints: number;
  weeklyPoints: number;
  streak: number;
  medals: number;
  rank: number;
  previousRank: number;
}

export default function RankingPage() {
  const { user, isAuthenticated } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "week" | "month">("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mock ranking data
  const rankingUsers: RankingUser[] = [
    {
      id: "1",
      name: "Carlos Silva",
      avatar: "https://i.pravatar.cc/150?img=12",
      level: 45,
      totalPoints: 45800,
      weeklyPoints: 2450,
      streak: 89,
      medals: 24,
      rank: 1,
      previousRank: 1
    },
    {
      id: "2",
      name: "Ana Costa",
      avatar: "https://i.pravatar.cc/150?img=45",
      level: 42,
      totalPoints: 42300,
      weeklyPoints: 2100,
      streak: 76,
      medals: 21,
      rank: 2,
      previousRank: 3
    },
    {
      id: "3",
      name: "Pedro Santos",
      avatar: "https://i.pravatar.cc/150?img=33",
      level: 40,
      totalPoints: 39500,
      weeklyPoints: 1980,
      streak: 65,
      medals: 19,
      rank: 3,
      previousRank: 2
    },
    {
      id: "4",
      name: "Juliana Lima",
      avatar: "https://i.pravatar.cc/150?img=25",
      level: 38,
      totalPoints: 36200,
      weeklyPoints: 1850,
      streak: 58,
      medals: 17,
      rank: 4,
      previousRank: 5
    },
    {
      id: "5",
      name: "Ricardo Alves",
      avatar: "https://i.pravatar.cc/150?img=15",
      level: 35,
      totalPoints: 33400,
      weeklyPoints: 1720,
      streak: 52,
      medals: 15,
      rank: 5,
      previousRank: 4
    },
    {
      id: "6",
      name: "Mariana Souza",
      avatar: "https://i.pravatar.cc/150?img=48",
      level: 32,
      totalPoints: 30100,
      weeklyPoints: 1580,
      streak: 45,
      medals: 13,
      rank: 6,
      previousRank: 7
    },
    {
      id: "7",
      name: "Fernando Dias",
      avatar: "https://i.pravatar.cc/150?img=52",
      level: 30,
      totalPoints: 28500,
      weeklyPoints: 1450,
      streak: 41,
      medals: 12,
      rank: 7,
      previousRank: 6
    },
    {
      id: "8",
      name: "Camila Rocha",
      avatar: "https://i.pravatar.cc/150?img=38",
      level: 28,
      totalPoints: 26800,
      weeklyPoints: 1320,
      streak: 38,
      medals: 11,
      rank: 8,
      previousRank: 8
    }
  ];

  // Add current user to ranking if authenticated
  const currentUserRanking: RankingUser | null = user ? {
    id: user.id,
    name: user.name,
    avatar: user.avatar,
    level: user.level,
    totalPoints: user.totalPoints,
    weeklyPoints: user.weeklyPoints,
    streak: user.streak,
    medals: user.totalMedals,
    rank: user.ranking || rankingUsers.length + 1,
    previousRank: user.ranking || rankingUsers.length + 1
  } : null;

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-[#FFD700]" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-[#C0C0C0]" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-[#CD7F32]" />;
    return <span className="text-gray-400 font-bold text-lg">#{rank}</span>;
  };

  const getRankChange = (current: number, previous: number) => {
    if (current < previous) return <ArrowUp className="w-4 h-4 text-green-500" />;
    if (current > previous) return <ArrowDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-500" />;
  };

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "from-yellow-500 to-amber-600";
    if (rank === 2) return "from-gray-400 to-gray-600";
    if (rank === 3) return "from-orange-600 to-orange-800";
    return "from-[#D4AF37]/20 to-amber-500/20";
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]">
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
                <p className="text-[8px] sm:text-[10px] text-[#D4AF37]/70 font-semibold tracking-widest uppercase hidden sm:block">Ranking</p>
              </div>
            </Link>
            
            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <Link
                  href="/dashboard"
                  className="hidden md:block px-4 sm:px-6 py-2 sm:py-2.5 text-white hover:text-[#D4AF37] transition-all font-semibold text-sm sm:text-base"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    className="hidden md:block px-4 sm:px-6 py-2 sm:py-2.5 text-white hover:text-[#D4AF37] transition-all font-semibold text-sm sm:text-base"
                  >
                    Entrar
                  </Link>
                  <Link
                    href="/auth/register"
                    className="px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-full font-bold hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105 text-xs sm:text-base"
                  >
                    Criar Conta
                  </Link>
                </>
              )}
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-white hover:text-[#D4AF37] transition-colors"
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
              {isAuthenticated ? (
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all font-semibold"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all font-semibold"
                  >
                    Entrar
                  </Link>
                  <Link
                    href="/auth/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-lg font-bold text-center"
                  >
                    Criar Conta Grátis
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24 pb-24 lg:pb-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6">
            <Trophy className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold">Ranking Global</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            Hall da <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-500">Fama</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Veja quem está dominando a plataforma e alcançando resultados extraordinários
          </p>
        </div>

        {/* Current User Card (if authenticated) */}
        {isAuthenticated && currentUserRanking && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Sua Posição</h2>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border-2 border-[#D4AF37] p-6 shadow-2xl shadow-[#D4AF37]/20">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center">
                    {getRankIcon(currentUserRanking.rank)}
                  </div>
                </div>
                
                <img
                  src={currentUserRanking.avatar}
                  alt={currentUserRanking.name}
                  className="w-16 h-16 rounded-full border-2 border-[#D4AF37]"
                />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white truncate">{currentUserRanking.name}</h3>
                    <span className="text-xs px-2 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full font-bold">
                      Você
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#D4AF37]" />
                      Nível {currentUserRanking.level}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      {currentUserRanking.totalPoints.toLocaleString()} XP
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {getRankChange(currentUserRanking.rank, currentUserRanking.previousRank)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
              filter === "all"
                ? "bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black"
                : "bg-[#2A2A2A] text-gray-400 hover:text-white"
            }`}
          >
            Todos os Tempos
          </button>
          <button
            onClick={() => setFilter("week")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
              filter === "week"
                ? "bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black"
                : "bg-[#2A2A2A] text-gray-400 hover:text-white"
            }`}
          >
            Esta Semana
          </button>
          <button
            onClick={() => setFilter("month")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
              filter === "month"
                ? "bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black"
                : "bg-[#2A2A2A] text-gray-400 hover:text-white"
            }`}
          >
            Este Mês
          </button>
        </div>

        {/* Top 3 Podium (Desktop) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-12">
          {/* 2nd Place */}
          <div className="mt-12">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-gray-600 p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <img
                    src={rankingUsers[1].avatar}
                    alt={rankingUsers[1].name}
                    className="w-24 h-24 rounded-full border-4 border-gray-500"
                  />
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-lg">2</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{rankingUsers[1].name}</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-gray-400">Nível {rankingUsers[1].level}</span>
              </div>
              <div className="text-2xl font-black text-[#D4AF37] mb-2">
                {rankingUsers[1].totalPoints.toLocaleString()} XP
              </div>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-orange-500" />
                  {rankingUsers[1].streak}
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  {rankingUsers[1].medals}
                </span>
              </div>
            </div>
          </div>

          {/* 1st Place */}
          <div>
            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-amber-600/20 rounded-2xl border-2 border-[#D4AF37] p-6 text-center shadow-2xl shadow-[#D4AF37]/30">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <img
                    src={rankingUsers[0].avatar}
                    alt={rankingUsers[0].name}
                    className="w-32 h-32 rounded-full border-4 border-[#D4AF37]"
                  />
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                    <Crown className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{rankingUsers[0].name}</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-[#D4AF37]" />
                <span className="text-gray-300 font-semibold">Nível {rankingUsers[0].level}</span>
              </div>
              <div className="text-3xl font-black text-[#D4AF37] mb-2">
                {rankingUsers[0].totalPoints.toLocaleString()} XP
              </div>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-1">
                  <Flame className="w-5 h-5 text-orange-500" />
                  {rankingUsers[0].streak}
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                  {rankingUsers[0].medals}
                </span>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="mt-12">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-orange-700 p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <img
                    src={rankingUsers[2].avatar}
                    alt={rankingUsers[2].name}
                    className="w-24 h-24 rounded-full border-4 border-orange-700"
                  />
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-lg">3</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{rankingUsers[2].name}</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-gray-400">Nível {rankingUsers[2].level}</span>
              </div>
              <div className="text-2xl font-black text-[#D4AF37] mb-2">
                {rankingUsers[2].totalPoints.toLocaleString()} XP
              </div>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-orange-500" />
                  {rankingUsers[2].streak}
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  {rankingUsers[2].medals}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Ranking List */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Ranking Completo</h2>
          <div className="space-y-4">
            {rankingUsers.map((user) => (
              <div
                key={user.id}
                className={`bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border p-4 sm:p-6 transition-all hover:scale-105 ${
                  user.rank <= 3
                    ? "border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/10"
                    : "border-[#D4AF37]/20"
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Rank */}
                  <div className="flex-shrink-0 w-12 flex items-center justify-center">
                    {getRankIcon(user.rank)}
                  </div>
                  
                  {/* Avatar */}
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 ${
                      user.rank <= 3 ? "border-[#D4AF37]" : "border-gray-600"
                    }`}
                  />
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white truncate mb-1">
                      {user.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]" />
                        Nível {user.level}
                      </span>
                      <span className="flex items-center gap-1">
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                        {user.totalPoints.toLocaleString()} XP
                      </span>
                      <span className="hidden sm:flex items-center gap-1">
                        <Flame className="w-4 h-4 text-orange-500" />
                        {user.streak} dias
                      </span>
                    </div>
                  </div>
                  
                  {/* Rank Change */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {getRankChange(user.rank, user.previousRank)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {!isAuthenticated && (
          <div className="mt-12 text-center bg-gradient-to-br from-[#D4AF37]/10 to-amber-500/10 border border-[#D4AF37]/30 rounded-3xl p-8 sm:p-12">
            <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Entre para o Ranking!
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Crie sua conta gratuitamente e comece sua jornada do zero. Evolua, ganhe pontos e conquiste seu lugar no topo!
            </p>
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-amber-500 to-yellow-600 text-black rounded-full font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all transform hover:scale-105"
            >
              Criar Conta Grátis
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-[#D4AF37]/20 z-50 lg:hidden">
        <div className="flex items-center justify-around py-3">
          <Link href="/dashboard" className="flex flex-col items-center gap-1 text-white hover:text-[#D4AF37] transition-colors">
            <Target className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link href="/ranking" className="flex flex-col items-center gap-1 text-[#D4AF37]">
            <Trophy className="w-6 h-6" />
            <span className="text-xs font-medium">Ranking</span>
          </Link>
          {!isAuthenticated && (
            <Link href="/auth/register" className="flex flex-col items-center gap-1 text-white hover:text-[#D4AF37] transition-colors">
              <Sparkles className="w-6 h-6" />
              <span className="text-xs font-medium">Criar Conta</span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Trophy,
  Medal,
  TrendingUp,
  Crown,
  Star,
  Zap,
  DollarSign,
  Award,
  ChevronLeft,
  Filter,
  Search
} from "lucide-react";

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState<"geral" | "semanal" | "mensal">("geral");
  const [filterCategory, setFilterCategory] = useState<"todos" | "finanças" | "mindset" | "produtividade">("todos");

  // Ranking fictício completo
  const rankingData = [
    {
      position: 1,
      name: "Carlos Mendes",
      avatar: "https://i.pravatar.cc/150?img=12",
      level: 28,
      totalPoints: 45800,
      weeklyPoints: 2850,
      monthlyPoints: 12400,
      medals: 24,
      earnings: 15750.00,
      badge: "👑",
      color: "from-yellow-500 to-amber-600"
    },
    {
      position: 2,
      name: "Ana Silva",
      avatar: "https://i.pravatar.cc/150?img=45",
      level: 26,
      totalPoints: 42300,
      weeklyPoints: 2640,
      monthlyPoints: 11800,
      medals: 22,
      earnings: 14200.00,
      badge: "🥈",
      color: "from-gray-400 to-gray-500"
    },
    {
      position: 3,
      name: "Pedro Santos",
      avatar: "https://i.pravatar.cc/150?img=33",
      level: 25,
      totalPoints: 39500,
      weeklyPoints: 2420,
      monthlyPoints: 10900,
      medals: 20,
      earnings: 12850.00,
      badge: "🥉",
      color: "from-orange-600 to-orange-700"
    },
    {
      position: 4,
      name: "Mariana Costa",
      avatar: "https://i.pravatar.cc/150?img=28",
      level: 24,
      totalPoints: 36700,
      weeklyPoints: 2180,
      monthlyPoints: 9800,
      medals: 19,
      earnings: 11400.00,
      badge: "⭐",
      color: "from-purple-500 to-purple-600"
    },
    {
      position: 5,
      name: "Rafael Oliveira",
      avatar: "https://i.pravatar.cc/150?img=51",
      level: 23,
      totalPoints: 34200,
      weeklyPoints: 2050,
      monthlyPoints: 9200,
      medals: 18,
      earnings: 10650.00,
      badge: "⭐",
      color: "from-blue-500 to-blue-600"
    },
    {
      position: 6,
      name: "Juliana Ferreira",
      avatar: "https://i.pravatar.cc/150?img=38",
      level: 22,
      totalPoints: 31800,
      weeklyPoints: 1920,
      monthlyPoints: 8600,
      medals: 17,
      earnings: 9800.00,
      badge: "💎",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      position: 7,
      name: "Lucas Almeida",
      avatar: "https://i.pravatar.cc/150?img=15",
      level: 21,
      totalPoints: 29400,
      weeklyPoints: 1780,
      monthlyPoints: 8000,
      medals: 16,
      earnings: 9100.00,
      badge: "💎",
      color: "from-green-500 to-green-600"
    },
    {
      position: 8,
      name: "Camila Rodrigues",
      avatar: "https://i.pravatar.cc/150?img=42",
      level: 20,
      totalPoints: 27100,
      weeklyPoints: 1650,
      monthlyPoints: 7400,
      medals: 15,
      earnings: 8400.00,
      badge: "🔥",
      color: "from-red-500 to-red-600"
    },
    {
      position: 9,
      name: "Fernando Lima",
      avatar: "https://i.pravatar.cc/150?img=68",
      level: 19,
      totalPoints: 24800,
      weeklyPoints: 1520,
      monthlyPoints: 6800,
      medals: 14,
      earnings: 7700.00,
      badge: "🔥",
      color: "from-orange-500 to-orange-600"
    },
    {
      position: 10,
      name: "Beatriz Souza",
      avatar: "https://i.pravatar.cc/150?img=25",
      level: 18,
      totalPoints: 22500,
      weeklyPoints: 1390,
      monthlyPoints: 6200,
      medals: 13,
      earnings: 7000.00,
      badge: "⚡",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      position: 11,
      name: "Gabriel Martins",
      avatar: "https://i.pravatar.cc/150?img=56",
      level: 17,
      totalPoints: 20200,
      weeklyPoints: 1260,
      monthlyPoints: 5600,
      medals: 12,
      earnings: 6300.00,
      badge: "⚡",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      position: 12,
      name: "Amanda Pereira",
      avatar: "https://i.pravatar.cc/150?img=31",
      level: 16,
      totalPoints: 18000,
      weeklyPoints: 1130,
      monthlyPoints: 5000,
      medals: 11,
      earnings: 5600.00,
      badge: "🌟",
      color: "from-pink-500 to-pink-600"
    },
    {
      position: 13,
      name: "Thiago Barbosa",
      avatar: "https://i.pravatar.cc/150?img=62",
      level: 15,
      totalPoints: 15800,
      weeklyPoints: 1000,
      monthlyPoints: 4400,
      medals: 10,
      earnings: 4900.00,
      badge: "🌟",
      color: "from-teal-500 to-teal-600"
    },
    {
      position: 14,
      name: "Larissa Gomes",
      avatar: "https://i.pravatar.cc/150?img=47",
      level: 14,
      totalPoints: 13600,
      weeklyPoints: 870,
      monthlyPoints: 3800,
      medals: 9,
      earnings: 4200.00,
      badge: "✨",
      color: "from-violet-500 to-violet-600"
    },
    {
      position: 15,
      name: "Rodrigo Carvalho",
      avatar: "https://i.pravatar.cc/150?img=70",
      level: 13,
      totalPoints: 11400,
      weeklyPoints: 740,
      monthlyPoints: 3200,
      medals: 8,
      earnings: 3500.00,
      badge: "✨",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  // Usuário atual (posição 42)
  const currentUser = {
    position: 42,
    name: "Você (Usuário Elite)",
    avatar: "https://i.pravatar.cc/150?img=12",
    level: 15,
    totalPoints: 12450,
    weeklyPoints: 850,
    monthlyPoints: 3100,
    medals: 8,
    earnings: 3850.00,
    badge: "🎯",
    color: "from-[#D4AF37] to-amber-600"
  };

  const getPointsForTab = (user: typeof rankingData[0]) => {
    switch (activeTab) {
      case "semanal":
        return user.weeklyPoints;
      case "mensal":
        return user.monthlyPoints;
      default:
        return user.totalPoints;
    }
  };

  const getCurrentUserPoints = () => {
    switch (activeTab) {
      case "semanal":
        return currentUser.weeklyPoints;
      case "mensal":
        return currentUser.monthlyPoints;
      default:
        return currentUser.totalPoints;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="w-10 h-10 bg-[#2A2A2A] rounded-xl flex items-center justify-center hover:bg-[#3A3A3A] transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </Link>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-[#D4AF37]" />
                  Ranking Elite Life
                </h1>
                <p className="text-sm text-[#9A9A9A] mt-1">
                  Competição global de pontos, medalhas e ganhos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab("geral")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
              activeTab === "geral"
                ? "bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B]"
                : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]"
            }`}
          >
            Ranking Geral
          </button>
          <button
            onClick={() => setActiveTab("semanal")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
              activeTab === "semanal"
                ? "bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B]"
                : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]"
            }`}
          >
            Semanal
          </button>
          <button
            onClick={() => setActiveTab("mensal")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
              activeTab === "mensal"
                ? "bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B]"
                : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]"
            }`}
          >
            Mensal
          </button>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* 2º Lugar */}
          <div className="md:order-1 order-2">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-gray-400/30 hover:border-gray-400/50 transition-all">
              <div className="text-center mb-4">
                <div className="text-6xl mb-2">🥈</div>
                <div className="text-4xl font-bold text-gray-400 mb-2">2º</div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={rankingData[1].avatar}
                  alt={rankingData[1].name}
                  className="w-20 h-20 rounded-full border-4 border-gray-400 mb-3"
                />
                <h3 className="text-lg font-bold text-white mb-1">{rankingData[1].name}</h3>
                <div className="text-sm text-[#9A9A9A] mb-3">Nível {rankingData[1].level}</div>
                
                <div className="w-full space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#9A9A9A]">Pontos</span>
                    <span className="text-white font-bold">{getPointsForTab(rankingData[1]).toLocaleString()} XP</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#9A9A9A]">Medalhas</span>
                    <span className="text-[#D4AF37] font-bold">{rankingData[1].medals}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#9A9A9A]">Ganhos</span>
                    <span className="text-green-400 font-bold">R$ {rankingData[1].earnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 1º Lugar */}
          <div className="md:order-2 order-1">
            <div className="bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-2xl p-6 border-2 border-[#D4AF37] hover:border-[#D4AF37]/80 transition-all transform md:scale-110">
              <div className="text-center mb-4">
                <div className="text-6xl mb-2">👑</div>
                <div className="text-5xl font-bold text-[#D4AF37] mb-2">1º</div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={rankingData[0].avatar}
                  alt={rankingData[0].name}
                  className="w-24 h-24 rounded-full border-4 border-[#D4AF37] mb-3 shadow-lg shadow-[#D4AF37]/50"
                />
                <h3 className="text-xl font-bold text-white mb-1">{rankingData[0].name}</h3>
                <div className="text-sm text-[#9A9A9A] mb-3">Nível {rankingData[0].level}</div>
                
                <div className="w-full space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#9A9A9A]">Pontos</span>
                    <span className="text-[#D4AF37] font-bold">{getPointsForTab(rankingData[0]).toLocaleString()} XP</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#9A9A9A]">Medalhas</span>
                    <span className="text-[#D4AF37] font-bold">{rankingData[0].medals}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#9A9A9A]">Ganhos</span>
                    <span className="text-green-400 font-bold">R$ {rankingData[0].earnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3º Lugar */}
          <div className="md:order-3 order-3">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-orange-600/30 hover:border-orange-600/50 transition-all">
              <div className="text-center mb-4">
                <div className="text-6xl mb-2">🥉</div>
                <div className="text-4xl font-bold text-orange-600 mb-2">3º</div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={rankingData[2].avatar}
                  alt={rankingData[2].name}
                  className="w-20 h-20 rounded-full border-4 border-orange-600 mb-3"
                />
                <h3 className="text-lg font-bold text-white mb-1">{rankingData[2].name}</h3>
                <div className="text-sm text-[#9A9A9A] mb-3">Nível {rankingData[2].level}</div>
                
                <div className="w-full space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#9A9A9A]">Pontos</span>
                    <span className="text-white font-bold">{getPointsForTab(rankingData[2]).toLocaleString()} XP</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#9A9A9A]">Medalhas</span>
                    <span className="text-[#D4AF37] font-bold">{rankingData[2].medals}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#9A9A9A]">Ganhos</span>
                    <span className="text-green-400 font-bold">R$ {rankingData[2].earnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sua Posição Destacada */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-[#D4AF37]" />
            Sua Posição
          </h2>
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-amber-600/20 rounded-2xl p-6 border-2 border-[#D4AF37]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-[#D4AF37]">#{currentUser.position}</div>
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-16 h-16 rounded-full border-2 border-[#D4AF37]"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">{currentUser.name}</h3>
                  <div className="text-sm text-[#9A9A9A]">Nível {currentUser.level}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-sm text-[#9A9A9A] mb-1">Pontos</div>
                  <div className="text-lg font-bold text-white">{getCurrentUserPoints().toLocaleString()} XP</div>
                </div>
                <div>
                  <div className="text-sm text-[#9A9A9A] mb-1">Medalhas</div>
                  <div className="text-lg font-bold text-[#D4AF37]">{currentUser.medals}</div>
                </div>
                <div>
                  <div className="text-sm text-[#9A9A9A] mb-1">Ganhos</div>
                  <div className="text-lg font-bold text-green-400">R$ {currentUser.earnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lista Completa do Ranking */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Ranking Completo</h2>
          <div className="space-y-3">
            {rankingData.slice(3).map((user) => (
              <div
                key={user.position}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-white w-12 text-center">
                      #{user.position}
                    </div>
                    <div className="text-3xl">{user.badge}</div>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full border-2 border-[#D4AF37]/30"
                    />
                    <div>
                      <h3 className="text-base font-bold text-white">{user.name}</h3>
                      <div className="text-sm text-[#9A9A9A]">Nível {user.level}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-xs text-[#9A9A9A] mb-1">Pontos</div>
                      <div className="text-sm font-bold text-white">{getPointsForTab(user).toLocaleString()} XP</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#9A9A9A] mb-1">Medalhas</div>
                      <div className="text-sm font-bold text-[#D4AF37]">{user.medals}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#9A9A9A] mb-1">Ganhos</div>
                      <div className="text-sm font-bold text-green-400">R$ {user.earnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <div className="text-sm text-[#9A9A9A]">Total de Pontos</div>
                <div className="text-2xl font-bold text-white">12.450 XP</div>
              </div>
            </div>
            <div className="text-sm text-green-400">+850 XP esta semana</div>
          </div>

          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                <Medal className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <div className="text-sm text-[#9A9A9A]">Medalhas Conquistadas</div>
                <div className="text-2xl font-bold text-white">8</div>
              </div>
            </div>
            <div className="text-sm text-[#9A9A9A]">2 medalhas raras</div>
          </div>

          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <div className="text-sm text-[#9A9A9A]">Ganhos Elite Life</div>
                <div className="text-2xl font-bold text-green-400">R$ 3.850,00</div>
              </div>
            </div>
            <div className="text-sm text-green-400">+R$ 420,00 este mês</div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import {
  Trophy,
  Medal,
  Crown,
  Star,
  TrendingUp,
  Filter,
  ChevronLeft,
  Award,
  Target,
  Zap,
  BookOpen,
  Activity
} from "lucide-react";

interface RankingUser {
  id: string;
  nome: string;
  foto_perfil: string;
  pontos: number;
  medalhas: number;
  cursos_concluidos: number;
  atividades_completadas: number;
  plano: string;
  pais?: string;
}

export default function RankingPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [filter, setFilter] = useState<"global" | "semanal" | "mensal">("global");
  const [rankingData, setRankingData] = useState<RankingUser[]>([]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    // Dados de exemplo - em produção viria do banco
    const mockData: RankingUser[] = [
      {
        id: "1",
        nome: "Carlos Silva",
        foto_perfil: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos",
        pontos: 15420,
        medalhas: 28,
        cursos_concluidos: 12,
        atividades_completadas: 156,
        plano: "Elite",
        pais: "Brasil"
      },
      {
        id: "2",
        nome: "Ana Costa",
        foto_perfil: "https://api.dicebear.com/7.x/avataaars/svg?seed=ana",
        pontos: 14890,
        medalhas: 25,
        cursos_concluidos: 11,
        atividades_completadas: 142,
        plano: "Pro Plus",
        pais: "Brasil"
      },
      {
        id: "3",
        nome: "Pedro Santos",
        foto_perfil: "https://api.dicebear.com/7.x/avataaars/svg?seed=pedro",
        pontos: 13750,
        medalhas: 22,
        cursos_concluidos: 10,
        atividades_completadas: 128,
        plano: "Pro Plus",
        pais: "Portugal"
      },
      {
        id: user?.id || "4",
        nome: user?.nome || "Você",
        foto_perfil: user?.foto_perfil || "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
        pontos: user?.pontos || 520,
        medalhas: 3,
        cursos_concluidos: user?.cursos_concluidos || 1,
        atividades_completadas: 12,
        plano: user?.plano_atual || "Free",
        pais: "Brasil"
      },
      {
        id: "5",
        nome: "Maria Oliveira",
        foto_perfil: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
        pontos: 12340,
        medalhas: 20,
        cursos_concluidos: 9,
        atividades_completadas: 115,
        plano: "Pro",
        pais: "Brasil"
      },
      {
        id: "6",
        nome: "João Ferreira",
        foto_perfil: "https://api.dicebear.com/7.x/avataaars/svg?seed=joao",
        pontos: 11200,
        medalhas: 18,
        cursos_concluidos: 8,
        atividades_completadas: 98,
        plano: "Pro",
        pais: "Angola"
      }
    ];

    setRankingData(mockData.sort((a, b) => b.pontos - a.pontos));
  }, [user]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const getMedalIcon = (position: number) => {
    switch (position) {
      case 1:
        return (
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400/30 blur-xl rounded-full animate-pulse" />
            <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 rounded-full">
              <Trophy className="w-6 h-6 text-white drop-shadow-lg" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="relative">
            <div className="absolute inset-0 bg-gray-300/30 blur-xl rounded-full animate-pulse" />
            <div className="relative bg-gradient-to-br from-gray-300 to-gray-500 p-3 rounded-full">
              <Trophy className="w-6 h-6 text-white drop-shadow-lg" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="relative">
            <div className="absolute inset-0 bg-orange-400/30 blur-xl rounded-full animate-pulse" />
            <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 p-3 rounded-full">
              <Trophy className="w-6 h-6 text-white drop-shadow-lg" />
            </div>
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 flex items-center justify-center bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/30">
            <span className="text-lg font-black text-[#D4AF37]">#{position}</span>
          </div>
        );
    }
  };

  const getPlanBadge = (plano: string) => {
    const colors: Record<string, string> = {
      Elite: "from-purple-500 to-pink-600",
      "Pro Plus": "from-blue-500 to-cyan-600",
      Pro: "from-green-500 to-emerald-600",
      Free: "from-gray-500 to-gray-600"
    };

    return (
      <div className={`inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r ${colors[plano] || colors.Free} rounded-full`}>
        <Crown className="w-3 h-3 text-white" />
        <span className="text-xs font-bold text-white">{plano}</span>
      </div>
    );
  };

  const userPosition = rankingData.findIndex(u => u.id === user.id) + 1;

  return (
    <div className="min-h-screen bg-[#000000] pb-12">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/home"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </Link>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">Ranking Global</h1>
              <p className="text-gray-400 mt-1">Veja sua posição e conquiste o topo</p>
            </div>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-3">
            {["global", "semanal", "mensal"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as typeof filter)}
                className={`px-4 py-2 rounded-xl font-bold transition-all ${
                  filter === f
                    ? "bg-gradient-to-r from-[#D4AF37] to-amber-500 text-black"
                    : "bg-black/40 text-gray-400 hover:text-white border border-[#D4AF37]/20"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sua Posição */}
        <div className="bg-gradient-to-br from-[#D4AF37]/20 to-amber-500/20 rounded-2xl p-6 border border-[#D4AF37]/40 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37]/30 blur-xl rounded-full" />
                <img
                  src={user.foto_perfil || "https://api.dicebear.com/7.x/avataaars/svg?seed=default"}
                  alt="Seu perfil"
                  className="relative w-16 h-16 rounded-full border-4 border-[#D4AF37]"
                />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-semibold">Sua Posição Atual</p>
                <p className="text-3xl font-black text-white">#{userPosition}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400 font-semibold">Total de XP</p>
              <p className="text-3xl font-black text-[#D4AF37]">{user.pontos || 0}</p>
            </div>
          </div>
        </div>

        {/* Top 3 Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {rankingData.slice(0, 3).map((userData, index) => (
            <div
              key={userData.id}
              className={`bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl p-6 border ${
                index === 0
                  ? "border-yellow-400/50 shadow-2xl shadow-yellow-400/20"
                  : index === 1
                  ? "border-gray-400/50 shadow-2xl shadow-gray-400/20"
                  : "border-orange-400/50 shadow-2xl shadow-orange-400/20"
              } ${index === 1 ? "md:mt-8" : index === 2 ? "md:mt-12" : ""}`}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {getMedalIcon(index + 1)}
                </div>
                <div className="relative inline-block mb-4">
                  <img
                    src={userData.foto_perfil}
                    alt={userData.nome}
                    className="w-20 h-20 rounded-full border-4 border-[#D4AF37]"
                  />
                  {index === 0 && (
                    <div className="absolute -top-2 -right-2 bg-yellow-400 p-1 rounded-full">
                      <Crown className="w-4 h-4 text-black" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-black text-white mb-1">{userData.nome}</h3>
                {getPlanBadge(userData.plano)}
                <div className="mt-4 pt-4 border-t border-[#D4AF37]/20">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-2xl font-black text-[#D4AF37]">{userData.pontos}</span>
                    <span className="text-sm text-gray-400">XP</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="text-center">
                      <Award className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-400">{userData.medalhas}</p>
                    </div>
                    <div className="text-center">
                      <BookOpen className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-400">{userData.cursos_concluidos}</p>
                    </div>
                    <div className="text-center">
                      <Activity className="w-4 h-4 text-green-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-400">{userData.atividades_completadas}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lista Completa */}
        <div className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl border border-[#D4AF37]/20 overflow-hidden">
          <div className="p-6 border-b border-[#D4AF37]/20">
            <h3 className="text-2xl font-black text-white">Ranking Completo</h3>
          </div>
          <div className="divide-y divide-[#D4AF37]/10">
            {rankingData.map((userData, index) => (
              <div
                key={userData.id}
                className={`p-6 hover:bg-white/5 transition-colors ${
                  userData.id === user.id ? "bg-[#D4AF37]/10" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {getMedalIcon(index + 1)}
                  </div>
                  <img
                    src={userData.foto_perfil}
                    alt={userData.nome}
                    className="w-12 h-12 rounded-full border-2 border-[#D4AF37]"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold text-white truncate">
                        {userData.nome}
                        {userData.id === user.id && (
                          <span className="ml-2 text-sm text-[#D4AF37]">(Você)</span>
                        )}
                      </h4>
                      {getPlanBadge(userData.plano)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {userData.medalhas} medalhas
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {userData.cursos_concluidos} cursos
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-[#D4AF37]">{userData.pontos}</p>
                    <p className="text-xs text-gray-400">XP</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

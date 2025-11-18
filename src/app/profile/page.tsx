"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Calendar,
  Crown,
  Edit,
  ArrowLeft,
  Star,
  Trophy,
  Target,
  Flame,
  Clock,
  BookOpen,
  Award
} from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mock user data - em produção, viria do banco de dados
  const userData = {
    id: "1",
    name: "Usuário Elite",
    email: "usuario@elitelife.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Empreendedora, estudante, foco em finanças e saúde.",
    age: 28,
    plan: "free" as const,
    createdAt: "2024-01-15",
    level: 1,
    xp: 0,
    xpToNextLevel: 1000,
    streak: 0,
    totalMedals: 0,
    hoursStudied: 0,
    daysStudied: 0,
    coursesCompleted: 0,
    coursesInProgress: 0,
    trailsCompleted: 0,
    quizzesCompleted: 0,
    activitiesCompleted: 0,
    weeklyPoints: 0,
    totalPoints: 0,
    ranking: 9999
  };

  const planNames = {
    free: "Plano Gratuito",
    basic: "Plano Básico",
    premium: "Plano Premium",
    elite: "Plano Elite"
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Voltar</span>
            </button>
            
            <h1 className="text-xl font-bold text-white">Meu Perfil</h1>
            
            <Link
              href="/profile/edit"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
            >
              <Edit className="w-4 h-4" />
              <span className="hidden sm:inline">Editar</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Profile Header */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-8 border border-[#D4AF37]/20 mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/20 blur-2xl rounded-full" />
              <img
                src={userData.avatar}
                alt={userData.name}
                className="relative w-32 h-32 rounded-full border-4 border-[#D4AF37] object-cover"
              />
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full p-2 border-4 border-[#1A1A1A]">
                <Star className="w-6 h-6 text-[#0B0B0B]" />
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">{userData.name}</h2>
              <p className="text-[#9A9A9A] mb-4">{userData.email}</p>
              
              {userData.bio && (
                <p className="text-white/80 mb-4 max-w-2xl">{userData.bio}</p>
              )}

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                {userData.age && (
                  <div className="flex items-center gap-2 text-[#9A9A9A]">
                    <User className="w-4 h-4" />
                    <span>{userData.age} anos</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2 text-[#9A9A9A]">
                  <Calendar className="w-4 h-4" />
                  <span>Membro desde {formatDate(userData.createdAt)}</span>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#D4AF37]/20 to-amber-500/20 border border-[#D4AF37]/50 rounded-full">
                  <Crown className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[#D4AF37] font-semibold">{planNames[userData.plan]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 text-center">
            <Star className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">Nível {userData.level}</div>
            <div className="text-xs text-[#9A9A9A]">{userData.xp} / {userData.xpToNextLevel} XP</div>
          </div>

          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 text-center">
            <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">{userData.streak}</div>
            <div className="text-xs text-[#9A9A9A]">Dias de Streak</div>
          </div>

          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">#{userData.ranking}</div>
            <div className="text-xs text-[#9A9A9A]">Ranking</div>
          </div>

          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 text-center">
            <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">{userData.totalMedals}</div>
            <div className="text-xs text-[#9A9A9A]">Medalhas</div>
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20 mb-8">
          <h3 className="text-xl font-bold text-white mb-6">Estatísticas Detalhadas</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-[#2A2A2A]">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-white">Horas Estudadas</span>
              </div>
              <span className="text-[#D4AF37] font-bold">{userData.hoursStudied}h</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-[#2A2A2A]">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-green-500" />
                <span className="text-white">Dias Estudados</span>
              </div>
              <span className="text-[#D4AF37] font-bold">{userData.daysStudied}</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-[#2A2A2A]">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-purple-500" />
                <span className="text-white">Cursos Concluídos</span>
              </div>
              <span className="text-[#D4AF37] font-bold">{userData.coursesCompleted}</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-[#2A2A2A]">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-cyan-500" />
                <span className="text-white">Trilhas Concluídas</span>
              </div>
              <span className="text-[#D4AF37] font-bold">{userData.trailsCompleted}</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-[#2A2A2A]">
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="text-white">Quizzes Completados</span>
              </div>
              <span className="text-[#D4AF37] font-bold">{userData.quizzesCompleted}</span>
            </div>

            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white">XP Total</span>
              </div>
              <span className="text-[#D4AF37] font-bold">{userData.totalPoints}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/profile/edit"
            className="py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold text-center hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all flex items-center justify-center gap-2"
          >
            <Edit className="w-5 h-5" />
            Editar Perfil
          </Link>

          <Link
            href="/plans"
            className="py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-bold text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
          >
            <Crown className="w-5 h-5" />
            Upgrade de Plano
          </Link>
        </div>
      </div>
    </div>
  );
}

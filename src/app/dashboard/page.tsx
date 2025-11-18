"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Video,
  CheckSquare,
  HelpCircle,
  Play,
  Trophy,
  Award,
  TrendingUp,
  Clock,
  BarChart3,
  Target,
  Flame,
  Medal,
  ChevronRight,
  Sparkles,
  Star,
  Zap
} from "lucide-react";
import { HeroSection } from "@/components/custom/home/hero-section";
import { FeaturedCards } from "@/components/custom/home/featured-cards";
import { TrailsCarousel } from "@/components/custom/home/trails-carousel";
import { RecommendedSection } from "@/components/custom/home/recommended-section";
import { DashboardNav } from "@/components/custom/dashboard-nav";

export default function DashboardPage() {
  // Mock user data - Em produção, viria do banco de dados
  const userData = {
    name: "Usuário Elite",
    avatar: "https://i.pravatar.cc/150?img=12",
    level: 15,
    xp: 3450,
    xpToNextLevel: 5000,
    streak: 12,
    totalMedals: 8,
    hoursStudied: 45,
    coursesCompleted: 3,
    trailsCompleted: 1,
    quizzesCompleted: 24,
    activitiesCompleted: 18,
    weeklyPoints: 850,
    totalPoints: 12450,
    ranking: 42,
    plan: "free" as const // Simula plano do usuário
  };

  // Featured Cards Data
  const featuredData = {
    lastCourse: {
      title: "Finanças Pessoais Avançadas",
      module: "Módulo 3: Investimentos",
      progress: 65,
      thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop"
    },
    dailyMission: {
      title: "Conclua 1 atividade hoje",
      description: "Complete uma atividade para manter seu streak!",
      points: 50,
      medal: "🎯"
    },
    weeklyGoal: {
      title: "3 módulos concluídos nesta semana",
      current: 2,
      target: 3
    }
  };

  // Trails Data
  const trails = [
    {
      id: "1",
      name: "Finanças",
      thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop",
      progress: 65,
      xpEarned: 2450,
      totalXP: 5000,
      medals: 3,
      color: "from-green-500/20 to-emerald-600/20"
    },
    {
      id: "2",
      name: "Mindset",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      progress: 45,
      xpEarned: 1800,
      totalXP: 4000,
      medals: 2,
      color: "from-purple-500/20 to-indigo-600/20"
    },
    {
      id: "3",
      name: "Produtividade",
      thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
      progress: 30,
      xpEarned: 1200,
      totalXP: 4000,
      medals: 1,
      color: "from-blue-500/20 to-cyan-600/20"
    },
    {
      id: "4",
      name: "E-commerce",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      progress: 20,
      xpEarned: 800,
      totalXP: 4000,
      medals: 1,
      color: "from-orange-500/20 to-red-600/20"
    },
    {
      id: "5",
      name: "Saúde",
      thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
      progress: 55,
      xpEarned: 2200,
      totalXP: 4000,
      medals: 2,
      color: "from-pink-500/20 to-rose-600/20"
    }
  ];

  // Recommended Items
  const recommendedItems = [
    {
      id: "1",
      type: "course" as const,
      title: "Investimentos para Iniciantes",
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      tag: "Recomendado",
      duration: "2h 30min",
      points: 150
    },
    {
      id: "2",
      type: "video" as const,
      title: "Como Criar Rotinas Vencedoras",
      thumbnail: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop",
      tag: "Popular",
      duration: "15min",
      points: 50
    },
    {
      id: "3",
      type: "activity" as const,
      title: "Planejamento Financeiro Mensal",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      tag: "Baseado no seu progresso",
      points: 100
    },
    {
      id: "4",
      type: "quiz" as const,
      title: "Quiz: Teste seus Conhecimentos",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      tag: "Mais adequado para você agora",
      points: 75
    }
  ];

  // Courses in Progress
  const coursesInProgress = [
    {
      id: "1",
      title: "Finanças Pessoais Avançadas",
      thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop",
      progress: 65,
      modulesCompleted: 8,
      totalModules: 12,
      category: "Finanças"
    },
    {
      id: "2",
      title: "Mindset de Alta Performance",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      progress: 45,
      modulesCompleted: 5,
      totalModules: 10,
      category: "Mindset"
    },
    {
      id: "3",
      title: "Produtividade Extrema",
      thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
      progress: 30,
      modulesCompleted: 3,
      totalModules: 8,
      category: "Produtividade"
    }
  ];

  // Recent Activities
  const recentActivities = [
    {
      id: "1",
      title: "Mapeamento de Metas Financeiras",
      difficulty: "Médio",
      points: 100,
      status: "pending" as const
    },
    {
      id: "2",
      title: "Análise de Investimentos",
      difficulty: "Difícil",
      points: 150,
      status: "pending" as const
    },
    {
      id: "3",
      title: "Planejamento Semanal",
      difficulty: "Fácil",
      points: 50,
      status: "completed" as const
    }
  ];

  // Pending Quizzes
  const pendingQuizzes = [
    {
      id: "1",
      title: "Quiz: Fundamentos de Investimentos",
      questions: 10,
      points: 100,
      medal: "🏆"
    },
    {
      id: "2",
      title: "Quiz: Produtividade Avançada",
      questions: 15,
      points: 150,
      medal: "💎"
    }
  ];

  // Recent Videos
  const recentVideos = [
    {
      id: "1",
      title: "Como Investir em Ações",
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      duration: "15:30",
      progress: 45
    },
    {
      id: "2",
      title: "Rotina Matinal de Sucesso",
      thumbnail: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop",
      duration: "12:15",
      progress: 0
    },
    {
      id: "3",
      title: "Técnicas de Foco Profundo",
      thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
      duration: "18:45",
      progress: 100
    }
  ];

  // Recent Medals
  const recentMedals = [
    {
      id: "1",
      name: "Iniciante",
      icon: "🌱",
      unlocked: true,
      progress: 100
    },
    {
      id: "2",
      name: "Bronze",
      icon: "🥉",
      unlocked: true,
      progress: 100
    },
    {
      id: "3",
      name: "Prata",
      icon: "🥈",
      unlocked: true,
      progress: 100
    },
    {
      id: "4",
      name: "Ouro",
      icon: "🥇",
      unlocked: false,
      progress: 75
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]">
      {/* Dashboard Navigation with Locks */}
      <DashboardNav userPlan={userData.plan} />

      {/* Quick Access Menu (Mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-[#D4AF37]/20 z-50 lg:hidden">
        <div className="flex items-center justify-around py-3">
          <Link href="/dashboard" className="flex flex-col items-center gap-1 text-[#D4AF37]">
            <Target className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link href="/courses" className="flex flex-col items-center gap-1 text-white hover:text-[#D4AF37] transition-colors">
            <BookOpen className="w-6 h-6" />
            <span className="text-xs font-medium">Cursos</span>
          </Link>
          <Link href="/activities" className="flex flex-col items-center gap-1 text-white hover:text-[#D4AF37] transition-colors">
            <CheckSquare className="w-6 h-6" />
            <span className="text-xs font-medium">Atividades</span>
          </Link>
          <Link href="/ranking" className="flex flex-col items-center gap-1 text-white hover:text-[#D4AF37] transition-colors">
            <Trophy className="w-6 h-6" />
            <span className="text-xs font-medium">Ranking</span>
          </Link>
          <Link href="/certificates" className="flex flex-col items-center gap-1 text-white hover:text-[#D4AF37] transition-colors">
            <Award className="w-6 h-6" />
            <span className="text-xs font-medium">Certificados</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 lg:pb-8 pt-24">
        {/* Hero Section */}
        <div className="mb-8">
          <HeroSection
            userName={userData.name}
            userAvatar={userData.avatar}
            userLevel={userData.level}
            userXP={userData.xp}
            xpToNextLevel={userData.xpToNextLevel}
            streak={userData.streak}
            totalMedals={userData.totalMedals}
          />
        </div>

        {/* Featured Cards */}
        <div className="mb-12">
          <FeaturedCards
            lastCourse={featuredData.lastCourse}
            dailyMission={featuredData.dailyMission}
            weeklyGoal={featuredData.weeklyGoal}
          />
        </div>

        {/* Trails Carousel */}
        <TrailsCarousel trails={trails} />

        {/* Recommended Section */}
        <RecommendedSection items={recommendedItems} />

        {/* Courses in Progress */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Seus Cursos em Andamento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesInProgress.map((course) => (
              <Link
                key={course.id}
                href="/courses"
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all group cursor-pointer hover:scale-105"
              >
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="text-xs text-[#D4AF37] font-bold mb-2">{course.category}</div>
                  <h3 className="text-white font-semibold mb-3 line-clamp-2">{course.title}</h3>
                  
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-[#9A9A9A]">
                        {course.modulesCompleted} / {course.totalModules} módulos
                      </span>
                      <span className="text-xs text-[#D4AF37] font-bold">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-[#2A2A2A] rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#D4AF37] to-amber-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <button className="w-full py-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2">
                    Continuar
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Activities and Quizzes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Recent Activities */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Últimas Atividades</h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <Link
                  key={activity.id}
                  href="/activities"
                  className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all group cursor-pointer hover:scale-105 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">{activity.title}</h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className={`px-2 py-1 rounded-lg ${
                        activity.difficulty === "Fácil"
                          ? "bg-green-500/20 text-green-400"
                          : activity.difficulty === "Médio"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}>
                        {activity.difficulty}
                      </span>
                      <span className="text-[#D4AF37] font-bold">+{activity.points} XP</span>
                    </div>
                  </div>
                  <div>
                    {activity.status === "completed" ? (
                      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                        <CheckSquare className="w-5 h-5 text-green-400" />
                      </div>
                    ) : (
                      <ChevronRight className="w-6 h-6 text-[#9A9A9A] group-hover:text-[#D4AF37]" />
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Pending Quizzes */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Quizzes Pendentes</h2>
            <div className="space-y-4">
              {pendingQuizzes.map((quiz) => (
                <Link
                  key={quiz.id}
                  href="/quizzes"
                  className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all group cursor-pointer hover:scale-105 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{quiz.medal}</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{quiz.title}</h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-[#9A9A9A]">{quiz.questions} perguntas</span>
                        <span className="text-[#D4AF37] font-bold">+{quiz.points} XP</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-[#9A9A9A] group-hover:text-[#D4AF37]" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Videos */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Vídeos Recentes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentVideos.map((video) => (
              <Link
                key={video.id}
                href="/video-player"
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all group cursor-pointer hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded-lg">
                    <span className="text-xs text-white font-bold">{video.duration}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-3 line-clamp-2">{video.title}</h3>
                  
                  {video.progress > 0 && (
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-[#9A9A9A]">Progresso</span>
                        <span className="text-xs text-[#D4AF37] font-bold">{video.progress}%</span>
                      </div>
                      <div className="w-full bg-[#2A2A2A] rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-red-500 to-pink-600 h-2 rounded-full"
                          style={{ width: `${video.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <button className="w-full py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2">
                    {video.progress > 0 ? "Continuar" : "Assistir"}
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Progress Stats */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Progresso Resumido</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 text-center">
              <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1" suppressHydrationWarning>{userData.streak}</div>
              <div className="text-xs text-[#9A9A9A]">Dias</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 text-center">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1" suppressHydrationWarning>{userData.hoursStudied}h</div>
              <div className="text-xs text-[#9A9A9A]">Estudadas</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 text-center">
              <BookOpen className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1" suppressHydrationWarning>{userData.coursesCompleted}</div>
              <div className="text-xs text-[#9A9A9A]">Cursos</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 text-center">
              <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1" suppressHydrationWarning>{userData.trailsCompleted}</div>
              <div className="text-xs text-[#9A9A9A]">Trilhas</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 text-center">
              <HelpCircle className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1" suppressHydrationWarning>{userData.quizzesCompleted}</div>
              <div className="text-xs text-[#9A9A9A]">Quizzes</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 text-center">
              <CheckSquare className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1" suppressHydrationWarning>{userData.activitiesCompleted}</div>
              <div className="text-xs text-[#9A9A9A]">Atividades</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 text-center">
              <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1" suppressHydrationWarning>{userData.weeklyPoints}</div>
              <div className="text-xs text-[#9A9A9A]">XP Semanal</div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl p-4 border border-[#D4AF37]/20 text-center">
              <Star className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1" suppressHydrationWarning>{userData.totalPoints}</div>
              <div className="text-xs text-[#9A9A9A]">XP Total</div>
            </div>
          </div>
        </div>

        {/* Medals and Ranking Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Medals */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Medalhas Recentes</h2>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <div className="grid grid-cols-2 gap-4">
                {recentMedals.map((medal) => (
                  <div
                    key={medal.id}
                    className={`bg-[#2A2A2A] rounded-xl p-4 text-center ${
                      !medal.unlocked && "opacity-50"
                    }`}
                  >
                    <div className="text-4xl mb-2">{medal.icon}</div>
                    <div className="text-white font-semibold mb-2">{medal.name}</div>
                    {!medal.unlocked && (
                      <div>
                        <div className="text-xs text-[#9A9A9A] mb-1">{medal.progress}%</div>
                        <div className="w-full bg-[#1A1A1A] rounded-full h-1">
                          <div
                            className="bg-gradient-to-r from-[#D4AF37] to-amber-600 h-1 rounded-full"
                            style={{ width: `${medal.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ranking Card */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Seu Ranking</h2>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-6 border border-[#D4AF37]/20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-[#9A9A9A] mb-1">Sua Posição</div>
                  <div className="text-4xl font-bold text-[#D4AF37]" suppressHydrationWarning>#{userData.ranking}</div>
                </div>
                <Trophy className="w-16 h-16 text-[#D4AF37]" />
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[#9A9A9A]">Pontos Totais</span>
                  <span className="text-white font-bold" suppressHydrationWarning>{userData.totalPoints} XP</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#9A9A9A]">Pontos esta Semana</span>
                  <span className="text-[#D4AF37] font-bold" suppressHydrationWarning>+{userData.weeklyPoints} XP</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#9A9A9A]">Para Subir</span>
                  <span className="text-white font-bold">150 XP</span>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all flex items-center justify-center gap-2">
                Ver Ranking Completo
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

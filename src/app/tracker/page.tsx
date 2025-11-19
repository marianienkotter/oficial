"use client";

import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Award, 
  Clock, 
  Target,
  BookOpen,
  CheckCircle2,
  Zap,
  Calendar,
  X
} from 'lucide-react';
import { useUserProgress } from '@/contexts/UserProgressContext';
import { MedalBadge } from '@/components/custom/medal-badge';
import Link from 'next/link';

interface ActivityDetail {
  date: string;
  type: string;
  points: number;
  course: string;
}

export default function TrackerPage() {
  const { user, progress } = useUserProgress();
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('week');
  const [selectedActivity, setSelectedActivity] = useState<ActivityDetail | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Dados simulados para gráficos (em produção, viria do backend)
  const weeklyData = [
    { day: 'Seg', xp: 120, hours: 2, activities: [
      { date: '18/03/2024', type: 'Aula Concluída', points: 50, course: 'Investimentos' },
      { date: '18/03/2024', type: 'Quiz Aprovado', points: 70, course: 'Mindset' }
    ]},
    { day: 'Ter', xp: 200, hours: 3.5, activities: [
      { date: '19/03/2024', type: 'Módulo Completo', points: 200, course: 'E-commerce' }
    ]},
    { day: 'Qua', xp: 150, hours: 2.5, activities: [
      { date: '20/03/2024', type: 'Atividade Prática', points: 150, course: 'Produtividade' }
    ]},
    { day: 'Qui', xp: 300, hours: 4, activities: [
      { date: '21/03/2024', type: 'Prova Aprovada', points: 300, course: 'Finanças' }
    ]},
    { day: 'Sex', xp: 180, hours: 3, activities: [
      { date: '22/03/2024', type: 'Quiz Aprovado', points: 180, course: 'Marketing' }
    ]},
    { day: 'Sáb', xp: 250, hours: 4.5, activities: [
      { date: '23/03/2024', type: 'Curso Concluído', points: 250, course: 'Vendas' }
    ]},
    { day: 'Dom', xp: 100, hours: 1.5, activities: [
      { date: '24/03/2024', type: 'Revisão', points: 100, course: 'Revisão Geral' }
    ]},
  ];

  const maxXP = Math.max(...weeklyData.map(d => d.xp));

  const handleBarClick = (dayData: typeof weeklyData[0]) => {
    if (dayData.activities.length > 0) {
      setSelectedActivity(dayData.activities[0]);
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] pt-24 pb-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-[#D4AF37]/50">
                <BarChart3 className="w-8 h-8 text-[#0B0B0B]" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">Tracker de Progresso</h1>
                <p className="text-[#9A9A9A]">Acompanhe sua evolução em tempo real</p>
              </div>
            </div>
            <Link
              href="/home"
              className="px-6 py-3 bg-[#2A2A2A] text-white rounded-xl hover:bg-[#3A3A3A] transition-all font-medium"
            >
              Voltar
            </Link>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-[#9A9A9A] text-sm mb-1">XP Total</p>
            <p className="text-white font-bold text-3xl">{progress?.totalXP || 0}</p>
            <div className="mt-2 text-xs text-green-500 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +12% esta semana
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-500" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-[#9A9A9A] text-sm mb-1">Cursos Concluídos</p>
            <p className="text-white font-bold text-3xl">{progress?.coursesCompleted || 0}</p>
            <div className="mt-2 text-xs text-blue-400">
              {15 - (progress?.coursesCompleted || 0)} para Diamante
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-purple-500" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-[#9A9A9A] text-sm mb-1">Aulas Assistidas</p>
            <p className="text-white font-bold text-3xl">{progress?.lessonsCompleted || 0}</p>
            <div className="mt-2 text-xs text-purple-400">
              Média: 5 aulas/dia
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-[#9A9A9A] text-sm mb-1">Horas de Estudo</p>
            <p className="text-white font-bold text-3xl">{progress?.studyHours || 0}h</p>
            <div className="mt-2 text-xs text-orange-400">
              Meta: 20h/mês
            </div>
          </div>
        </div>

        {/* Gráfico Interativo Premium */}
        <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-8 mb-8 border border-[#D4AF37]/30 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-white font-bold text-2xl flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-black" />
              </div>
              Evolução de XP
            </h2>
            <div className="flex gap-2">
              {(['week', 'month', 'year'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    timeRange === range
                      ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black shadow-lg shadow-[#D4AF37]/50'
                      : 'bg-[#1A1A1A] text-[#9A9A9A] hover:text-white hover:bg-[#2A2A2A]'
                  }`}
                >
                  {range === 'week' ? 'Semana' : range === 'month' ? 'Mês' : 'Ano'}
                </button>
              ))}
            </div>
          </div>

          {/* Gráfico de Barras Interativo */}
          <div className="space-y-5">
            {weeklyData.map((data, index) => (
              <div key={data.day} className="group">
                <div className="flex items-center gap-4">
                  <span className="text-[#9A9A9A] text-sm font-bold w-14">{data.day}</span>
                  <div className="flex-1 h-16 bg-[#1A1A1A] rounded-xl overflow-hidden relative group-hover:ring-2 group-hover:ring-[#D4AF37]/50 transition-all cursor-pointer"
                       onClick={() => handleBarClick(data)}>
                    <div
                      className="h-full bg-gradient-to-r from-[#D4AF37] via-amber-500 to-amber-600 transition-all duration-700 flex items-center justify-end pr-6 relative group-hover:shadow-lg group-hover:shadow-[#D4AF37]/50"
                      style={{ 
                        width: `${(data.xp / maxXP) * 100}%`,
                        animation: `slideIn 0.8s ease-out ${index * 0.1}s both`
                      }}
                    >
                      {/* Efeito de brilho */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      
                      {/* Pontos pulsantes */}
                      <div className="absolute right-4 w-3 h-3 bg-white rounded-full animate-pulse shadow-lg"></div>
                      
                      <span className="text-black font-bold text-base relative z-10">{data.xp} XP</span>
                    </div>
                    
                    {/* Tooltip ao hover */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <p className="text-white text-sm font-semibold">Clique para ver detalhes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-20">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-white font-bold text-sm">{data.hours}h</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legenda */}
          <div className="mt-8 pt-6 border-t border-[#3A3A3A] flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded"></div>
                <span className="text-[#9A9A9A] text-sm">XP Ganho</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#9A9A9A] text-sm">Horas de Estudo</span>
              </div>
            </div>
            <p className="text-[#9A9A9A] text-sm italic">Clique nas barras para ver detalhes</p>
          </div>
        </div>

        {/* Achievements & Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Medal */}
          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20">
            <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-[#D4AF37]" />
              Medalha Atual
            </h2>
            <div className="flex flex-col items-center">
              {progress && <MedalBadge medal={progress.currentMedal} size="lg" />}
              <div className="mt-6 w-full">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#9A9A9A]">Progresso para Diamante</span>
                  <span className="text-[#D4AF37] font-bold">
                    {Math.round(((progress?.coursesCompleted || 0) / 15) * 100)}%
                  </span>
                </div>
                <div className="w-full h-3 bg-[#1A1A1A] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-600 transition-all duration-500"
                    style={{ width: `${Math.min(100, ((progress?.coursesCompleted || 0) / 15) * 100)}%` }}
                  />
                </div>
              </div>
              <p className="text-[#9A9A9A] text-center mt-4">
                Complete mais {15 - (progress?.coursesCompleted || 0)} cursos para alcançar Diamante
              </p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-6 border border-[#D4AF37]/20">
            <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-[#D4AF37]" />
              Atividade Recente
            </h2>
            <div className="space-y-4">
              {[
                { action: 'Concluiu aula', course: 'Investimentos', xp: 10, time: '2h atrás', icon: BookOpen, color: 'blue' },
                { action: 'Completou atividade', course: 'Mindset', xp: 30, time: '5h atrás', icon: CheckCircle2, color: 'green' },
                { action: 'Passou no quiz', course: 'Produtividade', xp: 50, time: '1d atrás', icon: Trophy, color: 'purple' },
                { action: 'Finalizou módulo', course: 'E-commerce', xp: 200, time: '2d atrás', icon: Award, color: 'orange' },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-[#1A1A1A] rounded-xl hover:bg-[#2A2A2A] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-${activity.color}-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <activity.icon className={`w-5 h-5 text-${activity.color}-500`} />
                    </div>
                    <div>
                      <p className="text-white font-medium">{activity.action}</p>
                      <p className="text-[#9A9A9A] text-sm">{activity.course}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#D4AF37] font-bold">+{activity.xp} XP</p>
                    <p className="text-[#9A9A9A] text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-[#9A9A9A] mb-4">Continue sua jornada de aprendizado!</p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-[#0B0B0B] rounded-xl font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all hover:scale-105"
          >
            <BookOpen className="w-5 h-5" />
            Continuar Estudando
          </Link>
        </div>
      </div>

      {/* Modal de Detalhes da Atividade */}
      {showModal && selectedActivity && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border-2 border-[#D4AF37] rounded-3xl max-w-md w-full p-8 relative animate-slideUp shadow-2xl shadow-[#D4AF37]/50">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-[#1A1A1A] hover:bg-red-500/20 rounded-full flex items-center justify-center transition-all group"
            >
              <X className="w-5 h-5 text-[#9A9A9A] group-hover:text-red-500" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#D4AF37]/50">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Detalhes da Atividade</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-[#1A1A1A] rounded-xl p-4 border border-[#D4AF37]/20">
                <p className="text-[#9A9A9A] text-sm mb-1">Data</p>
                <p className="text-white font-bold">{selectedActivity.date}</p>
              </div>

              <div className="bg-[#1A1A1A] rounded-xl p-4 border border-[#D4AF37]/20">
                <p className="text-[#9A9A9A] text-sm mb-1">Tipo de Atividade</p>
                <p className="text-white font-bold">{selectedActivity.type}</p>
              </div>

              <div className="bg-[#1A1A1A] rounded-xl p-4 border border-[#D4AF37]/20">
                <p className="text-[#9A9A9A] text-sm mb-1">Curso Relacionado</p>
                <p className="text-white font-bold">{selectedActivity.course}</p>
              </div>

              <div className="bg-gradient-to-r from-[#D4AF37]/20 to-amber-600/20 rounded-xl p-4 border border-[#D4AF37]">
                <p className="text-[#D4AF37] text-sm mb-1">Pontos Ganhos</p>
                <p className="text-white font-bold text-2xl">+{selectedActivity.points} XP</p>
              </div>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold rounded-xl hover:scale-105 transition-all"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

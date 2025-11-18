'use client';

import { PerformanceStats } from '@/lib/types/progress';
import {
  CheckCircle,
  Target,
  Clock,
  TrendingUp,
  Award,
  Zap,
  Calendar,
} from 'lucide-react';

interface PerformanceStatsDisplayProps {
  stats: PerformanceStats;
}

export default function PerformanceStatsDisplay({ stats }: PerformanceStatsDisplayProps) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-yellow-500/20 rounded-2xl p-6 shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-1">Desempenho Pessoal</h3>
      <p className="text-sm text-gray-400 mb-6">Análise completa do seu progresso</p>

      {/* Grid de estatísticas principais */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-green-400" />
            <span className="text-xs text-gray-400">Taxa de Conclusão</span>
          </div>
          <p className="text-2xl font-bold text-white">{stats.completionRate}%</p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-gray-400">Média em Quizzes</span>
          </div>
          <p className="text-2xl font-bold text-white">{stats.averageQuizScore}%</p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span className="text-xs text-gray-400">Horas Totais</span>
          </div>
          <p className="text-2xl font-bold text-white">{stats.totalHoursStudied}h</p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-yellow-400" />
            <span className="text-xs text-gray-400">Horas/Semana</span>
          </div>
          <p className="text-2xl font-bold text-white">{stats.hoursPerWeek}h</p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-xs text-gray-400">Quizzes</span>
          </div>
          <p className="text-2xl font-bold text-white">{stats.quizzesCompleted}</p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-pink-400" />
            <span className="text-xs text-gray-400">Atividades</span>
          </div>
          <p className="text-2xl font-bold text-white">{stats.activitiesCompleted}</p>
        </div>
      </div>

      {/* Destaques */}
      <div className="space-y-3">
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 border border-blue-500/20 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Melhor Semana</p>
                <p className="text-white font-semibold">{stats.bestWeek.week}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-400">{stats.bestWeek.xp}</p>
              <p className="text-xs text-gray-500">XP ganhos</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <TrendingUp className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Melhor Mês</p>
                <p className="text-white font-semibold">{stats.bestMonth.month}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-purple-400">{stats.bestMonth.xp}</p>
              <p className="text-xs text-gray-500">XP ganhos</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Desafios Concluídos</p>
                <p className="text-white font-semibold">Total de conquistas</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-400">{stats.challengesCompleted}</p>
              <p className="text-xs text-gray-500">desafios</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

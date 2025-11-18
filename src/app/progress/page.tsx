'use client';

import { useState } from 'react';
import ProgressSummary from '@/components/custom/progress-summary';
import ProgressChart from '@/components/custom/progress-chart';
import TrailProgressList from '@/components/custom/trail-progress';
import CourseProgressList from '@/components/custom/course-progress';
import StreakCalendar from '@/components/custom/streak-calendar';
import PerformanceStatsDisplay from '@/components/custom/performance-stats';
import UserGoals from '@/components/custom/user-goals';
import RankingComparisonDisplay from '@/components/custom/ranking-comparison';
import ActivityTimeline from '@/components/custom/activity-timeline';
import {
  mockUserProgress,
  mockXPEvolutionDaily,
  mockXPEvolutionWeekly,
  mockXPEvolutionMonthly,
  mockTrailProgress,
  mockCourseProgress,
  mockStreakData,
  mockPerformanceStats,
  mockUserGoals,
  mockRankingComparison,
  mockActivityHistory,
} from '@/lib/data/progress-data';
import { TrendingUp, Target, Lightbulb, ArrowRight } from 'lucide-react';

export default function ProgressPage() {
  const [showSuggestions, setShowSuggestions] = useState(true);

  // Gatilhos inteligentes baseados nos dados
  const smartSuggestions = [
    {
      id: '1',
      title: 'Continue sua trilha de Finanças',
      description: 'Você está a 75% de concluir! Faltam apenas 2 cursos.',
      action: 'Continuar',
      icon: TrendingUp,
      color: 'from-yellow-500 to-amber-600',
    },
    {
      id: '2',
      title: 'Faltam 3 aulas para concluir',
      description: 'Investimentos para Iniciantes - 85% concluído',
      action: 'Assistir',
      icon: Target,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: '3',
      title: 'Você está perto do próximo nível',
      description: 'Ganhe mais 550 XP para alcançar o Elite Nível 8',
      action: 'Ver atividades',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Meu Progresso</h1>
          <p className="text-gray-400">
            Acompanhe sua evolução e conquiste seus objetivos
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Gatilhos inteligentes */}
        {showSuggestions && (
          <div className="mb-8 bg-gradient-to-r from-yellow-500/10 to-amber-600/10 border border-yellow-500/20 rounded-2xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                <div>
                  <h3 className="text-lg font-bold text-white">Sugestões Inteligentes</h3>
                  <p className="text-sm text-gray-400">Ações recomendadas para você</p>
                </div>
              </div>
              <button
                onClick={() => setShowSuggestions(false)}
                className="text-gray-500 hover:text-gray-400 text-sm"
              >
                Dispensar
              </button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {smartSuggestions.map((suggestion) => {
                const Icon = suggestion.icon;
                return (
                  <div
                    key={suggestion.id}
                    className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-4 hover:border-yellow-500/30 transition-all cursor-pointer group"
                  >
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${suggestion.color} rounded-lg flex items-center justify-center mb-3`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-1 group-hover:text-yellow-500 transition-colors">
                      {suggestion.title}
                    </h4>
                    <p className="text-xs text-gray-400 mb-3">{suggestion.description}</p>
                    <button className="flex items-center gap-1 text-sm text-yellow-500 font-medium group-hover:gap-2 transition-all">
                      {suggestion.action}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Grid principal */}
        <div className="space-y-8">
          {/* Resumo geral */}
          <ProgressSummary data={mockUserProgress} />

          {/* Gráfico de evolução */}
          <ProgressChart
            dailyData={mockXPEvolutionDaily}
            weeklyData={mockXPEvolutionWeekly}
            monthlyData={mockXPEvolutionMonthly}
          />

          {/* Grid de 2 colunas */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Progresso por trilha */}
            <TrailProgressList trails={mockTrailProgress} />

            {/* Status de constância */}
            <StreakCalendar data={mockStreakData} />
          </div>

          {/* Progresso por curso */}
          <CourseProgressList courses={mockCourseProgress} />

          {/* Grid de 2 colunas */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Análise de desempenho */}
            <PerformanceStatsDisplay stats={mockPerformanceStats} />

            {/* Metas do usuário */}
            <UserGoals goals={mockUserGoals} />
          </div>

          {/* Comparação com ranking */}
          <RankingComparisonDisplay data={mockRankingComparison} />

          {/* Histórico de atividades */}
          <ActivityTimeline activities={mockActivityHistory} />
        </div>
      </div>
    </div>
  );
}

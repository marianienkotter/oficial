'use client';

import { UserGoal } from '@/lib/types/progress';
import { Target, Flame, Award, CheckCircle, ChevronRight } from 'lucide-react';

interface UserGoalsProps {
  goals: UserGoal[];
}

const iconMap: Record<string, any> = {
  Target,
  Flame,
  Award,
  CheckCircle,
};

export default function UserGoals({ goals }: UserGoalsProps) {
  const activeGoals = goals.filter((g) => !g.completed);
  const completedGoals = goals.filter((g) => g.completed);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-yellow-500/20 rounded-2xl p-6 shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-1">Minhas Metas</h3>
      <p className="text-sm text-gray-400 mb-6">Acompanhe seus objetivos e conquistas</p>

      {/* Metas ativas */}
      {activeGoals.length > 0 && (
        <div className="space-y-3 mb-6">
          {activeGoals.map((goal) => {
            const Icon = iconMap[goal.icon];
            const progressPercentage = (goal.progress / goal.target) * 100;

            return (
              <div
                key={goal.id}
                className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:border-yellow-500/30 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-yellow-500 transition-colors">
                          {goal.title}
                        </h4>
                        <p className="text-xs text-gray-400">{goal.description}</p>
                      </div>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full capitalize">
                        {goal.type === 'weekly'
                          ? 'Semanal'
                          : goal.type === 'monthly'
                          ? 'Mensal'
                          : 'Personalizada'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-500">Progresso</span>
                    <span className="text-xs font-semibold text-yellow-500">
                      {goal.progress} / {goal.target}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-amber-600 transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">
                    {Math.round(progressPercentage)}% concluído
                  </span>
                  <span className="text-gray-500">
                    Faltam {goal.target - goal.progress}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Metas concluídas */}
      {completedGoals.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-3">Metas Concluídas</h4>
          <div className="space-y-2">
            {completedGoals.map((goal) => {
              const Icon = iconMap[goal.icon];
              return (
                <div
                  key={goal.id}
                  className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 flex items-center gap-3"
                >
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Icon className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white font-semibold">{goal.title}</p>
                    <p className="text-xs text-gray-400">{goal.description}</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* CTA para adicionar meta */}
      <button className="w-full mt-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-yellow-500/30 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2 group">
        <Target className="w-4 h-4 group-hover:text-yellow-500 transition-colors" />
        Adicionar Nova Meta
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

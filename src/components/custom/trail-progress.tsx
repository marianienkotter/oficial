'use client';

import { TrailProgress } from '@/lib/types/progress';
import { TrendingUp, Brain, Zap, ShoppingCart, Heart, ChevronRight } from 'lucide-react';

interface TrailProgressListProps {
  trails: TrailProgress[];
}

const iconMap: Record<string, any> = {
  TrendingUp,
  Brain,
  Zap,
  ShoppingCart,
  Heart,
};

export default function TrailProgressList({ trails }: TrailProgressListProps) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-yellow-500/20 rounded-2xl p-6 shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-1">Minhas Trilhas</h3>
      <p className="text-sm text-gray-400 mb-6">Progresso em cada área de conhecimento</p>

      <div className="space-y-4">
        {trails.map((trail) => {
          const Icon = iconMap[trail.icon];
          return (
            <div
              key={trail.id}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:border-yellow-500/30 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${trail.color}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-yellow-500 transition-colors">
                      {trail.name}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {trail.completedCourses} de {trail.totalCourses} cursos
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-yellow-500 transition-colors" />
              </div>

              {/* Barra de progresso */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-500">Progresso</span>
                  <span className="text-xs font-semibold text-yellow-500">{trail.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${trail.color} transition-all duration-500`}
                    style={{ width: `${trail.progress}%` }}
                  />
                </div>
              </div>

              {/* Estatísticas */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {trail.medals.map((medal, idx) => (
                    <span key={idx} className="text-lg">
                      {medal}
                    </span>
                  ))}
                  {trail.medals.length === 0 && (
                    <span className="text-xs text-gray-600">Nenhuma medalha ainda</span>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">XP Ganho</p>
                  <p className="text-sm font-semibold text-yellow-500">{trail.xpEarned} XP</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

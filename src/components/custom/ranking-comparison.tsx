'use client';

import { RankingComparison } from '@/lib/types/progress';
import { TrendingUp, Award, Zap, Target } from 'lucide-react';

interface RankingComparisonDisplayProps {
  data: RankingComparison;
}

export default function RankingComparisonDisplay({ data }: RankingComparisonDisplayProps) {
  const progressToTop10 = (data.userXP / data.top10Average) * 100;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-yellow-500/20 rounded-2xl p-6 shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-1">Meu Desempenho x Top 10</h3>
      <p className="text-sm text-gray-400 mb-6">Compare seu progresso com os melhores</p>

      {/* Comparação visual */}
      <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-400 mb-1">Sua Posição</p>
            <p className="text-3xl font-bold text-white">#{data.userPosition}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400 mb-1">Seu XP</p>
            <p className="text-3xl font-bold text-yellow-500">{data.userXP}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-500">Progresso até Top 10</span>
            <span className="text-xs font-semibold text-yellow-500">
              {Math.round(progressToTop10)}%
            </span>
          </div>
          <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-500 to-amber-600 transition-all duration-500"
              style={{ width: `${progressToTop10}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
          <div>
            <p className="text-xs text-gray-400 mb-1">Média Top 10</p>
            <p className="text-xl font-bold text-white">{data.top10Average} XP</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 mb-1">Faltam</p>
            <p className="text-xl font-bold text-red-400">{data.xpToTop10} XP</p>
          </div>
        </div>
      </div>

      {/* Atividades sugeridas */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-yellow-500" />
          <h4 className="text-sm font-semibold text-white">Atividades Recomendadas</h4>
        </div>
        <div className="space-y-2">
          {data.suggestedActivities.map((activity, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:border-yellow-500/30 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="text-sm text-white group-hover:text-yellow-500 transition-colors">
                  {activity.activity}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-green-400">+{activity.xpGain} XP</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Próximas medalhas */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-5 h-5 text-purple-400" />
          <h4 className="text-sm font-semibold text-white">Próximas Medalhas</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {data.nextMedals.map((medal, idx) => (
            <div
              key={idx}
              className="px-3 py-1.5 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300"
            >
              {medal}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Desbloqueie essas medalhas para subir no ranking e ganhar mais XP
        </p>
      </div>
    </div>
  );
}

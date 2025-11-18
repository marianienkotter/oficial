'use client';

import { StreakData } from '@/lib/types/progress';
import { Flame, Target, Calendar } from 'lucide-react';

interface StreakCalendarProps {
  data: StreakData;
}

export default function StreakCalendar({ data }: StreakCalendarProps) {
  const getDayStatus = (date: string) => {
    const day = data.calendar.find((d) => d.date === date);
    return day?.studied || false;
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-yellow-500/20 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
          <Flame className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Constância</h3>
          <p className="text-sm text-gray-400">Mantenha seu ritmo de estudos</p>
        </div>
      </div>

      {/* Estatísticas de streak */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">Sequência Atual</span>
          </div>
          <p className="text-3xl font-bold text-white mb-1">{data.currentStreak}</p>
          <p className="text-xs text-gray-500">dias consecutivos</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">Melhor Sequência</span>
          </div>
          <p className="text-3xl font-bold text-white mb-1">{data.longestStreak}</p>
          <p className="text-xs text-gray-500">dias seguidos</p>
        </div>
      </div>

      {/* Metas */}
      <div className="space-y-4 mb-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Meta Semanal</span>
            <span className="text-sm font-semibold text-yellow-500">
              {data.weeklyProgress} / {data.weeklyGoal} dias
            </span>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-600 transition-all duration-500"
              style={{ width: `${(data.weeklyProgress / data.weeklyGoal) * 100}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Meta Mensal</span>
            <span className="text-sm font-semibold text-yellow-500">
              {data.monthlyProgress} / {data.monthlyGoal} dias
            </span>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-500"
              style={{ width: `${(data.monthlyProgress / data.monthlyGoal) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Calendário visual */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">Últimos 30 dias</span>
        </div>
        <div className="grid grid-cols-10 gap-1.5">
          {data.calendar.slice(0, 30).map((day, idx) => (
            <div
              key={idx}
              className={`aspect-square rounded-md transition-all ${
                day.studied
                  ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/20'
                  : 'bg-gray-700/50'
              }`}
              title={new Date(day.date).toLocaleDateString()}
            />
          ))}
        </div>
        <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
          <span>Menos ativo</span>
          <span>Mais ativo</span>
        </div>
      </div>

      {/* Próximas recompensas */}
      <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
        <p className="text-sm text-yellow-500 font-semibold mb-1">🎯 Próxima Recompensa</p>
        <p className="text-xs text-gray-400">
          Estude por mais {30 - data.currentStreak} dias consecutivos para desbloquear a medalha
          "Constância de Ouro" (+300 XP)
        </p>
      </div>
    </div>
  );
}

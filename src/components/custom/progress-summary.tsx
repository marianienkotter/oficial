'use client';

import { UserProgress } from '@/lib/types/progress';
import { Trophy, Award, Flame, BookOpen } from 'lucide-react';

interface ProgressSummaryProps {
  data: UserProgress;
}

export default function ProgressSummary({ data }: ProgressSummaryProps) {
  const progressPercentage = (data.xp / data.xpToNextLevel) * 100;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-yellow-500/20 rounded-2xl p-6 shadow-2xl">
      {/* Header com foto e nível */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={data.avatar}
          alt={data.name}
          className="w-20 h-20 rounded-full border-4 border-yellow-500 shadow-lg"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-1">{data.name}</h2>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-yellow-500 font-semibold">Elite Nível {data.level}</span>
          </div>
        </div>
      </div>

      {/* Barra de progresso XP */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">XP para próximo nível</span>
          <span className="text-sm font-semibold text-yellow-500">
            {data.xp} / {data.xpToNextLevel} XP
          </span>
        </div>
        <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-500 to-amber-600 transition-all duration-500 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-1 text-right">
          {Math.round(100 - progressPercentage)}% restante
        </p>
      </div>

      {/* Grid de estatísticas */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">Cursos</span>
          </div>
          <p className="text-2xl font-bold text-white">{data.completedCourses}</p>
          <p className="text-xs text-gray-500">de {data.totalCourses} concluídos</p>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">Trilhas</span>
          </div>
          <p className="text-2xl font-bold text-white">{data.completedTrails}</p>
          <p className="text-xs text-gray-500">concluídas</p>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">Medalhas</span>
          </div>
          <p className="text-2xl font-bold text-white">{data.totalMedals}</p>
          <p className="text-xs text-gray-500">conquistadas</p>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">Constância</span>
          </div>
          <p className="text-2xl font-bold text-white">{data.currentStreak}</p>
          <p className="text-xs text-gray-500">dias seguidos</p>
        </div>
      </div>
    </div>
  );
}

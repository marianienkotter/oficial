"use client";

import { Play, Target, Calendar, ChevronRight } from "lucide-react";

interface FeaturedCardsProps {
  lastCourse: {
    title: string;
    module: string;
    progress: number;
    thumbnail: string;
  };
  dailyMission: {
    title: string;
    description: string;
    points: number;
    medal: string;
  };
  weeklyGoal: {
    title: string;
    current: number;
    target: number;
  };
}

export function FeaturedCards({ lastCourse, dailyMission, weeklyGoal }: FeaturedCardsProps) {
  const weeklyProgress = (weeklyGoal.current / weeklyGoal.target) * 100;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Continue de Onde Parou */}
      <div className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all group cursor-pointer">
        <div className="flex items-center gap-2 mb-4">
          <Play className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-bold text-white">Continue de Onde Parou</h3>
        </div>
        
        <div className="mb-4">
          <img
            src={lastCourse.thumbnail}
            alt={lastCourse.title}
            className="w-full h-32 object-cover rounded-xl mb-3"
          />
          <h4 className="text-white font-semibold mb-1">{lastCourse.title}</h4>
          <p className="text-sm text-[#9A9A9A]">{lastCourse.module}</p>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-[#9A9A9A]">Progresso</span>
            <span className="text-xs text-purple-400 font-bold">{lastCourse.progress}%</span>
          </div>
          <div className="w-full bg-[#2A2A2A] rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full"
              style={{ width: `${lastCourse.progress}%` }}
            />
          </div>
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 group-hover:scale-105">
          Continuar
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Missão do Dia */}
      <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all group cursor-pointer">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-orange-400" />
          <h3 className="text-lg font-bold text-white">Missão do Dia</h3>
        </div>
        
        <div className="mb-4">
          <div className="text-4xl mb-3">{dailyMission.medal}</div>
          <h4 className="text-white font-semibold mb-2">{dailyMission.title}</h4>
          <p className="text-sm text-[#9A9A9A] mb-3">{dailyMission.description}</p>
          
          <div className="bg-[#2A2A2A] rounded-xl p-3 flex items-center justify-between">
            <span className="text-sm text-[#9A9A9A]">Recompensa</span>
            <span className="text-lg font-bold text-[#D4AF37]">+{dailyMission.points} XP</span>
          </div>
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-orange-500/50 transition-all flex items-center justify-center gap-2 group-hover:scale-105">
          Iniciar Missão
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Meta da Semana */}
      <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-2xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all group cursor-pointer">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-green-400" />
          <h3 className="text-lg font-bold text-white">Meta da Semana</h3>
        </div>
        
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">{weeklyGoal.title}</h4>
          <p className="text-sm text-[#9A9A9A] mb-4">
            Continue assim para alcançar sua meta semanal!
          </p>
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#9A9A9A]">Progresso</span>
              <span className="text-sm text-green-400 font-bold">
                {weeklyGoal.current} / {weeklyGoal.target}
              </span>
            </div>
            <div className="w-full bg-[#2A2A2A] rounded-full h-3">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full"
                style={{ width: `${weeklyProgress}%` }}
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="flex items-center justify-between text-xs text-[#9A9A9A]">
            <span>Seg</span>
            <span>Ter</span>
            <span>Qua</span>
            <span>Qui</span>
            <span>Sex</span>
            <span>Sáb</span>
            <span>Dom</span>
          </div>
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all flex items-center justify-center gap-2 group-hover:scale-105">
          Ver Detalhes
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
